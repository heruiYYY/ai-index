<#
  AI_Index 构建脚本
  用法：powershell -NoProfile -ExecutionPolicy Bypass -File H:\AI_Index\build.ps1 [-Push]

  - 校验 data\daily、data\weekly 下的 JSON，坏文件跳过并在结尾报出
  - 待确认收藏超过 7 天 → 移到 data\candidates\_expired\（不删除）
  - 生成 site\data.js（本机网页用）、README.md 与 reports\（GitHub 私有仓库上看）
  - -Push：已装 Git 且已初始化仓库时，提交并推送
#>
param([switch]$Push)
$ErrorActionPreference = 'Stop'
$Root = $PSScriptRoot
$Utf8 = New-Object System.Text.UTF8Encoding($false)
$Warn = New-Object System.Collections.Generic.List[string]
$StatusText = @{ ok = '✅ 可用'; wip = '🚧 进行中'; draft = '📝 草稿'; rule = '📌 约定'; arch = '🗄 归档' }

function Read-Text($Path) { [IO.File]::ReadAllText($Path, [Text.Encoding]::UTF8) }
function Write-Text($Path, $Text) {
  $dir = Split-Path $Path
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
  [IO.File]::WriteAllText($Path, $Text, $Utf8)
}
function Cell($s) { if ($null -eq $s) { return '' }; ([string]$s) -replace '\|', '\|' -replace '\r?\n', ' ' }
function To-Json($o) { ConvertTo-Json -InputObject $o -Depth 8 -Compress }

# ---- 读取 JSON（日报 / 周报） ----
function Load-Json($Dir) {
  $out = @()
  Get-ChildItem (Join-Path $Root $Dir) -Filter *.json -File -ErrorAction SilentlyContinue | Sort-Object Name | ForEach-Object {
    $f = $_
    $raw = (Read-Text $f.FullName).Trim().TrimStart([char]0xFEFF)
    try { $obj = $raw | ConvertFrom-Json; $out += [pscustomobject]@{ raw = $raw; obj = $obj; name = $f.Name } }
    catch { $Warn.Add("JSON 无效，已跳过：$Dir\$($f.Name)") }
  }
  , $out
}

# ---- 读取带头信息的 Markdown（候选 / 收藏） ----
function Load-Md($Dir) {
  $out = @()
  Get-ChildItem (Join-Path $Root $Dir) -Filter *.md -File -ErrorAction SilentlyContinue | Sort-Object Name | ForEach-Object {
    $f = $_
    $text = (Read-Text $f.FullName).TrimStart([char]0xFEFF)
    $m = [regex]::Match($text, '^---\r?\n(.*?)\r?\n---\r?\n?(.*)$', 'Singleline')
    if (-not $m.Success) { $Warn.Add("缺少 --- 头信息，已跳过：$Dir\$($f.Name)"); return }
    $meta = [ordered]@{}
    foreach ($line in ($m.Groups[1].Value -split '\r?\n')) {
      if ($line -match '^\s*([A-Za-z_]+)\s*:\s*(.*)$') { $meta[$Matches[1]] = $Matches[2].Trim() }
    }
    $meta['body'] = $m.Groups[2].Value.Trim()
    $meta['file'] = ($Dir -replace '\\', '/') + '/' + $f.Name
    $out += [pscustomobject]@{ meta = $meta; path = $f.FullName }
  }
  , $out
}

$daily = Load-Json 'data\daily'
$weekly = Load-Json 'data\weekly'
$candidates = Load-Md 'data\candidates'
$favorites = Load-Md 'data\favorites'

