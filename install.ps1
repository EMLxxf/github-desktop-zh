<#
  github-desktop-zh —— GitHub Desktop 界面汉化补丁（Windows）
  非官方项目，与 GitHub, Inc. 无关联。

  用法：
    powershell -NoProfile -ExecutionPolicy Bypass -File .\install.ps1
    powershell -NoProfile -ExecutionPolicy Bypass -File .\install.ps1 -Revert
    powershell -NoProfile -ExecutionPolicy Bypass -File .\install.ps1 -NoRestart
#>
param(
    [switch]$Revert,
    [switch]$NoRestart,
    [switch]$Debug
)

$ErrorActionPreference = 'Stop'

$here   = Split-Path -Parent $MyInvocation.MyCommand.Path
$srcJs  = Join-Path $here 'src\zh-cn.js'
$tested = '3.6.10'

function Write-Step($msg) { Write-Host "  $msg" -ForegroundColor Gray }
function Write-Ok($msg)   { Write-Host "  $msg" -ForegroundColor Green }
function Write-Warn2($msg){ Write-Host "  $msg" -ForegroundColor Yellow }

function Get-AppDir {
    $root = Join-Path $env:LOCALAPPDATA 'GitHubDesktop'
    if (-not (Test-Path $root)) {
        throw "没找到 $root —— 确认这台机器装过 GitHub Desktop 吗？"
    }

    $dirs = @(Get-ChildItem $root -Directory -Filter 'app-*' -ErrorAction SilentlyContinue |
        Sort-Object {
            $v = $_.Name -replace '^app-', ''
            try { [version]$v } catch { [version]'0.0.0' }
        } -Descending)

    if ($dirs.Count -eq 0) { throw "在 $root 下没找到 app-* 目录。" }

    $app = Join-Path $dirs[0].FullName 'resources\app'
    if (-not (Test-Path (Join-Path $app 'index.html'))) {
        throw "目录结构不符合预期：$app"
    }
    return $app
}

function Stop-GitHubDesktop {
    $procs = @(Get-Process -Name 'GitHubDesktop' -ErrorAction SilentlyContinue)
    if ($procs.Count -gt 0) {
        Write-Step '关闭正在运行的 GitHub Desktop…'
        $procs | Stop-Process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Milliseconds 900
    }
}

