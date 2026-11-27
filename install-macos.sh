#!/usr/bin/env bash
# github-desktop-zh —— GitHub Desktop 界面汉化补丁（macOS）
# 非官方项目，与 GitHub, Inc. 无关联。
#
# 用法：
#   bash install-macos.sh             安装
#   bash install-macos.sh --revert    还原
#   bash install-macos.sh --debug     同时开启调试端口 9333（改翻译用）
#   bash install-macos.sh --no-restart
set -euo pipefail

APP_DIR="/Applications/GitHub Desktop.app"
RES_APP="$APP_DIR/Contents/Resources/app"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC_JS="$HERE/src/zh-cn.js"

REVERT=0
DEBUG=0
NO_RESTART=0
for arg in "$@"; do
  case "$arg" in
    --revert) REVERT=1 ;;
    --debug) DEBUG=1 ;;
    --no-restart) NO_RESTART=1 ;;
    -h|--help) sed -n '2,10p' "$0"; exit 0 ;;
    *) echo "未知参数: $arg"; exit 1 ;;
  esac
done

say()  { printf '  %s\n' "$*"; }
ok()   { printf '\033[32m  %s\033[0m\n' "$*"; }
warn() { printf '\033[33m  %s\033[0m\n' "$*"; }

echo
echo "GitHub Desktop 中文补丁 (github-desktop-zh)"
echo "非官方项目，与 GitHub, Inc. 无关联"
echo

if [ ! -d "$RES_APP" ]; then
  echo "没找到 $RES_APP" >&2
  echo "确认 GitHub Desktop 装在 /Applications 下。" >&2
  exit 1
fi

SUDO=""
if [ ! -w "$RES_APP" ]; then
  warn "需要管理员权限写入 $RES_APP"
  SUDO="sudo"
fi

INDEX="$RES_APP/index.html"
MAIN="$RES_APP/main.js"

stop_app() {
  if pgrep -x "GitHub Desktop" >/dev/null 2>&1; then
    say "关闭正在运行的 GitHub Desktop…"
    osascript -e 'quit app "GitHub Desktop"' >/dev/null 2>&1 || true
    sleep 1
    pkill -x "GitHub Desktop" >/dev/null 2>&1 || true
  fi
}

start_app() {
  [ "$NO_RESTART" -eq 1 ] && return 0
  open -a "$APP_DIR" >/dev/null 2>&1 && ok "已启动 GitHub Desktop"
}

resign() {
  say "重新签名（修改 .app 内部会破坏原签名）…"
  if codesign --force --deep --sign - "$APP_DIR" >/dev/null 2>&1; then
    ok "ad-hoc 签名完成"
  else
    warn "签名失败，若启动提示「已损坏」，执行："
    warn "  sudo codesign --force --deep --sign - \"$APP_DIR\""
    warn "  xattr -dr com.apple.quarantine \"$APP_DIR\""
  fi
}

stop_app

if [ "$REVERT" -eq 1 ]; then
  if [ -f "$INDEX.orig" ]; then
    $SUDO cp "$INDEX.orig" "$INDEX";  ok "index.html 已还原"
  else
    warn "没有 index.html.orig，跳过"
  fi
  if [ -f "$MAIN.orig" ]; then
    $SUDO cp "$MAIN.orig" "$MAIN";    ok "main.js 已还原"
  fi
  $SUDO rm -f "$RES_APP/zh-cn.js" "$RES_APP/cdp.on"
  resign
  echo; ok "还原完成 ✅（界面已回到英文原版）"
  start_app
  exit 0
fi

[ -f "$SRC_JS" ] || { echo "缺少源文件：$SRC_JS" >&2; exit 1; }

# 1. index.html
if grep -q 'zh-cn\.js' "$INDEX"; then
  say "index.html 已包含 zh-cn.js，跳过"
else
  [ -f "$INDEX.orig" ] || { $SUDO cp "$INDEX" "$INDEX.orig"; say "已备份 index.html → index.html.orig"; }
  TAG='<script defer src=zh-cn.js></script>'
  if grep -q '</head>' "$INDEX"; then
    $SUDO perl -0pi -e "s{</head>}{$TAG</head>}" "$INDEX"
  else
    $SUDO perl -0pi -e "s{<body}{$TAG<body}" "$INDEX"
  fi
  ok "index.html 已注入翻译层"
fi

# 2. zh-cn.js
$SUDO cp "$SRC_JS" "$RES_APP/zh-cn.js"
ok "zh-cn.js 已就位"

# 3. main.js —— 只有 --debug 才加调试开关
if [ "$DEBUG" -eq 1 ]; then
  if grep -q 'zh-patch cdp gate' "$MAIN"; then
    say "main.js 已有调试开关，跳过"
  else
    [ -f "$MAIN.orig" ] || { $SUDO cp "$MAIN" "$MAIN.orig"; say "已备份 main.js → main.js.orig"; }
    GATE='/* zh-patch cdp gate */try{var __fs=require("fs"),__path=require("path");if(__fs.existsSync(__path.join(__dirname,"cdp.on"))){require("electron").app.commandLine.appendSwitch("remote-debugging-port","9333");}}catch(__e){}'
    $SUDO bash -c "printf '%s' '$GATE' | cat - '$MAIN' > /tmp/gdzh_main && mv /tmp/gdzh_main '$MAIN'"
    $SUDO sh -c "echo debug > '$RES_APP/cdp.on'"
    ok "main.js 已加调试开关（9333 端口）"
  fi
else
  if [ -f "$RES_APP/cdp.on" ]; then
    $SUDO rm -f "$RES_APP/cdp.on"
    say "已关闭调试端口"
  fi
fi

resign

echo
echo "补丁完成 ✅"
echo "升级 GitHub Desktop 后请重跑本脚本（升级会覆盖安装目录）。"
echo "还原：bash install-macos.sh --revert"
start_app