# ---- 过期候选：7 天未确认则移走 ----
$cutoff = (Get-Date).Date.AddDays(-7)
$expiredDir = Join-Path $Root 'data\candidates\_expired'
$keep = @()
foreach ($c in $candidates) {
  $d = [datetime]::MinValue
  $ok = [datetime]::TryParseExact([string]$c.meta.date, 'yyyy-MM-dd', $null, 'None', [ref]$d)
  if ($ok -and $d -lt $cutoff) {
    if (-not (Test-Path $expiredDir)) { New-Item -ItemType Directory -Force $expiredDir | Out-Null }
    Move-Item $c.path (Join-Path $expiredDir (Split-Path $c.path -Leaf)) -Force
    Write-Host "候选已过期并移走：$($c.meta.id)"
  } else { $keep += $c }
}
$candidates = $keep

# ---- site\data.js ----
$built = (Get-Date).ToString('yyyy-MM-dd HH:mm')
$dailyJs = '[' + (($daily | ForEach-Object { $_.raw }) -join ',') + ']'
$weeklyJs = '[' + (($weekly | ForEach-Object { $_.raw }) -join ',') + ']'
$js = "window.INDEX_DATA = {`"built`":$(To-Json $built),`"daily`":$dailyJs,`"weekly`":$weeklyJs," +
      "`"candidates`":$(To-Json @($candidates | ForEach-Object { $_.meta }))," +
      "`"favorites`":$(To-Json @($favorites | ForEach-Object { $_.meta }))," +
      "`"warnings`":$(To-Json @($Warn))};`n"
Write-Text (Join-Path $Root 'site\data.js') $js

# ---- reports\daily\<日期>.md ----
$dates = @($daily | ForEach-Object { $_.obj.date } | Sort-Object -Unique -Descending)
foreach ($date in $dates) {
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.AppendLine("# 日报 $date").AppendLine()
  foreach ($r in ($daily | Where-Object { $_.obj.date -eq $date } | Sort-Object { $_.obj.bot } -Descending)) {
    $o = $r.obj
    [void]$sb.AppendLine("## $($o.bot)").AppendLine().AppendLine("> $($o.summary)").AppendLine()
    if ($o.sessions) {
      [void]$sb.AppendLine('### 会话').AppendLine().AppendLine('| 时间 | 主题 |').AppendLine('|---|---|')
      foreach ($s in $o.sessions) { [void]$sb.AppendLine("| $(Cell $s.time) | $(Cell $s.title) |") }
      [void]$sb.AppendLine()
    }
    if ($o.outputs) {
      [void]$sb.AppendLine('### 产出').AppendLine().AppendLine('| 类别 | 成果 | 产出 | 状态 |').AppendLine('|---|---|---|---|')
      foreach ($x in $o.outputs) {
        $note = if ($x.note) { "（$($x.note)）" } else { '' }
        [void]$sb.AppendLine("| $(Cell $x.category) | $(Cell $x.name) | $(Cell ($x.output + $note)) | $($StatusText[[string]$x.status]) |")
      }
      [void]$sb.AppendLine()
    }
    if ($o.pending) {
      [void]$sb.AppendLine('### 未完成').AppendLine()
      foreach ($p in $o.pending) { [void]$sb.AppendLine("- $p") }
      [void]$sb.AppendLine()
    }
  }
  Write-Text (Join-Path $Root "reports\daily\$date.md") $sb.ToString()
}

# ---- reports\weekly\<周日日期>.md ----
function Weekly-Md($w) {
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.AppendLine("统计范围：$($w.from) ～ $($w.to)").AppendLine()
  foreach ($sec in @(@('done', '✅ 完成了什么'), @('todo', '⏳ 未完成什么'), @('keep', '⭐ 值得留存的新内容'))) {
    [void]$sb.AppendLine("### $($sec[1])").AppendLine()
    $items = $w.($sec[0])
    if (-not $items) { [void]$sb.AppendLine('- （无）') }
    foreach ($i in $items) { [void]$sb.AppendLine("- **$($i.bot)** $($i.text)") }
    [void]$sb.AppendLine()
  }
  $sb.ToString()
}
foreach ($w in $weekly) {
  Write-Text (Join-Path $Root "reports\weekly\$($w.obj.week).md") ("# 周报 $($w.obj.week)`n`n" + (Weekly-Md $w.obj))
}

