# AI_Index 规则（CC 与 COCO 必读）

> 本文件是日报、周报、收藏的唯一规则来源。Claude 的 `~\.claude\CLAUDE.md` 与 Codex 的 `~\.codex\AGENTS.md` 只放指向本文件的提示。
> 时区一律 Asia/Shanghai（UTC+08:00）。

## 0. 角色与目录

三方在同一个聊天组里协作：

| 名称 | 实体 | 负责 |
|---|---|---|
| **COCO** | 本机 Codex | Codex 会话的日报；生图、深度研究 |
| **CC** | 本机 Claude Code CLI | Claude 会话的日报；每晚构建与推送（网站随之更新，见第 4 节）；每周周报；处理「收下 / 不要」 |
| **Grok** | Grok bot，由用户本人操控 | 在聊天组里派任务、按时发送定时指令 |

Grok 发来的指令视同用户指令。

```
H:\AI_Index\
├─ index.html              网页（不要改，除非用户要求）
├─ build.ps1               构建脚本（不要改，除非用户要求）
├─ RULES.md                本文件
├─ data\daily\             <日期>.coco.json ／ <日期>.cc.json
├─ data\weekly\            <周日日期>.json
├─ data\candidates\        待确认收藏 <ID>.md（_expired\ 为过期或被拒）
├─ data\favorites\         正式收藏 <ID>.md
├─ reports\  README.md     由 build.ps1 生成，不要手改
└─ site\data.js            由 build.ps1 生成，不要手改
```