function Start-GitHubDesktop($appDir) {
    # appDir = %LOCALAPPDATA%\GitHubDesktop\app-X.Y.Z\resources\app → 往上三层是安装根目录
    $exe = [System.IO.Path]::GetFullPath((Join-Path $appDir '..\..\..\GitHubDesktop.exe'))
    if (-not (Test-Path $exe)) {
        $exe = Join-Path $env:LOCALAPPDATA 'GitHubDesktop\GitHubDesktop.exe'
    }
    if (-not (Test-Path $exe)) {
        $found = Get-ChildItem (Join-Path $env:LOCALAPPDATA 'GitHubDesktop') -Filter 'GitHubDesktop.exe' -Recurse -ErrorAction SilentlyContinue |
            Select-Object -First 1
        if ($found) { $exe = $found.FullName }
    }
    if (-not (Test-Path $exe)) {
        Write-Warn2 '没找到 GitHubDesktop.exe，请手动启动。'
        return
    }
    try {
        Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{
            CommandLine      = "`"$exe`""
            CurrentDirectory = (Split-Path -Parent $exe)
        } | Out-Null
        Write-Ok '已启动 GitHub Desktop'
    } catch {
        Write-Warn2 "自动启动失败，请手动打开：$exe"
    }
}

function Verify-Syntax($jsPath) {
    $node = Get-Command node -ErrorAction SilentlyContinue
    if (-not $node) { return }
    & $node.Source --check $jsPath 2>$null
    if ($LASTEXITCODE -ne 0) { throw "zh-cn.js 语法检查失败，已中止。" }
}

# ---------- main ----------
Write-Host ''
Write-Host 'GitHub Desktop 中文补丁 (github-desktop-zh)' -ForegroundColor Cyan
Write-Host '非官方项目，与 GitHub, Inc. 无关联' -ForegroundColor DarkGray
Write-Host ''

$appDir = Get-AppDir
Write-Host "目标版本目录：" -NoNewline
Write-Host $appDir -ForegroundColor White

$pkg = Join-Path $appDir 'package.json'
if (Test-Path $pkg) {
    try {
        $ver = (Get-Content $pkg -Raw | ConvertFrom-Json).version
        if ($ver -and $ver -ne $tested) {
            Write-Warn2 "注意：当前是 $ver，本补丁在 $tested 上测试过。若个别界面漏译，欢迎提 issue。"
        }
    } catch { }
}

$indexPath = Join-Path $appDir 'index.html'
$mainPath  = Join-Path $appDir 'main.js'
$liveJs    = Join-Path $appDir 'zh-cn.js'
$indexOrig = "$indexPath.orig"
$mainOrig  = "$mainPath.orig"

Stop-GitHubDesktop

if ($Revert) {
    if (Test-Path $indexOrig) {
        Copy-Item $indexOrig $indexPath -Force
        Write-Ok 'index.html 已还原'
    } else {
        Write-Warn2 '没找到 index.html.orig，跳过（可能从未打过补丁）'
    }
    if (Test-Path $mainOrig) {
        Copy-Item $mainOrig $mainPath -Force
        Write-Ok 'main.js 已还原'
    }
    if (Test-Path $liveJs)   { Remove-Item $liveJs -Force }
    $flag = Join-Path $appDir 'cdp.on'
    if (Test-Path $flag) { Remove-Item $flag -Force }
    Write-Host ''
    Write-Host '还原完成 ✅（界面已回到英文原版）' -ForegroundColor Green
    if (-not $NoRestart) { Start-GitHubDesktop $appDir }
    return
}

if (-not (Test-Path $srcJs)) { throw "缺少源文件：$srcJs（是不是只下载了脚本没下 src 目录？）" }
Verify-Syntax $srcJs

# 1. index.html
$html = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
if ($html -match 'zh-cn\.js') {
    Write-Step 'index.html 已包含 zh-cn.js，跳过'
} else {
    if (-not (Test-Path $indexOrig)) {
        Copy-Item $indexPath $indexOrig -Force
        Write-Step '已备份 index.html → index.html.orig'
    }
    $tag = '<script defer src=zh-cn.js></script>'
    if ($html -match '</head>') {
        $new = $html -replace '</head>', ($tag + '</head>')
    } elseif ($html -match '<body') {
        $new = $html -replace '<body', ($tag + '<body')
    } else {
        throw 'index.html 结构不认识，无法注入脚本。'
    }
    [System.IO.File]::WriteAllText($indexPath, $new, (New-Object System.Text.UTF8Encoding($false)))
    Write-Ok 'index.html 已注入翻译层'
}

# 2. zh-cn.js
Copy-Item $srcJs $liveJs -Force
Write-Ok ('zh-cn.js 已就位 ({0:N1} KB)' -f ((Get-Item $liveJs).Length / 1KB))

# 3. main.js —— 只有 -Debug 才加调试开关
$flag = Join-Path $appDir 'cdp.on'
if ($Debug) {
    $main = [System.IO.File]::ReadAllText($mainPath, [System.Text.Encoding]::UTF8)
    if ($main -match 'zh-patch cdp gate') {
        Write-Step 'main.js 已有调试开关，跳过'
    } else {
        if (-not (Test-Path $mainOrig)) {
            Copy-Item $mainPath $mainOrig -Force
            Write-Step '已备份 main.js → main.js.orig'
        }
        $gate = '/* zh-patch cdp gate */try{var __fs=require("fs"),__path=require("path");if(__fs.existsSync(__path.join(__dirname,"cdp.on"))){require("electron").app.commandLine.appendSwitch("remote-debugging-port","9333");}}catch(__e){}'
        [System.IO.File]::WriteAllText($mainPath, ($gate + $main), (New-Object System.Text.UTF8Encoding($false)))
        Write-Ok 'main.js 已加调试开关'
    }
    # 标记文件决定开关是否生效：只要带 -Debug 就必须在
    if (-not (Test-Path $flag)) {
        Set-Content -Path $flag -Value 'debug' -Encoding ASCII
    }
    Write-Ok '9333 调试端口已开启'
} else {
    if (Test-Path $flag) {
        Remove-Item $flag -Force
        Write-Step '已关闭调试端口'
    }
}

Write-Host ''
Write-Host '补丁完成 ✅' -ForegroundColor Green
Write-Host '升级 GitHub Desktop 后请重跑本脚本（升级会覆盖安装目录）。' -ForegroundColor DarkGray
Write-Host '还原：install.ps1 -Revert' -ForegroundColor DarkGray

if (-not $NoRestart) { Start-GitHubDesktop $appDir }