# ---- README.md（GitHub 首页） ----
$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('# AI 成果索引（CC + COCO）').AppendLine()
[void]$sb.AppendLine("> 自动生成于 $built（Asia/Shanghai）· 本机完整网页：``H:\AI_Index\index.html``").AppendLine()
if ($dates.Count) {
  $latest = $dates[0]
  [void]$sb.AppendLine("## 📅 最新日报：$latest").AppendLine()
  foreach ($r in ($daily | Where-Object { $_.obj.date -eq $latest } | Sort-Object { $_.obj.bot } -Descending)) {
    [void]$sb.AppendLine("- **$($r.obj.bot)**：$($r.obj.summary)")
  }
  [void]$sb.AppendLine().AppendLine("[查看完整日报](reports/daily/$latest.md)").AppendLine()
}
[void]$sb.AppendLine('## 📊 本周周报').AppendLine()
if ($weekly.Count) {
  $lw = ($weekly | Sort-Object { $_.obj.week } -Descending)[0].obj
  [void]$sb.AppendLine("**$($lw.week)** · [单独查看](reports/weekly/$($lw.week).md)").AppendLine()
  [void]$sb.Append((Weekly-Md $lw))
} else { [void]$sb.AppendLine('本周周报将于周日 17:00 由 CC 生成。').AppendLine() }
[void]$sb.AppendLine("## ⭐ 待确认收藏（$($candidates.Count)）").AppendLine()
if ($candidates.Count) {
  [void]$sb.AppendLine('对 CC 说「收下 <ID>」即转为正式收藏；7 天未确认自动移走。').AppendLine()
  [void]$sb.AppendLine('| ID | 标题 | 来源 | 日期 |').AppendLine('|---|---|---|---|')
  foreach ($c in $candidates) { $m = $c.meta; [void]$sb.AppendLine("| ``$($m.id)`` | [$(Cell $m.title)]($($m.file)) | $($m.bot) | $($m.date) |") }
} else { [void]$sb.AppendLine('（暂无）') }
[void]$sb.AppendLine().AppendLine("## 📚 收藏库（$($favorites.Count)）").AppendLine()
if ($favorites.Count) {
  [void]$sb.AppendLine('| 标题 | 类别 | 来源 | 日期 |').AppendLine('|---|---|---|---|')
  foreach ($c in ($favorites | Sort-Object { $_.meta.date } -Descending)) { $m = $c.meta; [void]$sb.AppendLine("| [$(Cell $m.title)]($($m.file)) | $(Cell $m.category) | $($m.bot) | $($m.date) |") }
} else { [void]$sb.AppendLine('（暂无）') }
[void]$sb.AppendLine().AppendLine('## 🗂 历史日报').AppendLine()
foreach ($date in $dates) { [void]$sb.AppendLine("- [$date](reports/daily/$date.md)") }
Write-Text (Join-Path $Root 'README.md') $sb.ToString()

# ---- 推送 ----
if ($Push) {
  if (-not (Get-Command git -ErrorAction SilentlyContinue)) { $Warn.Add('未安装 Git，已跳过推送') }
  elseif (-not (Test-Path (Join-Path $Root '.git'))) { $Warn.Add('H:\AI_Index 还不是 Git 仓库，已跳过推送') }
  else {
    Push-Location $Root
    try {
      git add -A
      git diff --cached --quiet
      if ($LASTEXITCODE -ne 0) { git commit -m "update $built" -q; git push -q; if ($LASTEXITCODE -ne 0) { $Warn.Add('git push 失败') } }
      else { Write-Host '没有变化，无需推送' }
    } finally { Pop-Location }
  }
}

Write-Host "构建完成：日报 $($daily.Count) 份 · 周报 $($weekly.Count) 份 · 待确认 $($candidates.Count) · 收藏 $($favorites.Count)"
foreach ($w in $Warn) { Write-Warning $w }
if ($Warn.Count) { exit 1 }