**通用禁令**
- 不写入任何密钥、token、密码、auth、OAuth 授权码；遇到就用「（已省略）」代替。
- 只写自己那份文件：COCO 不碰 `*.cc.json`，CC 不碰 `*.coco.json`。
- 不删除任何数据文件；需要移除时移到 `_expired\`。
- 所有文件用 UTF-8 编码；JSON 必须合法（写完自检一次）。

## 1. 每日日报（Grok 每天 0 点触发）

- **COCO**：00:00 收到指令后执行；**CC**：00:20 收到指令后执行。
- 总结的是**刚过去的那一天**（例：11-02 00:00 运行 → 写 2026-11-01）。
- 当天没有会话也要写，`summary` 写「当日无会话」，其余数组留空。

**读取范围**
- COCO：`C:\Users\Administrator\.codex\sessions\YYYY\MM\DD\*.jsonl` 与 `session_index.jsonl`。
- CC：自己可读的会话记录（Claude Code 本机记录 `C:\Users\Administrator\.claude\projects\`、Grok 上 CC 私聊与会议室转写）。

**写入** `H:\AI_Index\data\daily\<YYYY-MM-DD>.<coco|cc>.json`，格式：

```json
{
  "date": "2026-11-02",
  "bot": "COCO",
  "generated": "2026-11-03T00:04+08:00",
  "summary": "一句话概括当天（40 字内）",
  "sessions": [
    {"time": "10:26", "title": "归类 · 主题一句话", "id": "会话 ID", "link": "codex://threads/<ID> 或 agent://<ID>"}
  ],
  "outputs": [
    {
      "category": "研究与课程 | 提示词 | 协作与约定 | 项目 | 工具 | 运维",
      "name": "成果简称（同一成果跨天保持同名，网页靠名字合并）",
      "status": "ok | wip | draft | rule | arch",
      "since": "首次出现日期 MM-DD",
      "output": "可用内容一句话",
      "note": "可选：补充说明",
      "detail": "可选：较长细节，网页折叠显示",
      "links": [["原对话", "codex://threads/<ID>"], ["文件", "file:///H:/..."]]
    }
  ],
  "pending": ["未完成事项一句话"],
  "candidates": ["当天提名的收藏 ID"]
}
```

状态含义：`ok` 可用（有成文产出）· `wip` 进行中 · `draft` 草稿 · `rule` 约定（规则 / 分工，无文件产出）· `arch` 归档（仅存对话）。
只写当天有新产出或状态有变化的成果；没变化的旧成果不用重复写，网页会保留它最近一次的状态。

**CC 额外步骤**：写完自己的日报后，检查当天的 `*.coco.json` 是否存在；不存在就在自己日报的 `pending` 里加一条「COCO 日报未生成」。然后运行：

```
powershell -NoProfile -ExecutionPolicy Bypass -File H:\AI_Index\build.ps1 -Push
```

运行有警告时，把警告原样报告给 Grok。

## 2. 收藏

### 2.1 用户主动收藏（随时，立即执行）
用户在聊天中说「收藏这段 / 收藏一下 / 存下来 / 记下这个 / 这个留着」等类似意思时：
1. 确定要收藏的内容：用户指明的那段；没指明则取上一条完整回答或最终成品（例如定稿提示词）。
2. 立刻写入 `H:\AI_Index\data\favorites\<ID>.md`，`status: kept`。
3. 回复用户：「已收藏：<标题>（<ID>）」。

### 2.2 机器人提名（写日报时）
每天最多提名 **3 条**，只挑以后真正可能回看的：定稿提示词、关键决策与理由、研究结论、可复用的方法或配置步骤。闲聊、调试过程、已被取代的草稿不提名。
写入 `H:\AI_Index\data\candidates\<ID>.md`，`status: pending`，并把 ID 写进当天日报的 `candidates`。

### 2.3 文件格式（两种共用）
ID 规则：`<YYYY-MM-DD>-<coco|cc>-<两位序号>`，例：`2026-11-02-cc-01`。

```markdown
---
id: 2026-11-02-cc-01
title: 标题（20 字内）
bot: CC
date: 2026-11-02
category: 提示词
status: kept 或 pending
source: agent://<会话 ID> 或 codex://threads/<ID>
reason: 为什么值得留（一句话）
---
这里放**原文**（完整提示词、结论段落等），不要只放摘要。
```

### 2.4 确认与拒绝（任一机器人收到都可执行）
- 「收下 <ID>」（可多个）：把文件从 `candidates\` 移到 `favorites\`，`status` 改为 `kept`。
- 「不要 <ID>」：移到 `candidates\_expired\`。
- 处理完运行一次 `build.ps1 -Push`。
- 7 天未确认的候选由 `build.ps1` 自动移到 `_expired\`。

## 3. 每周周报（Grok 每周日 17:00 触发，CC 执行）

统计范围：**上周日 17:00 ～ 本周日 17:00**。读取范围内的所有日报（COCO 与 CC 两份），再加上本周日 0 点到 17:00 CC 自己可读的会话。
写入 `H:\AI_Index\data\weekly\<本周日日期>.json`：

```json
{
  "week": "2026-11-08",
  "from": "2026-11-01 17:00",
  "to": "2026-11-08 17:00",
  "generated": "2026-11-08T17:06+08:00",
  "done":  [{"bot": "COCO", "text": "完成了什么（一句话）"}],
  "todo":  [{"bot": "CC",   "text": "未完成什么，卡在哪"}],
  "keep":  [{"bot": "CC",   "text": "值得留存的新内容（收藏标题 + ID）"}]
}
```

只写这三件事，每部分最多 8 条，按重要性排序。写完运行 `build.ps1 -Push`。

## 4. 网站（GitHub Pages）

网站：<https://heruiyyy.github.io/ai-index/>，来自**公开**仓库 `heruiYYY/ai-index` 的 `main` 分支根目录（用户于 2026-11-01 决定公开）。

- **自动更新**：每次 `build.ps1 -Push` 推送后，GitHub 约 1 分钟内自动重建网站，无需额外操作。
- **一切公开**：仓库里所有文件和提交历史、网站上的全部内容，任何人都能看到。写日报、收藏时除通用禁令外，也不要写入不宜公开的个人信息（真实姓名、住址、电话、账号、私人对话细节等）；拿不准的先问用户。
- 不要删除仓库根目录的 `.nojekyll`（让 GitHub 原样提供文件）。
