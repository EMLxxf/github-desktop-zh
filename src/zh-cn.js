/* GitHub Desktop 中文补丁 · zh-cn.js
 * 运行时 DOM 翻译层：不修改 renderer.js，升级后重新注入即可。
 * 由 index.html 在 renderer.js 之后以 defer 方式加载。
 */
(function () {
  'use strict'

  var T = {
    /* ---- 应用菜单 ---- */
    'File': '文件',
    'Edit': '编辑',
    'View': '视图',
    'Repository': '仓库',
    'Branch': '分支',
    'Help': '帮助',
    'New repository…': '新建仓库…',
    'Add local repository…': '添加本地仓库…',
    'Clone repository…': '克隆仓库…',
    'Options…': '选项…',
    'Options': '选项',
    'Exit': '退出',
    'Undo': '撤销',
    'Redo': '重做',
    'Cut': '剪切',
    'Copy': '复制',
    'Paste': '粘贴',
    'Select all': '全选',
    'Find': '查找',
    'Changes': '更改',
    'History': '历史',
    'Repository list': '仓库列表',
    'Branches list': '分支列表',
    'Worktrees list': '工作树列表',
    'Go to Summary': '跳到摘要',
    'Show stashed changes': '显示已贮藏的更改',
    'Hide Toggle Changes Filter': '隐藏/显示更改筛选器',
    'Toggle full screen': '切换全屏',
    'Reset zoom': '重置缩放',
    'Zoom in': '放大',
    'Zoom out': '缩小',
    'Expand active resizable': '展开当前面板',
    'Contract active resizable': '收起当前面板',
    'Toggle developer tools': '开发者工具',
    'Push': '推送',
    'Pull': '拉取',
    'Fetch': '获取',
    'Remove…': '移除…',
    'View on GitHub': '在 GitHub 上查看',
    'Open in Command Prompt': '在命令提示符中打开',
    'Show in Explorer': '在资源管理器中显示',
    'Open in external editor': '在外部编辑器中打开',
    'Open with…': '打开方式…',
    'Create issue on GitHub': '在 GitHub 上创建议题',
    'New worktree…': '新建工作树…',
    'Repository settings…': '仓库设置…',
    'New branch…': '新建分支…',
    'Rename…': '重命名…',
    'Delete…': '删除…',
    'Discard all changes…': '丢弃所有更改…',
    'Stash all changes': '贮藏所有更改',
    'Compare to branch': '与分支比较',
    'Merge into current branch…': '合并到当前分支…',
    'Squash and merge into current branch…': '压缩合并到当前分支…',
    'Rebase current branch…': '变基当前分支…',
    'Compare on GitHub': '在 GitHub 上比较',
    'View branch on GitHub': '在 GitHub 上查看分支',
    'Preview pull request': '预览拉取请求',
    'Create pull request': '创建拉取请求',
    'Report issue…': '报告问题…',
    'Contact GitHub support…': '联系 GitHub 支持…',
    'Show User Guides': '查看用户指南',
    'Show keyboard shortcuts': '显示键盘快捷键',
    'Show logs in Explorer': '在资源管理器中显示日志',
    'About GitHub Desktop': '关于 GitHub Desktop',

    /* ---- 关于 / 更新 ---- */
    'Version': '版本',
    'release notes': '发行说明',
    'Downloading updates...': '正在下载更新…',
    'Downloading updates…': '正在下载更新…',
    'Downloading update…': '正在下载更新…',
    'Downloading update': '正在下载更新',
    'Restart to update': '重启以更新',
    'Install update': '安装更新',
    'Update available': '有可用更新',
    'A new version is available': '有新版本可用',
    'Later': '稍后',
    'Check for Updates': '检查更新',
    'Checking for Updates…': '正在检查更新…',
    'Checking for updates…': '正在检查更新…',
    'You have the latest version': '已是最新版本',
    'Looking for the latest features?': '想体验最新功能？',
    'Check out the': '去看看',
    'Beta Channel': 'Beta 频道',
    'Terms and Conditions': '条款与条件',
    'License and Open Source Notices': '许可证与开源声明',
    'Responsible use of Copilot in GitHub Desktop': '在 GitHub Desktop 中负责任地使用 Copilot',
    'Close': '关闭',
    'OK': '确定',

    /* ---- 仓库 / 分支工具条 ---- */
    'Current repository': '当前仓库',
    'Current branch': '当前分支',
    'Current worktree': '当前工作树',
    'Never fetched': '从未获取',
    'Publish branch': '发布分支',
    'Publish repository': '发布仓库',
    'Push origin': '推送 origin',
    'Pull origin': '拉取 origin',

    /* ---- 更改列表 ---- */
    'No local changes': '没有本地更改',
    'There are no uncommitted changes in this repository. Here are some friendly suggestions for what to do next.':
      '这个仓库里没有未提交的更改。以下是接下来可以做的一些事情。',
    'Commit summary': '提交摘要',
    'Commit description': '提交描述',
    'Summary (required)': '摘要（必填）',
    'Description (optional)': '描述（可选）',
    'Commit to': '提交到',
    'Commit': '提交',
    'Commit changes': '提交更改',
    'Committing': '正在提交',
    'Commit message': '提交信息',
    'Amend last commit': '修补上一次提交',
    'Discard changes': '丢弃更改',
    'Discard Changes': '丢弃更改',
    'Discard all changes': '丢弃所有更改',
    'Discard': '丢弃',
    'Undo last change': '撤销上一次更改',
    'Add co-authors': '添加共同作者',
    'Add co-author': '添加共同作者',
    'Create commit': '创建提交',
    'Configure commit options': '配置提交选项',
    'View commit author information': '查看提交作者信息',
    'Filter': '筛选',
    'Filter Options': '筛选选项',
    'Clear filters': '清除筛选',
    'Search': '搜索',
    'Add': '添加',
    'Remove': '移除',
    'Delete': '删除',
    'Rename': '重命名',
    'Close': '关闭',
    'Save': '保存',
    'Cancel': '取消',
    'OK': '确定',
    'Yes': '是',
    'No': '否',
    'Continue': '继续',
    'Back': '返回',
    'Next': '下一步',
    'Done': '完成',
    'Skip': '跳过',
    'Update': '更新',
    'Retry': '重试',
    'Refresh': '刷新',
    'Learn more': '了解更多',
    'Open': '打开',
    'View changes': '查看更改',
    'Show': '显示',
    'Hide': '隐藏',
    'Apply': '应用',
    'Reset': '重置',

    /* ---- 侧栏面板 ---- */
    'Pull Requests': '拉取请求',
    'Pull Request': '拉取请求',
    'Issues': '议题',
    'Issue': '议题',
    'Branches': '分支',
    'Stashes': '贮藏',
    'Stash': '贮藏',
    'Worktrees': '工作树',
    'Worktree': '工作树',
    'Repository': '仓库',
    'Repositories': '仓库',
    'Settings': '设置',
    'Preferences': '偏好设置',
    'Account': '账户',
    'Appearance': '外观',
    'Notifications': '通知',
    'Promotions': '推广',
    'Advanced': '高级',
    'Integrations': '集成',
    'Git': 'Git',
    'Language': '语言',
    'Theme': '主题',
    'Light': '浅色',
    'Dark': '深色',
    'System': '跟随系统',
    'Name': '名称',
    'Email': '邮箱',
    'Username': '用户名',
    'Password': '密码',
    'Token': '令牌',
    'Title': '标题',
    'Description': '描述',
    'Summary': '摘要',
    'Author': '作者',
    'Date': '日期',
    'Message': '消息',
    'Loading…': '加载中…',
    'No commits': '没有提交',
    'No branches': '没有分支',
    'No history': '没有历史',

    /* ---- 常用对话框 ---- */
    'Add local repository': '添加本地仓库',
    'Clone a repository': '克隆仓库',
    'Create a new repository': '创建新仓库',
    'Local path': '本地路径',
    'Repository name': '仓库名称',
    'Sign in': '登录',
    'Sign out': '退出登录',
    'Sign in to GitHub.com': '登录 GitHub.com',
    'Authentication failed': '身份验证失败',
    'Commit failed': '提交失败',
    'Discard changes?': '丢弃更改？',
    'Force push': '强制推送',
    'Pushing': '正在推送',
    'Fetching': '正在获取',
    'Pulling': '正在拉取',
    'New branch': '新建分支',
    'Create branch': '创建分支',
    'Switch branch': '切换分支',
    'Create Pull Request': '创建拉取请求',
    'Minimize': '最小化',
    'Maximize': '最大化',
    'Restore': '还原',
    'Resize handle': '调整大小手柄',
    'Application menu': '应用程序菜单',
    'Copy SHA': '复制 SHA',
    'Copy the full SHA': '复制完整 SHA',
    'Copy branch name': '复制分支名',
    'Copy file path': '复制文件路径',
    'Copy relative file path': '复制相对文件路径',
    'Copy repo name': '复制仓库名',
    'Copy repo path': '复制仓库路径',
    'Open the repository page on GitHub in your browser': '在浏览器中打开该仓库的 GitHub 页面',
    'View the files of your repository in Explorer': '在资源管理器中查看仓库文件',
    'Generate commit message with Copilot. Files must be selected to generate a commit message.':
      '用 Copilot 生成提交信息。生成前需要先选中文件。',

    /* ---- 发布 / 拉取请求提示 ---- */
    'Publish': '发布',
    'Publish this repository to GitHub': '将此仓库发布到 GitHub',
    'Publish your repository to GitHub': '将你的仓库发布到 GitHub',
    'This repository is currently only available on your local machine. By publishing it on GitHub you can share it, and collaborate with others.':
      '这个仓库目前只存在于你的本地。把它发布到 GitHub 之后，你就可以分享它并与他人协作。',
    'Preview the Pull Request from your current branch': '预览当前分支的拉取请求',
    'Preview Pull Request': '预览拉取请求',
    'The current branch (': '当前分支（',
    ') is already published to GitHub. Create a pull request to propose and collaborate on your changes.':
      '）已经发布到 GitHub。创建一个拉取请求，用于提出你的更改并与他人协作。',
    ') is already published to GitHub. Preview the changes this pull request will have before proposing your changes.':
      '）已经发布到 GitHub。先预览这个拉取请求会包含哪些更改，再决定是否提出。',
    'Always available in the toolbar for local repositories or': '在本地仓库中始终显示在工具栏上，或',
    'Always available in the toolbar or': '始终显示在工具栏上，或',
    'Always available in the toolbar when there are remote changes or':
      '当有远程更改时始终显示在工具栏上，或',
    'Hang on…': '稍等…',
    'Hang on': '稍等',
    'Clone': '克隆',
    'Create': '创建',
    'Your repositories': '你的仓库',
    'Other': '其他',
    'Filter repositories': '筛选仓库',
    'No repositories': '没有仓库',
    'Show all repositories': '显示所有仓库',
    'New': '新建',
    'Scanning for repositories…': '正在扫描仓库…',
    'No local repositories found': '没有找到本地仓库',
    'Create repository': '创建仓库',
    'Clone repository': '克隆仓库',
    'Add repository': '添加仓库',
    'Open repository': '打开仓库',
    'Switch branch': '切换分支',
    'Publish to GitHub': '发布到 GitHub',
    'Recent branches': '最近的分支',
    'All branches': '所有分支',
    'Filter branches': '筛选分支',
    'Show more branches': '显示更多分支',

    /* ---- 设置：账户 ---- */
    'Accounts': '账户',
    'Integrations': '集成',
    'Appearance': '外观',
    'Notifications': '通知',
    'Prompts': '提示',
    'Advanced': '高级',
    'Accessibility': '辅助功能',
    'GitHub Enterprise': 'GitHub Enterprise',
    'If you are using GitHub Enterprise at work, sign in to it to get access to your repositories.':
      '如果你在工作中使用 GitHub Enterprise，登录后即可访问你的仓库。',
    'Sign into GitHub Enterprise': '登录 GitHub Enterprise',
    'Sign in': '登录',
    'Sign out': '退出登录',

    /* ---- 设置：集成 ---- */
    'External editor': '外部编辑器',
    'Configure custom editor…': '配置自定义编辑器…',
    'Path': '路径',
    'Choose…': '选择…',
    'Arguments': '参数',
    'No other editors found.': '没有找到其他编辑器。',
    'Install': '安装',
    'Shell': '命令行',
    'Command Prompt': '命令提示符',
    'Windows Terminal': 'Windows 终端',
    'Configure custom shell…': '配置自定义命令行…',
    'Path to executable': '可执行文件路径',
    'Command line arguments': '命令行参数',

    /* ---- 克隆 / 新建仓库 ---- */
    'Loading repositories from GitHub.com…': '正在从 GitHub.com 加载仓库…',
    'Filter your repositories': '筛选你的仓库',
    'Refresh the list of repositories': '刷新仓库列表',
    'repository path': '仓库路径',
    'Repository URL': '仓库地址',
    'Repository path': '仓库路径',
    'Local path': '本地路径',
    'Not a valid Git repository': '不是有效的 Git 仓库',
    'The repository already exists': '该仓库已存在',
    'Name': '名称',
    'Description': '描述',
    'Initialize with a README': '使用 README 初始化',
    'Git ignore': 'Git 忽略规则',
    'License': '许可证',
    'Create repository': '创建仓库',
    'Clone a repository': '克隆仓库',
    'Create a new repository': '新建仓库',

    /* ---- 设置：Copilot ---- */
    'Chat messages': '聊天消息',
    'Code completions': '代码补全',
    'No Copilot models available.': '没有可用的 Copilot 模型。',

    /* ---- 设置：Git ---- */
    'Default branch': '默认分支',
    'Hooks': '钩子',
    'These preferences will': '这些偏好设置会',
    'edit your global Git config file': '修改你的全局 Git 配置文件',

    /* ---- 设置：外观 ---- */
    'Formatting': '格式',
    'Date format': '日期格式',
    'Time format': '时间格式',
    'Number format': '数字格式',
    'Prefer absolute dates over relative': '优先显示绝对日期而非相对日期',
    'Miscellaneous': '其他',
    'Diff tab size': '差异视图制表符宽度',
    '4 (default)': '4（默认）',
    'Always show worktree list': '始终显示工作树列表',

    /* ---- 设置：通知 ---- */
    'Enable notifications': '启用通知',
    'Allows the display of notifications when high-signal events take place in the current repository.':
      '允许在当前仓库发生重要事件时弹出通知。',
    'Make sure notifications are': '请确认已为 GitHub Desktop',
    'enabled': '启用通知',
    'for GitHub Desktop in the': '，详见系统',
    'Notifications Settings': '通知设置',

    /* ---- 设置：提示 ---- */
    'Show a confirmation dialog before...': '在以下操作前显示确认对话框…',
    'Removing repositories': '移除仓库',
    'Discarding changes': '丢弃更改',
    'Discarding changes permanently': '永久丢弃更改',
    'Discarding stash': '丢弃贮藏',
    'Checking out a commit': '检出提交',
    'Force pushing': '强制推送',
    'Undo commit': '撤销提交',
    'Overriding commit message with generated message': '用生成的信息覆盖提交信息',
    'Removing worktrees': '移除工作树',
    'Committing changes hidden by filter': '提交被筛选器隐藏的更改',
    'If I have changes and I switch branches...': '如果我有未提交的更改并切换分支…',
    'Ask me where I want the changes to go': '先问我要把更改带到哪里',
    'Always bring my changes to my new branch': '始终把更改带到新分支',
    'Always stash and leave my changes on the current branch': '始终贮藏并把更改留在当前分支',
    'Commit Length': '提交信息长度',
    'Show commit length warning': '显示提交信息过长警告',

    /* ---- 设置：高级 ---- */
    'Background updates': '后台更新',
    'Show status icons in the repository list': '在仓库列表中显示状态图标',
    'These icons indicate which repositories have local or remote changes, and require the periodic fetching of repositories that are not currently selected.':
      '这些图标表示哪些仓库有本地或远程更改，为此会定期获取未选中的仓库。',
    'Turning this off will not stop the periodic fetching of your currently selected repository, but may improve overall app performance for users with many repositories.':
      '关闭后不会停止对当前选中仓库的定期获取，但能提升仓库很多时的整体性能。',
    'Usage': '使用情况',
    'Help GitHub Desktop improve by submitting': '通过提交',
    'usage stats': '使用统计',
    'Network and credentials': '网络与凭据',
    'Use system OpenSSH (recommended)': '使用系统 OpenSSH（推荐）',
    'Use Git Credential Manager': '使用 Git 凭据管理器',
    'Use': '使用',
    'for private repositories outside of GitHub.com. This feature is experimental and subject to change.':
      '用于 GitHub.com 之外的私有仓库。此功能为实验性，可能随时变化。',
    'Git Credential Manager': 'Git 凭据管理器',

    /* ---- 设置：辅助功能 ---- */
    'Underline links': '给链接加下划线',
    'When enabled, GitHub Desktop will underline links in commit messages, comments, and other text fields. This can help make links easier to distinguish.':
      '启用后，GitHub Desktop 会给提交信息、评论及其他文本字段中的链接加下划线，便于区分。',
    'This is an example link': '这是一个示例链接',
    'Show check marks in the diff': '在差异中显示勾选标记',
    'When enabled, check marks will be displayed along side the line numbers and groups of line numbers in the diff when committing. When disabled, the line number controls will be less prominent.':
      '启用后，提交时差异中的行号旁会显示勾选标记；关闭后行号控件会更不显眼。'
  }

  var RULES = [
    [/^(\d+) changed files?$/, '$1 个已更改文件'],
    [/^(\d+) commits?$/, '$1 个提交'],
    [/^Commit to (.+)$/, '提交到 $1'],
    [/^Committing to (.+)$/, '正在提交到 $1'],
    [/^Fetch (.+)$/, '获取 $1'],
    [/^Push (.+)$/, '推送 $1'],
    [/^Pull (.+)$/, '拉取 $1'],
    [/^Fetching (.+)$/, '正在获取 $1'],
    [/^Pushing (.+)$/, '正在推送 $1'],
    [/^Pulling (.+)$/, '正在拉取 $1'],
    [/^Remote: (.+)$/, '远程：$1'],
    [/^remote: (.+)$/i, '远程：$1'],
    [/^Counting objects: (.+)$/i, '统计对象：$1'],
    [/^Receiving objects: (.+)$/i, '接收对象：$1'],
    [/^Resolving deltas: (.+)$/i, '解析差异：$1'],
    [/^Compressing objects: (.+)$/i, '压缩对象：$1'],
    [/^Writing objects: (.+)$/i, '写入对象：$1'],
    [/^Already up to date\.?$/, '已是最新'],
    [/^Up to date\.?$/, '已是最新'],
    [/^Update from (.+)$/, '从 $1 更新'],
    [/^Show (\d+) more$/, '显示另外 $1 个'],
    [/^Avatar for (.+)$/, '$1 的头像'],
    [/^Sign in to (.+)$/, '登录到 $1'],
    [/^Open in (.+)$/, '在 $1 中打开'],
    [/^(\d+) file changed$/, '$1 个文件已更改'],
    [/^(\d+) files changed$/, '$1 个文件已更改'],
    [/^Version (.+)$/, '版本 $1'],

    /* ---- 相对时间 ---- */
    [/^A few seconds ago$/i, '几秒前'],
    [/^(\d+) seconds? ago$/, '$1 秒前'],
    [/^A minute ago$/i, '1 分钟前'],
    [/^(\d+) minutes? ago$/, '$1 分钟前'],
    [/^An hour ago$/i, '1 小时前'],
    [/^(\d+) hours? ago$/, '$1 小时前'],
    [/^Yesterday$/, '昨天'],
    [/^(\d+) days? ago$/, '$1 天前'],
    [/^last week$/, '上周'],
    [/^A week ago$/i, '1 周前'],
    [/^(\d+) weeks? ago$/, '$1 周前'],
    [/^last month$/, '上个月'],
    [/^A month ago$/i, '1 个月前'],
    [/^(\d+) months? ago$/, '$1 个月前'],
    [/^last year$/, '去年'],
    [/^A year ago$/i, '1 年前'],
    [/^(.+?)\s*Hang on…$/, '$1 稍等…'],
    [/^(.+?)\s*Hang on\.\.\.$/, '$1 稍等…'],
    [/^(\d+) years? ago$/, '$1 年前'],
    [/^today$/, '今天'],
  ]

  var ATTRS = T
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CODE: 1, PRE: 1, NOSCRIPT: 1 }
  var missing = new Set()

  function tr1(s) {
    if (Object.prototype.hasOwnProperty.call(T, s)) return T[s]
    // 多轮套用规则，处理 "remote: Counting objects: 3% (1/2)" 这种套娃
    var cur = s
    for (var pass = 0; pass < 3; pass++) {
      var hit = false
      for (var i = 0; i < RULES.length; i++) {
        if (RULES[i][0].test(cur)) {
          var next = cur.replace(RULES[i][0], RULES[i][1])
          if (next !== cur) { cur = next; hit = true }
          break
        }
      }
      if (!hit) break
    }
    return cur === s ? null : cur
  }

  function inSkippedZone(el) {
    if (!el || !el.closest) return false
    return !!el.closest('.menu-item, .monaco-editor, .terminal, textarea, [contenteditable="true"], .zh-skip')
  }

  function translateTextNode(n) {
    var raw = n.nodeValue
    if (!raw) return
    var t = raw.trim()
    if (!t || !/[A-Za-z]/.test(t)) return
    var p = n.parentElement
    if (!p || SKIP_TAGS[p.tagName]) return
    if (inSkippedZone(p)) return
    var out = tr1(t)
    if (out === null) {
      // 已含中文的串（只夹着 GitHub/Ctrl 之类英文）不算漏翻
      if (!/[\u4e00-\u9fff]/.test(t) && missing.size < 400) {
        missing.add(t.length > 80 ? t.slice(0, 80) + '…' : t)
      }
      return
    }
    var lead = raw.match(/^\s*/)[0]
    var trail = raw.match(/\s*$/)[0]
    var next = lead + out + trail
    if (raw !== next) n.nodeValue = next
  }

  function translateMenuItems(root) {
    var items = root.querySelectorAll ? root.querySelectorAll('.menu-item') : []
    for (var i = 0; i < items.length; i++) {
      var item = items[i]
      if (item.getAttribute('data-zh') === '1') continue
      var label = item.querySelector('.label')
      if (!label) continue
      var sr = label.querySelector('.sr-only')
      var key = sr ? sr.textContent.trim() : label.textContent.replace(/\s+/g, ' ').trim()
      var out = tr1(key)
      if (out !== null) {
        // 去掉 sr-only 重复文本与 access-key 分段，整体换成中文
        label.textContent = out
        item.setAttribute('data-zh', '1')
      }
    }
  }

  function translateAttrs(root) {
    var els = []
    if (root.nodeType === 1) els.push(root)
    if (root.querySelectorAll) {
      var found = root.querySelectorAll('[placeholder],[title],[aria-label],[alt]')
      for (var i = 0; i < found.length; i++) els.push(found[i])
    }
    for (var j = 0; j < els.length; j++) {
      var el = els[j]
      if (el.closest && el.closest('.monaco-editor, .zh-skip')) continue
      for (var k = 0; k < 4; k++) {
        var attr = ['placeholder', 'title', 'aria-label', 'alt'][k]
        var v = el.getAttribute(attr)
        if (!v) continue
        var t = v.trim()
        if (!t || !/[A-Za-z]/.test(t)) continue
        var out = tr1(t)
        if (out !== null && out !== v) el.setAttribute(attr, out)
      }
    }
  }

  // 「仓库 menu or Ctrl+Shift+F」这类可发现性提示：菜单名 + 或 + 快捷键
  function translateDiscoverability(root) {
    var els = []
    if (root.classList && root.classList.contains('discoverability')) els.push(root)
    if (root.querySelectorAll) {
      var found = root.querySelectorAll('.discoverability')
      for (var i = 0; i < found.length; i++) els.push(found[i])
    }
    for (var j = 0; j < els.length; j++) {
      var el = els[j]
      if (el.getAttribute('data-zh') === '1') continue
      var text = el.textContent.replace(/\s+/g, ' ').trim()
      var m = text.match(/^(.+?)\s*menu\s+or\s+(.+)$/i)
      if (!m) continue
      var menu = m[1].trim()
      var keys = m[2].trim()
      el.textContent = (T[menu] || menu) + '菜单 或 ' + keys
      el.setAttribute('data-zh', '1')
    }
  }

  // React 常把一句话拆成多个文本节点（如 h1 里 "About " + "GitHub Desktop"），
  // 对「只含文本子节点」的元素整块翻译
  function translateSimpleBlocks(root) {
    var els = []
    if (root.nodeType === 1) els.push(root)
    if (root.querySelectorAll) {
      var f = root.querySelectorAll('h1,h2,h3,h4,h5,p,span,div,dt,dd,li,label,strong,b,em,figcaption,legend,small')
      for (var i = 0; i < f.length; i++) els.push(f[i])
    }
    for (var j = 0; j < els.length; j++) {
      var el = els[j]
      if (el.getAttribute('data-zh') === '1') continue
      if (inSkippedZone(el)) continue
      if (el.querySelector('*')) continue
      var kids = el.childNodes
      if (kids.length < 2) continue
      var raw = ''
      var ok = true
      for (var k = 0; k < kids.length; k++) {
        if (kids[k].nodeType === 3) raw += kids[k].nodeValue
        else if (kids[k].nodeType === 1) ok = false
      }
      if (!ok) continue
      var t = raw.replace(/\s+/g, ' ').trim()
      if (!t || !/[A-Za-z]/.test(t)) continue
      var out = tr1(t)
      if (out !== null && out !== t) {
        el.textContent = out
        el.setAttribute('data-zh', '1')
      }
    }
  }

  function translateTree(root) {
    if (!root) return
    if (root.nodeType === 3) { translateTextNode(root); return }
    if (root.nodeType !== 1) return
    translateDiscoverability(root)
    translateMenuItems(root)
    translateSimpleBlocks(root)
    translateAttrs(root)
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null)
    var n
    while ((n = walker.nextNode())) translateTextNode(n)
  }

  var pending = []
  var scheduled = false
  function flush() {
    scheduled = false
    var batch = pending
    pending = []
    for (var i = 0; i < batch.length; i++) {
      try { translateTree(batch[i]) } catch (e) {}
    }
  }
  function schedule(node) {
    pending.push(node)
    if (scheduled) return
    scheduled = true
    if (window.requestAnimationFrame) requestAnimationFrame(flush)
    else setTimeout(flush, 16)
  }

  function start() {
    translateTree(document.body)
    var obs = new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i]
        if (m.type === 'childList') {
          for (var j = 0; j < m.addedNodes.length; j++) schedule(m.addedNodes[j])
        } else if (m.type === 'characterData') {
          schedule(m.target)
        } else if (m.type === 'attributes') {
          schedule(m.target)
        }
      }
    })
    obs.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['placeholder', 'title', 'aria-label', 'alt']
    })
    // 补齐首屏与异步渲染
    ;[120, 400, 1200, 2500].forEach(function (ms) {
      setTimeout(function () { try { translateTree(document.body) } catch (e) {} }, ms)
    })
    window.__zhMissing = function () { return Array.from(missing) }
    window.__zhSweep = function (root) { try { translateTree(root || document.body) } catch (e) {} }
  }

  document.documentElement.setAttribute('lang', 'zh-CN')
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { start() })
  } else {
    start()
  }
})()
