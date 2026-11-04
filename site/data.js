window.INDEX_DATA = {"built":"2026-11-05 00:32","daily":[{
  "date": "2026-11-01",
  "bot": "CC",
  "generated": "2026-11-01T11:36+08:00",
  "migrated": true,
  "summary": "Rui Claude Code CLI 登录验收；移除极川接口；建联调与任务跟踪两个会议室；确认 CC 提示词职责与协作边界。",
  "sessions": [
    {"time": "约 10:51 起", "title": "CC 私聊：Rui Claude Code 定位 → 去极川 → OAuth 登录 → 开会议室 → 改名 CC / 提示词职责", "id": "e280717d-3a54-448e-8ad0-45ff2ed7a338", "link": "agent://e280717d-3a54-448e-8ad0-45ff2ed7a338"},
    {"time": "11:23", "title": "创建「Claude Code 联调」：分工下达；COCO 确认；要求各自建聊天目录索引", "id": "782be61b-05c3-4332-b9f9-b6a00b6e5ff1", "link": "agent://782be61b-05c3-4332-b9f9-b6a00b6e5ff1"},
    {"time": "11:23", "title": "创建「Claude Code 任务跟踪」：进度回传室；本日转写暂空", "id": "bc746830-4a29-4f1e-9bc5-2e4672a457a9", "link": "agent://bc746830-4a29-4f1e-9bc5-2e4672a457a9"}
  ],
  "outputs": [
    {"category": "协作与约定", "name": "改名 CC · 提示词职责确认", "status": "rule", "since": "11-01",
     "output": "用户将本 bot 改名为 CC，专职撰写与优化提示词；需要生图 / 研究时派给 COCO", "note": "本日尚无独立提示词成品交付",
     "links": [["CC 私聊", "agent://e280717d-3a54-448e-8ad0-45ff2ed7a338"], ["联调室", "agent://782be61b-05c3-4332-b9f9-b6a00b6e5ff1"]],
     "detail": "profile.json 中 name 为 CC，namedBy 为 user。本日未见单独成篇的提示词成品附件，故仅登记职责确认。"},
    {"category": "协作与约定", "name": "CC／COCO 协作边界", "status": "rule", "since": "11-01",
     "output": "CC：提示词撰写优化、Claude Code CLI 维护与连通；COCO：本机 Codex 生图与研究；不互抢职责",
     "links": [["联调室", "agent://782be61b-05c3-4332-b9f9-b6a00b6e5ff1"]]},
    {"category": "协作与约定", "name": "Claude Code 联调会议室", "status": "ok", "since": "11-01",
     "output": "成员 CC＋COCO；已下达分工，COCO 已确认接手",
     "links": [["联调室", "agent://782be61b-05c3-4332-b9f9-b6a00b6e5ff1"]],
     "detail": "约 11:23 创建。COCO 确认：生图与深度研究走 Rui Codex，写作／翻译／总结转 CC。目录 /home/box/agent-data/agents/782be61b-05c3-4332-b9f9-b6a00b6e5ff1/"},
    {"category": "协作与约定", "name": "Claude Code 任务跟踪会议室", "status": "wip", "since": "11-01",
     "output": "成员 CC＋COCO；用于进度回传", "note": "本日正文转写尚未由 ReadTranscript 返回",
     "links": [["任务跟踪", "agent://bc746830-4a29-4f1e-9bc5-2e4672a457a9"]]},
    {"category": "协作与约定", "name": "明确不接 OpenCode", "status": "rule", "since": "11-01",
     "output": "用户要求不用 OpenCode；仅走 Claude Code（桌面 / CLI）",
     "links": [["CC 私聊", "agent://e280717d-3a54-448e-8ad0-45ff2ed7a338"]]},
    {"category": "工具", "name": "Rui Claude Code CLI 登录验收", "status": "ok", "since": "11-01",
     "output": "CLI 2.1.302；OAuth 登录完成（claude.ai / Pro）；claude -p 冒烟回复 CLAUDE_CODE_OK",
     "links": [["CC 私聊", "agent://e280717d-3a54-448e-8ad0-45ff2ed7a338"]],
     "detail": "登录截图附件位于 /cursor/stores/store-9a01ed5b-62a0-4960-8f3e-535301e40822/grok-bot/agents/e280717d-3a54-448e-8ad0-45ff2ed7a338/attachments/（含 01M6AHR0CNSQ1KFMT5KCJKFVW4.png 等）。"},
    {"category": "工具", "name": "极川 / Jichuan 接口移除", "status": "ok", "since": "11-01",
     "output": "清除用户级 ANTHROPIC_BASE_URL / ANTHROPIC_AUTH_TOKEN / ANTHROPIC_MODEL；未改 OpenCode", "note": "新开终端或重启桌面端更稳妥",
     "links": [["CC 私聊", "agent://e280717d-3a54-448e-8ad0-45ff2ed7a338"]]},
    {"category": "工具", "name": "统一成果索引 H:\\AI_Index", "status": "wip", "since": "11-01",
     "output": "合并 COCO / CC 索引为一个网页；建立日报、周报、收藏库与 GitHub 私有仓库同步",
     "links": [["网页", "file:///H:/AI_Index/index.html"]]}
  ],
  "pending": ["安装 Git 并接入 GitHub 私有仓库", "在 Grok 中配置每日 0 点与周日 17:00 定时指令"],
  "candidates": []
},{
  "date": "2026-11-01",
  "bot": "COCO",
  "generated": "2026-11-01T11:36+08:00",
  "migrated": true,
  "summary": "修罗宗门场景提示词定稿；Codex CLI 冒烟与 Guardian 安全评估完成；首日迁入此前全部成果。",
  "sessions": [
    {"time": "10:26", "title": "运维 · Codex CLI 冒烟（Reply OK）", "id": "01a194ee-0848-7810-b125-3eca1e70dfe5", "link": "codex://threads/01a194ee-0848-7810-b125-3eca1e70dfe5"},
    {"time": "10:32", "title": "运维 · Guardian review 安全评估", "id": "01a194f2-f1d6-7f81-ac5e-f2d5fd2d409a", "link": "codex://threads/01a194f2-f1d6-7f81-ac5e-f2d5fd2d409a"},
    {"time": "10:38–10:53", "title": "★ 提示词 · 修罗宗门", "id": "01a194f9-1fc6-75a3-8928-01791ea18f86", "link": "codex://threads/01a194f9-1fc6-75a3-8928-01791ea18f86"},
    {"time": "10:41", "title": "提示词 · 宗门初稿", "id": "01a194fb-87ee-7542-8163-3b0c48420490", "link": "codex://threads/01a194fb-87ee-7542-8163-3b0c48420490"}
  ],
  "outputs": [
    {"category": "研究与课程", "name": "Higgsfield 电影短片学习", "status": "ok", "since": "11-01 前",
     "output": "完整学习文档（HTML / MD）、学习包 zip、34 条提示词拆解、YouTube 章节笔记、媒体索引 CSV + 验证截图、原文提示词素材 MD",
     "links": [["学习目录", "file:///C:/Users/Administrator/Documents/ChatGPT/学习/Higgsfield_Cinematic_Study/"], ["HTML", "file:///C:/Users/Administrator/Documents/ChatGPT/学习/Higgsfield_Cinematic_Study/Higgsfield_电影短片_完整学习文档.html"], ["素材源", "file:///C:/Users/Administrator/Documents/MJ_Prompts/Higgsfield_Cinematic_AI_Short_Film_提示词与媒体.md"], ["原对话", "codex://threads/01a178db-8435-7123-8865-d29e2653a604"]]},
    {"category": "研究与课程", "name": "国漫高燃战斗表现研究", "status": "arch", "since": "11-01 前", "output": "战斗镜头 / 表现力方向讨论",
     "links": [["原对话", "codex://threads/01a17de7-ad5a-7750-a811-97bb0e5e2345"]]},
    {"category": "研究与课程", "name": "课程案例上传工作区", "status": "arch", "since": "11-01 前", "output": "下载课程案例并上传到可读空间",
     "links": [["原对话", "codex://threads/01a126bd-0db4-7cf3-b215-cca350eee671"]]},
    {"category": "提示词", "name": "★ 修罗宗门电影 CG 场景概念设计", "status": "ok", "since": "11-01",
     "output": "国漫 / 玄幻场景提示词：非对称构图、纵深、宏大叙事，含负面提示词（由通用「宗门」改写为修罗气质）",
     "links": [["原对话", "codex://threads/01a194f9-1fc6-75a3-8928-01791ea18f86"]]},
    {"category": "提示词", "name": "宗门电影 CG 场景概念设计（初稿）", "status": "draft", "since": "11-01", "output": "同主题初版，独立线程，已被上一条取代",
     "links": [["原对话", "codex://threads/01a194fb-87ee-7542-8163-3b0c48420490"]]},
    {"category": "提示词", "name": "小灯童角色", "status": "arch", "since": "11-01 前", "output": "角色提示词设计",
     "links": [["原对话", "codex://threads/01a04e7b-b003-7110-a0d4-00f1c6388048"]]},
    {"category": "提示词", "name": "掌灯元君", "status": "arch", "since": "11-01 前", "output": "提示词 / 角色设定",
     "links": [["原对话", "codex://threads/01a04db3-6499-7f23-9c66-2cfc4920ba14"]]},
    {"category": "提示词", "name": "Cinedance / Higgsfield acting 系统提示组合", "status": "arch", "since": "11-01 前", "output": "-higgsfield / acting / environmental 提示组合",
     "links": [["原对话", "codex://threads/01a04d24-3963-7000-a53a-93a0e3e517bf"]]},
    {"category": "项目", "name": "灯火仙子故事成立性", "status": "arch", "since": "11-01 前", "output": "故事假设与结构讨论（仙子 / 灯火种等）",
     "links": [["原对话", "codex://threads/01a04cd7-98e6-77d1-b7d2-b3ff3cc92da9"]]},
    {"category": "项目", "name": "短剧本 / 写故事 Skill 寻访", "status": "arch", "since": "11-01 前", "output": "短剧本、网络故事类 Skill 推荐",
     "links": [["原对话", "codex://threads/01a04c92-353b-7922-a1d6-86c3621d44bd"]]},
    {"category": "工具", "name": "Skill 安装 / 列表查询", "status": "arch", "since": "11-01 前", "output": "本机 skill 安装与查看",
     "links": [["安装", "codex://threads/01a043ae-c2cc-7a41-86df-256ac61e4267"], ["列表", "codex://threads/019fdce9-32e0-7702-beba-b8f105f155de"]]},
    {"category": "运维", "name": "Codex CLI 冒烟 / Guardian 评估 / 更新 Codex", "status": "arch", "since": "11-01", "output": "均已完成，无可复用产出",
     "links": [["冒烟", "codex://threads/01a194ee-0848-7810-b125-3eca1e70dfe5"], ["Guardian", "codex://threads/01a194f2-f1d6-7f81-ac5e-f2d5fd2d409a"], ["更新", "codex://threads/01a126ba-8ef0-7043-bec8-40c33f322b92"]]}
  ],
  "pending": [],
  "candidates": []
},{
    "outputs":  [
                    {
                        "since":  "11-02",
                        "name":  "白发雷尊_15s战斗提示词_雷龙冲击版",
                        "output":  "8–15s 改为远距离熔岩雷龙特效冲击，去掉贴脸肉搏／重锤横扫／拳拳到肉，并加负面提示词",
                        "note":  "存 1101 文件夹",
                        "links":  [
                                      [
                                          "文件",
                                          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/MAC-to-WIN/1101/白发雷尊_15s战斗提示词_雷龙冲击版.md"
                                      ],
                                      [
                                          "会话",
                                          "claude-code://2c828440-6945-4180-a11d-c6818fe89447"
                                      ]
                                  ],
                        "category":  "提示词",
                        "status":  "ok"
                    },
                    {
                        "since":  "11-02",
                        "category":  "提示词",
                        "name":  "灵笼_追逐_v2 Seedance 临摹提示词",
                        "status":  "ok",
                        "output":  "最新版全31镜中文重写 v2（32 条／17 段结构）；另有临摹指南、全片中文版、对话总结与交接",
                        "note":  "尚未在 Seedance 实测；占位符与首帧需用户替换",
                        "detail":  "同日还产出 Seedance临摹指南、英文逐镜旧版、中文翻译版、全片中文版／v3、中文重写版与 v2、男主全身图提示词、第一段首帧提示词等；以中文重写版_v2 与对话总结与交接为准。",
                        "links":  [
                                      [
                                          "最新提示词",
                                          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/MAC-to-WIN/0002/灵笼_追逐_v2_inbox/灵笼_追逐_v2_全31镜提示词_中文重写版_v2.md"
                                      ],
                                      [
                                          "交接",
                                          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/MAC-to-WIN/0002/灵笼_追逐_v2_inbox/灵笼_追逐_v2_对话总结与交接.md"
                                      ],
                                      [
                                          "会话",
                                          "claude-code://a43fcf54-afa6-40f8-8b60-11831029fa57"
                                      ]
                                  ]
                    },
                    {
                        "since":  "11-02",
                        "name":  "灵笼临摹硬约束",
                        "output":  "不上传原视频（运镜全写文字）；新男主不要尾巴；提示词中文、硬切、不用性别代词、不写 IP 名",
                        "links":  [
                                      [
                                          "交接",
                                          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/MAC-to-WIN/0002/灵笼_追逐_v2_inbox/灵笼_追逐_v2_对话总结与交接.md"
                                      ],
                                      [
                                          "会话",
                                          "claude-code://b919f851-ad97-42da-9b96-e58e99e652bd"
                                      ]
                                  ],
                        "category":  "协作与约定",
                        "status":  "rule"
                    },
                    {
                        "since":  "11-02",
                        "name":  "Claude 技能包安装（acting / cinedance / higgsfield-tig）",
                        "output":  "桌面会话安装三个相关技能，并处理 skills-upload 技能包",
                        "links":  [
                                      [
                                          "安装会话",
                                          "claude-code://0f0748dc-e1f0-47ee-8757-1aeeb2e466c0"
                                      ],
                                      [
                                          "技能包会话",
                                          "claude-code://b73ba90a-6f40-462a-acfa-f08bd92414e7"
                                      ]
                                  ],
                        "category":  "工具",
                        "status":  "ok"
                    },
                    {
                        "since":  "11-02",
                        "name":  "Higgsfield MCP 文档查阅",
                        "output":  "查阅 https://mcp.higgsfield.ai/mcp 相关说明",
                        "links":  [
                                      [
                                          "会话",
                                          "claude-code://7589a026-1857-4921-a342-06ed9e9718f1"
                                      ]
                                  ],
                        "category":  "工具",
                        "status":  "arch"
                    },
                    {
                        "since":  "11-02",
                        "name":  "CLI 大媒体请求 API 超时",
                        "output":  "含视频+29 张镜头图的灵笼任务在旧会话与新会话均 No response from API；短「OK」测试正常",
                        "note":  "任务已暂停；产出改由桌面会话完成",
                        "links":  [
                                      [
                                          "旧会话",
                                          "claude-code://2c828440-6945-4180-a11d-c6818fe89447"
                                      ],
                                      [
                                          "新会话",
                                          "claude-code://f772b6ea-c6b9-4b83-aafc-05c191699234"
                                      ]
                                  ],
                        "category":  "运维",
                        "status":  "wip"
                    }
                ],
    "pending":  [
                    "灵笼全31镜提示词尚未 Seedance 实测，待用户反馈后再改",
                    "CLI 大请求 API 超时问题未根治（短请求正常）"
                ],
    "candidates":  [
                       "2026-11-02-cc-01",
                       "2026-11-02-cc-02",
                       "2026-11-02-cc-03"
                   ],
    "sessions":  [
                     {
                         "time":  "13:21",
                         "link":  "claude-code://2c828440-6945-4180-a11d-c6818fe89447",
                         "title":  "CLI 续聊：白发雷尊 8–15s 改雷龙冲击；灵笼任务首次超时",
                         "id":  "2c828440-6945-4180-a11d-c6818fe89447"
                     },
                     {
                         "time":  "15:41",
                         "link":  "claude-code://f772b6ea-c6b9-4b83-aafc-05c191699234",
                         "title":  "CLI 新会话：连通测试 OK；灵笼大请求再次 API 无响应后暂停",
                         "id":  "f772b6ea-c6b9-4b83-aafc-05c191699234"
                     },
                     {
                         "time":  "16:27",
                         "link":  "claude-code://a43fcf54-afa6-40f8-8b60-11831029fa57",
                         "title":  "桌面：灵笼追逐视频临摹方案（逐镜分析与提示词主产出）",
                         "id":  "a43fcf54-afa6-40f8-8b60-11831029fa57"
                     },
                     {
                         "time":  "22:18",
                         "link":  "claude-code://b919f851-ad97-42da-9b96-e58e99e652bd",
                         "title":  "桌面：继续灵笼追逐 v2 Seedance 临摹（交接与后续镜）",
                         "id":  "b919f851-ad97-42da-9b96-e58e99e652bd"
                     },
                     {
                         "time":  "22:23",
                         "link":  "claude-code://7589a026-1857-4921-a342-06ed9e9718f1",
                         "title":  "桌面：查阅 Higgsfield MCP 文档",
                         "id":  "7589a026-1857-4921-a342-06ed9e9718f1"
                     },
                     {
                         "time":  "22:41",
                         "link":  "claude-code://0f0748dc-e1f0-47ee-8757-1aeeb2e466c0",
                         "title":  "桌面：安装三个技能（acting-performance / cinedance / higgsfield-tig）",
                         "id":  "0f0748dc-e1f0-47ee-8757-1aeeb2e466c0"
                     },
                     {
                         "time":  "23:16",
                         "link":  "claude-code://b73ba90a-6f40-462a-acfa-f08bd92414e7",
                         "title":  "桌面：技能包安装（acting-performance.zip 等）",
                         "id":  "b73ba90a-6f40-462a-acfa-f08bd92414e7"
                     }
                 ],
    "bot":  "CC",
    "summary":  "改写白发雷尊雷龙冲击提示词；桌面端完成灵笼追逐 v2 Seedance 临摹全31镜中文重写；CLI 大请求两次 API 超时。",
    "date":  "2026-11-02",
    "generated":  "2026-11-03T00:28+08:00"
},{
  "date": "2026-11-02",
  "bot": "COCO",
  "generated": "2026-11-03T00:02+08:00",
  "summary": "当日无会话",
  "sessions": [],
  "outputs": [],
  "pending": [],
  "candidates": []
},{
    "outputs":  [
                    {
                        "since":  "11-03",
                        "category":  "提示词",
                        "name":  "灵笼_追逐_v2_第一段_孤行_提示词_v8",
                        "status":  "ok",
                        "output":  "按 v7 实测改写：白模只管运镜站位；用户小改出 v8-2，画面可接受并作选镜底稿",
                        "note":  "同目录另有 v7／v9；以 v8.md 与实测视频 v8-2 为准",
                        "detail":  "工具即梦 Seedance 2.5；上传定妆／场景／无人物白模／原片音频。v8-2 前五个切点差 0–1 帧，S03≈12.5%。",
                        "links":  [
                                      [
                                          "v8 提示词",
                                          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/MAC-to-WIN/0002/灵笼_追逐_v2_inbox/02_提示词/01_当前版本/灵笼_追逐_v2_第一段_孤行_提示词_v8.md"
                                      ],
                                      [
                                          "会话",
                                          "claude-code://a141b6d4-9f49-494f-a03c-cfd28c5a3bfc"
                                      ]
                                  ]
                    },
                    {
                        "since":  "11-03",
                        "name":  "国产动漫临摹复盘_可复用的AI视频制作经验",
                        "output":  "总结临摹流程改点、v5–v8-2 对照、规避表与返工分层；附流程图与对话整理",
                        "links":  [
                                      [
                                          "复盘文档",
                                          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/MAC-to-WIN/0002/灵笼临摹复盘汇报_2026-11-03/国产动漫临摹复盘_可复用的AI视频制作经验.md"
                                      ],
                                      [
                                          "会话",
                                          "claude-code://43a57eeb-95eb-4091-8858-ee756745c674"
                                      ]
                                  ],
                        "category":  "研究与课程",
                        "status":  "ok"
                    },
                    {
                        "since":  "11-03",
                        "name":  "Seedance 白模与线稿控制约定",
                        "output":  "无人物白模默认；简单线稿只控比例；测好版本只小改；靠选镜消化随机差异；雪上不写红色",
                        "links":  [
                                      [
                                          "记忆",
                                          "file:///C:/Users/Administrator/.claude/projects/H--01-Work------AI------/memory/lingcage-seedance-reference-video-lessons.md"
                                      ],
                                      [
                                          "会话",
                                          "claude-code://a141b6d4-9f49-494f-a03c-cfd28c5a3bfc"
                                      ]
                                  ],
                        "category":  "协作与约定",
                        "status":  "rule"
                    },
                    {
                        "since":  "11-03",
                        "name":  "灵笼制作决定（Seedance 2.5／原片画风／char_make_v6）",
                        "output":  "定工具为即梦 Seedance 2.5、统一原片风格化 3D、主角用 char_make_v6、允许剪辑调色与原片音频",
                        "links":  [
                                      [
                                          "记忆",
                                          "file:///C:/Users/Administrator/.claude/projects/H--01-Work------AI------/memory/lingcage-production-decisions.md"
                                      ],
                                      [
                                          "会话",
                                          "claude-code://280599e0-0b93-4130-838c-1f01ea12c46f"
                                      ]
                                  ],
                        "category":  "协作与约定",
                        "status":  "rule"
                    },
                    {
                        "since":  "11-03",
                        "name":  "灵笼运镜测量与白模资产整理",
                        "output":  "完善 07_运镜测量工具脚本；整理 05_白模预演四段资产与重渲校验流程；同步盘误删后恢复并外置备份",
                        "note":  "备份在 H:\\01_Work\\个人创作\\AI智能视频生成\\_灵笼白模备份_20261103",
                        "links":  [
                                      [
                                          "白模位置说明",
                                          "file:///C:/Users/Administrator/.claude/projects/H--01-Work------AI------/memory/lingcage-previs-location.md"
                                      ],
                                      [
                                          "会话",
                                          "claude-code://0f0748dc-e1f0-47ee-8757-1aeeb2e466c0"
                                      ]
                                  ],
                        "category":  "工具",
                        "status":  "ok"
                    },
                    {
                        "since":  "11-03",
                        "name":  "男主上半身特写与腿部显长修图",
                        "output":  "男主上半身特写（定妆+线稿+材质球）；另有拉长腿部比例的修图讨论与预览",
                        "links":  [
                                      [
                                          "特写会话",
                                          "claude-code://60446593-dcda-41b3-86ea-4dce94111e45"
                                      ],
                                      [
                                          "腿部会话",
                                          "claude-code://0e379551-e647-43a9-b751-87df65876527"
                                      ]
                                  ],
                        "category":  "提示词",
                        "status":  "draft"
                    }
                ],
    "pending":  [
                    "第二到第四段（S08–S31）提示词尚未按新标准更新，也未实测",
                    "从 v8／v8-2 完成第一段选镜与精剪（S06 偏长等）"
                ],
    "candidates":  [
                       "2026-11-03-cc-01",
                       "2026-11-03-cc-02",
                       "2026-11-03-cc-03"
                   ],
    "sessions":  [
                     {
                         "time":  "00:10",
                         "link":  "claude-code://280599e0-0b93-4130-838c-1f01ea12c46f",
                         "title":  "桌面：Acting／制作决定与第一段首次实测准备",
                         "id":  "280599e0-0b93-4130-838c-1f01ea12c46f"
                     },
                     {
                         "time":  "00:10",
                         "link":  "claude-code://ec9de1d1-da42-4175-a5d7-16b066884b10",
                         "title":  "桌面：Acting performance 相关短会话",
                         "id":  "ec9de1d1-da42-4175-a5d7-16b066884b10"
                     },
                     {
                         "time":  "00:46",
                         "link":  "claude-code://60446593-dcda-41b3-86ea-4dce94111e45",
                         "title":  "桌面：男主上半身特写生成",
                         "id":  "60446593-dcda-41b3-86ea-4dce94111e45"
                     },
                     {
                         "time":  "01:03",
                         "link":  "claude-code://0e379551-e647-43a9-b751-87df65876527",
                         "title":  "桌面：腿部显长修图技巧",
                         "id":  "0e379551-e647-43a9-b751-87df65876527"
                     },
                     {
                         "time":  "02:00",
                         "link":  "claude-code://0f0748dc-e1f0-47ee-8757-1aeeb2e466c0",
                         "title":  "桌面：技能与白模资产／运镜测量（续）",
                         "id":  "0f0748dc-e1f0-47ee-8757-1aeeb2e466c0"
                     },
                     {
                         "time":  "15:03",
                         "link":  "claude-code://7238d7bf-2fdd-48fd-93e9-12a3de196d0a",
                         "title":  "桌面：检索文件夹 灵笼_追逐_v2",
                         "id":  "7238d7bf-2fdd-48fd-93e9-12a3de196d0a"
                     },
                     {
                         "time":  "16:38",
                         "link":  "claude-code://a141b6d4-9f49-494f-a03c-cfd28c5a3bfc",
                         "title":  "桌面：灵笼追逐视频测试问题（v7–v9／v8-2）",
                         "id":  "a141b6d4-9f49-494f-a03c-cfd28c5a3bfc"
                     },
                     {
                         "time":  "20:53",
                         "link":  "claude-code://43a57eeb-95eb-4091-8858-ee756745c674",
                         "title":  "桌面：国产动漫临摹流程总结（复盘文档）",
                         "id":  "43a57eeb-95eb-4091-8858-ee756745c674"
                     },
                     {
                         "time":  "23:40",
                         "link":  "claude-code://f2ca4252-5db4-4905-aea6-472d584cf87a",
                         "title":  "桌面：iPad 投屏到 MacBook Pro",
                         "id":  "f2ca4252-5db4-4905-aea6-472d584cf87a"
                     }
                 ],
    "bot":  "CC",
    "summary":  "灵笼第一段 Seedance 多轮实测定 v8-2；写出临摹复盘与白模／线稿控制约定。",
    "date":  "2026-11-03",
    "generated":  "2026-11-04T00:25+08:00"
},{
    "date":  "2026-11-03",
    "bot":  "COCO",
    "generated":  "2026-11-04T00:10+08:00",
    "summary":  "用 tig-blocking-map 为 SNOW 七镜长图定稿 7 条 MAP 提示词。",
    "sessions":  [
                     {
                         "time":  "01:58",
                         "title":  "★ 提示词 · SNOW 七镜 MAP 图",
                         "id":  "01a19d69-b978-7983-95da-8a52a0586510",
                         "link":  "codex://threads/01a19d69-b978-7983-95da-8a52a0586510"
                     }
                 ],
    "outputs":  [
                    {
                        "category":  "提示词",
                        "name":  "★ SNOW 七镜 MAP 提示词",
                        "status":  "ok",
                        "since":  "11-03",
                        "output":  "7 条独立 MAP 提示词（蓝轮廓角色、2.35:1、staging/loc 标签与颜色键），覆盖脸部/登坡/腿脚/肩背等镜位",
                        "note":  "技能第 1 步产出；项目名暂用 SNOW",
                        "detail":  "MAP 01 脸部极近特写；02 侧面远景登坡；03 腿脚局部特写；04 后侧肩部近景；05 背面远景登坡；06 后脑与背肩近景；07 正面低头近景",
                        "links":  [
                                      [
                                          "原对话",
                                          "codex://threads/01a19d69-b978-7983-95da-8a52a0586510"
                                      ],
                                      [
                                          "技能",
                                          "file:///C:/Users/Administrator/.codex/skills/higgsfield-tig-blocking-map/SKILL.md"
                                      ]
                                  ]
                    }
                ],
    "pending":  [

                ],
    "candidates":  [
                       "2026-11-03-coco-01"
                   ]
},{
  "date": "2026-11-04",
  "bot": "CC",
  "generated": "2026-11-05T00:31+08:00",
  "summary": "建成 save-chat 存档；神话动画提示词研究；光阴离线包与临摹素材规则落地。",
  "sessions": [
    {
      "time": "00:31",
      "title": "桌面：问题讨论 · 创建 save-chat 技能与存档",
      "id": "81388e4a-9bbb-4fa3-ae9f-8c58ecbd43bc",
      "link": "claude-code://81388e4a-9bbb-4fa3-ae9f-8c58ecbd43bc"
    },
    {
      "time": "01:01",
      "title": "桌面：二维手绘动画研究与提示词",
      "id": "1597bd29-9881-40e2-b3e0-fd12dfaa0586",
      "link": "claude-code://1597bd29-9881-40e2-b3e0-fd12dfaa0586"
    },
    {
      "time": "01:03",
      "title": "桌面：中国神话动画研究与提示词",
      "id": "e42cd8b9-4741-4d69-9f8e-f6b36036e755",
      "link": "claude-code://e42cd8b9-4741-4d69-9f8e-f6b36036e755"
    },
    {
      "time": "12:46",
      "title": "桌面：AI 视频临摹流程设计（90 秒起手）",
      "id": "07a85270-f6fd-42bf-b336-be5f703f640b",
      "link": "claude-code://07a85270-f6fd-42bf-b336-be5f703f640b"
    },
    {
      "time": "21:49",
      "title": "桌面：AI动漫复刻文档审核",
      "id": "b8f2db86-0da4-4a2e-a8ab-f688c3704a19",
      "link": "claude-code://b8f2db86-0da4-4a2e-a8ab-f688c3704a19"
    },
    {
      "time": "22:46",
      "title": "桌面：验证并打包光阴离线版",
      "id": "3642a63d-40da-47a0-96eb-753b1ea5020e",
      "link": "claude-code://3642a63d-40da-47a0-96eb-753b1ea5020e"
    },
    {
      "time": "23:15",
      "title": "桌面：光阴临摹方案测试（S13、S29、S23）",
      "id": "fc820894-830e-40ef-8d46-a26139e81f44",
      "link": "claude-code://fc820894-830e-40ef-8d46-a26139e81f44"
    }
  ],
  "outputs": [
    {
      "category": "工具",
      "name": "save-chat 技能与自动存档钩子",
      "status": "ok",
      "since": "11-04",
      "output": "按分类写入网盘「聊天记录」，索引追加；启用会话自动存档钩子",
      "note": "技能与钩子均在 11-04 凌晨随「问题讨论」落地；当日多份存档已写入",
      "detail": "分类：创作-AI视频与提示词／编程开发／学习研究／日常生活／未分类。密钥类内容替换为已隐藏。",
      "links": [
        [
          "技能",
          "file:///C:/Users/Administrator/.claude/skills/save-chat/SKILL.md"
        ],
        [
          "钩子",
          "file:///C:/Users/Administrator/.claude/hooks/save-chat-archive.py"
        ],
        [
          "索引",
          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/聊天记录/索引.md"
        ],
        [
          "会话",
          "claude-code://81388e4a-9bbb-4fa3-ae9f-8c58ecbd43bc"
        ]
      ]
    },
    {
      "category": "研究与课程",
      "name": "上美影×迪士尼动画风格研究与神话提示词",
      "status": "ok",
      "since": "11-04",
      "output": "十维对比报告 + 10 套中国神话中英提示词（上美影水墨／迪士尼 90 年代）",
      "note": "基于既有知识整理，未联网复核厂史；提示词未绑特定模型参数",
      "links": [
        [
          "研究报告",
          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/聊天记录/创作-AI视频与提示词/2026-11/20261104-0103_中国神话动画研究与提示词_e42cd8b9_附件/animation_style_research.md"
        ],
        [
          "会话存档",
          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/聊天记录/创作-AI视频与提示词/2026-11/20261104-0103_中国神话动画研究与提示词_e42cd8b9.md"
        ],
        [
          "会话",
          "claude-code://e42cd8b9-4741-4d69-9f8e-f6b36036e755"
        ]
      ]
    },
    {
      "category": "研究与课程",
      "name": "AI临摹90秒视频起手流程",
      "status": "ok",
      "since": "11-04",
      "output": "先跑通最难 15 秒：拆片→样片→锁视觉→试镜→批量→合成；并列出常见坑",
      "links": [
        [
          "流程存档",
          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/聊天记录/创作-AI视频与提示词/2026-11/20261104-1246_AI临摹90秒视频流程.md"
        ],
        [
          "会话",
          "claude-code://07a85270-f6fd-42bf-b336-be5f703f640b"
        ]
      ]
    },
    {
      "category": "研究与课程",
      "name": "AI动漫复刻总结_v2（审核改版）",
      "status": "ok",
      "since": "11-04",
      "output": "对照灵笼实测重写：哪些靠提示词、白模、选镜或后期；原总结不宜直接当制作方法",
      "note": "原文件保留；v2 在同目录与会话附件",
      "links": [
        [
          "v2",
          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/MAC-to-WIN/0003/02_REF/AI动漫复刻总结_v2.md"
        ],
        [
          "会话存档",
          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/聊天记录/创作-AI视频与提示词/2026-11/20261104-2149_AI动漫复刻文档审核_b8f2db86.md"
        ],
        [
          "会话",
          "claude-code://b8f2db86-0da4-4a2e-a8ab-f688c3704a19"
        ]
      ]
    },
    {
      "category": "项目",
      "name": "光阴_逐镜研究_离线版_v7",
      "status": "ok",
      "since": "11-04",
      "output": "同事可双击 index.html 的离线 zip（约 246 MB）；已改跳转页与使用说明，去掉私密目录",
      "note": "尚未代发；file:// 已在 Win Edge/Chrome 实测",
      "links": [
        [
          "离线包",
          "file:///H:/01_Work/个人创作/AI智能视频生成/光阴_逐镜研究_离线版_v7.zip"
        ],
        [
          "记忆",
          "file:///C:/Users/Administrator/.claude/projects/H--01-Work------AI------/memory/guangyin-offline-package.md"
        ],
        [
          "会话",
          "claude-code://3642a63d-40da-47a0-96eb-753b1ea5020e"
        ]
      ]
    },
    {
      "category": "协作与约定",
      "name": "光阴临摹素材规则",
      "status": "rule",
      "since": "11-04",
      "output": "可用白模／关键帧美术／原片角色；禁用原片视频与深度视频（视为作弊）",
      "links": [
        [
          "记忆",
          "file:///C:/Users/Administrator/.claude/projects/H--01-Work------AI------/memory/guangyin-copy-rules.md"
        ],
        [
          "会话",
          "claude-code://b8f2db86-0da4-4a2e-a8ab-f688c3704a19"
        ]
      ]
    },
    {
      "category": "协作与约定",
      "name": "光阴网站本地服务约定",
      "status": "rule",
      "since": "11-04",
      "output": "必须用 serve_range.py（Range/206）；勿用 http.server，否则视频无法跳转",
      "links": [
        [
          "记忆",
          "file:///C:/Users/Administrator/.claude/projects/H--01-Work------AI------/memory/guangyin-site-local-server.md"
        ],
        [
          "会话",
          "claude-code://b8f2db86-0da4-4a2e-a8ab-f688c3704a19"
        ]
      ]
    },
    {
      "category": "研究与课程",
      "name": "白模防僵硬的公开做法（未实测）",
      "status": "draft",
      "since": "11-04",
      "output": "关键姿势加黑场、方块代理、位置标记等合集摘要；用于光阴前需遵守素材规则",
      "links": [
        [
          "记忆",
          "file:///C:/Users/Administrator/.claude/projects/H--01-Work------AI------/memory/blender-seedance-previs-methods.md"
        ],
        [
          "会话",
          "claude-code://b8f2db86-0da4-4a2e-a8ab-f688c3704a19"
        ]
      ]
    },
    {
      "category": "运维",
      "name": "Claude摘要_按日导出试写",
      "status": "arch",
      "since": "11-04",
      "output": "按日/2026-11-04/0018_Claude-Code桌面端使用.md（约 3KB，抓取不完整）",
      "note": "仅作桌面端用法问答存档试写，未作为完整对话导出",
      "links": [
        [
          "摘要",
          "file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/Claude摘要/按日/2026-11-04/0018_Claude-Code桌面端使用.md"
        ]
      ]
    }
  ],
  "pending": [
    "光阴 S13／S29／S23 临摹方案按素材规则实测",
    "动画风格研究报告联网复核厂史与作品信息",
    "光阴离线包尚未发给同事"
  ],
  "candidates": [
    "2026-11-04-cc-01",
    "2026-11-04-cc-02",
    "2026-11-04-cc-03"
  ]
},{
    "date":  "2026-11-04",
    "bot":  "COCO",
    "generated":  "2026-11-05T00:10+08:00",
    "summary":  "当日无会话",
    "sessions":  [

                 ],
    "outputs":  [

                ],
    "pending":  [

                ],
    "candidates":  [

                   ]
}],"weekly":[{
  "week": "2026-11-01",
  "from": "2026-10-25 17:00",
  "to": "2026-11-01 17:00",
  "generated": "2026-11-01T17:08+08:00",
  "done": [
    {"bot": "CC", "text": "Rui Claude Code CLI 登录验收（2.1.302／Pro），移除极川接口，明确不接 OpenCode"},
    {"bot": "CC", "text": "建「Claude Code 联调」「任务跟踪」会议室，确认 CC／COCO 协作边界与改名 CC 提示词职责"},
    {"bot": "COCO", "text": "修罗宗门电影 CG 场景概念设计提示词定稿（含负面提示词）"},
    {"bot": "COCO", "text": "Higgsfield 电影短片学习包迁入索引（完整学习文档／34 条拆解／媒体索引等）"},
    {"bot": "CC", "text": "地渊醉翁vs暗紫巫师约 68 秒高燃战斗提示词交付（Claude Code）"},
    {"bot": "CC", "text": "地渊醉翁vs暗紫巫师 Seedance≤30s 战斗提示词清洁 UTF-8 交付"},
    {"bot": "CC", "text": "百度网盘 0001 素材分析.md 与男主表情与对白分析.md 写入约定目录"},
    {"bot": "CC", "text": "H:\\AI_Index 统一索引与 GitHub Pages（heruiyyy.github.io/ai-index）上线；Git／定时周报链路可用"}
  ],
  "todo": [
    {"bot": "CC", "text": "候选收藏「修罗宗门…」2026-11-01-coco-01 待用户「收下／不要」；正文仍为迁移占位"},
    {"bot": "CC", "text": "「Claude Code 任务跟踪」会议室正文转写仍空，进度回传室尚未可用"},
    {"bot": "CC", "text": "高燃战斗跨机／百度网盘素材转交曾暂停清理，稳定传素材到 Rui 的流程未固化"},
    {"bot": "CC", "text": "Claude Code 中文输出 UTF-8 编码偶发异常，清洁重出流程仍需继续压测"}
  ],
  "keep": [
    {"bot": "COCO", "text": "修罗宗门电影 CG 场景概念设计（定稿提示词）· 2026-11-01-coco-01"},
    {"bot": "COCO", "text": "Higgsfield 电影短片完整学习文档／学习包（迁入成果，尚无正式收藏 ID）"},
    {"bot": "CC", "text": "地渊醉翁vs暗紫巫师 Seedance≤30s 战斗提示词 · battle-30s-Seedance-prompt.md"},
    {"bot": "CC", "text": "地渊醉翁vs暗紫巫师约 68 秒高燃战斗提示词 · battle-1min-READY.md"},
    {"bot": "CC", "text": "0001 素材分析.md 与男主表情与对白分析.md（MAC-to-WIN\\0001）"}
  ]
}],"candidates":[{"id":"2026-11-01-coco-01","title":"修罗宗门电影 CG 场景概念设计（定稿提示词）","bot":"COCO","date":"2026-11-01","category":"提示词","status":"pending","source":"codex://threads/01a194f9-1fc6-75a3-8928-01791ea18f86","reason":"当日定稿的场景提示词，含负面提示词，可直接复用","body":"（迁移首日示例：原文请 COCO 从原对话补入此处。以后提名时，机器人会把原文直接写在这里。）","file":"data/candidates/2026-11-01-coco-01.md"},{"id":"2026-11-02-cc-01","title":"白发雷尊 15s 雷龙冲击版提示词","bot":"CC","date":"2026-11-02","category":"提示词","status":"pending","source":"agent://2c828440-6945-4180-a11d-c6818fe89447","reason":"定稿：8–15s 改为远距离雷龙特效冲击，含负面提示词，可直接复用","body":"# 白发雷尊 · 15s 战斗提示词（8–15s 改为雷龙特效冲击版）\n\n\u003e 日期：2026-11-02\n\n---\n\n## 一、对话记录\n\n**用户：**\n修改一下这段提示词，把 8–15s 改成敌人受到雷龙特效冲击，不要改成人物被徒手打击。（原提示词见第四节）\n\n**CC：**\n原版 8–15s 有三处会让模型生成\"近身肉搏 / 徒手或贴身击打\"：\n1. 小标题\"**贴脸肉搏**\"；\n2. \"角色A**右手重锤横扫其胸口**\"，这是武器的近身接触打击，模型也很容易画成拳头或手臂打中对方；\n3. 结尾\"**拳拳到肉**极致打击感\"。\n\n修改思路：\n- **角色A全程保持远距离**，不冲到角色B身边，只用\"高举龙头锤 → 锤头前指\"来**发号施令**；\n- **真正击中角色B的只有\"太古熔岩雷龙\"这个特效**：雷龙俯冲、龙首撞击、雷火贯穿、龙身缠绕后爆炸；\n- 明确写出\"**角色A的身体和武器始终不接触角色B**\"，并补充负面提示词，避免模型自行加入肉搏动作；\n- 0–8s、风场、光影、运镜部分**保持原样**，只把\"顶级特效拆解\"里的\"拳拳到肉\"改为能量冲击类的描述。\n\n修改后的完整提示词见下一节。\n\n---\n\n## 二、修改后的完整提示词\n\n[风场与流体] 狂暴地渊热浪罡风，流速极狂躁。角色A（白发白须、橙色宽袍、手持金属龙头重锤的壮硕老者）橙色道袍猎猎作响，白须如钢针狂舞；角色B（银白长发、脑后悬浮暗紫神环、黑紫骨甲袍的妖异青年）破碎袍角如毒鞭高速抽打。底层逻辑是\"沸腾的电磁熔岩坍塌\"，高空威压将下方赤红岩浆海压出千米凹陷，滚烫火浆违背重力化作拉丝流体向高空逆流抽吸。\n\n[光影逻辑] \"深渊冥火与狂暴雷霆的冷暖极限吞噬\"。角色B的暗紫鬼雾压暗天地，角色A爆发炽白耀金雷光（最强上帝光）直射岩浆海，形成刺眼的雷火折射光幕，高频闪烁切割出锐利的硬边轮廓光。\n\n[摄像机运镜] 360度多轴螺旋环绕，全程45度极限荷兰角构图。在宏观大远景与f/1.2极限浅景深微距特写间极速甩镜切换，配合动作连续触发希区柯克变焦与12mm超广角鱼眼透视畸变。\n\n[正文 (15s时间轴)]\n\n(0-3s 宏观对峙与施法) 荷兰角大远景，熔岩海上空，角色B背后紫色神环暴涨化作百丈白骨法相，秒切f/1.2浅景深手部特写，五指成爪触发希区柯克变焦，漫天黑紫鬼爪压下！\n\n(3-8s 子弹时间蓄力与雷火真龙) 绝境爆发！启动子弹时间360度环绕退轨跟拍！先切角色A足部特写，木屐暴力踏碎空气炸开音爆云，下方百万吨岩浆被电磁场抽吸冲天！镜头上甩至全身超广角鱼眼特写，角色A夸张满弓后仰高举龙头锤，逆流岩浆与蓝白狂雷交融化作千丈\"太古熔岩雷龙\"盘绕锤身！\n\n(8-12s 雷龙出击与破法贯穿) 抽帧加速！角色A原地站定，龙头锤猛然向前一指，盘绕锤身的千丈熔岩雷龙仰天咆哮、脱锤而出！镜头紧贴雷龙鱼眼放大的龙首追身跟拍，雷龙化作Z字雷火流光俯冲，龙爪撕碎、龙身碾碎漫天黑紫鬼爪，崩碎的白骨法相碎片与带电岩浆如暴雨覆盖全场！角色A始终远距离施法，身体与武器不接触角色B。\n\n(12-15s 雷龙冲击受击与眼神收尾) 顿帧2帧切黑白红冲击帧！熔岩雷龙张开巨口，龙首正面轰撞角色B胸口，雷火洪流瞬间贯穿其身体，脑后暗紫神环应声炸裂！秒切f/1.2面部受击微距特写，角色B被雷光冲击波压得脸部肌肉夸张扭曲变形，皮肤下电弧游走，紫血与电火花慢镜头飞溅！龙身随即缠绕其全身轰然爆炸，冲击波把角色B打成虾米状倒飞暴射，撞碎悬浮黑岩遗迹！最后死死咬住角色A眼睛微距特写（浅景深），瞳孔倒映雷龙消散的残光、漫天暗紫灰烬与岩浆巨浪。\n\n[顶级特效拆解] 多相电磁熔岩流体耦合模拟（Multi-phase Electro-Magma Fluid Coupling）、雷龙能量体追踪冲击（Energy Dragon Impact）、等离子冲击波与刚体遗迹破碎（Rigid Body Fracture）、希区柯克空间畸变，高帧率3D国漫巅峰渲染，雷霆轰击极致冲击感。\n\n**负面提示词（建议附加）：**\n```\n徒手打击, 拳击, 脚踢, 肘击, 近身肉搏, 贴身缠斗, 锤子直接击中敌人, 角色A冲到角色B身前, 两人身体接触\n```\n\n---\n\n## 三、修改对照（仅 8–15s 及末尾）\n\n| 位置 | 原文 | 修改后 |\n|---|---|---|\n| 8–12s 标题 | 破法冲锋与**贴脸肉搏** | 雷龙出击与破法贯穿 |\n| 8–12s 动作主体 | **角色A化作**Z字雷火流光轰碎漫天鬼爪 | 角色A原地以锤**发令**，**雷龙**脱锤而出、化作 Z 字雷火流光碾碎鬼爪 |\n| 8–12s 镜头 | 紧贴鱼眼放大的龙头锤面 | 紧贴鱼眼放大的**雷龙龙首**追身跟拍 |\n| 8–12s 新增 | — | 明确写\"角色A远距离施法，身体与武器不接触角色B\" |\n| 12–15s 打击来源 | 角色A**右手重锤横扫其胸口** | **雷龙龙首轰撞胸口** + 雷火贯穿 + 龙身缠绕爆炸 |\n| 12–15s 受击细节 | 脸部肌肉扭曲，紫血与电火花飞溅 | 保留，补充\"被雷光冲击波压得\"\"皮肤下电弧游走\"\"神环炸裂\" |\n| 12–15s 结尾 | 瞳孔倒映暗紫灰烬与岩浆巨浪 | 增加\"雷龙消散的残光\"，和前面的特效呼应 |\n| 特效拆解 | **拳拳到肉**极致打击感 | 雷龙能量体追踪冲击、等离子冲击波，**雷霆轰击**极致冲击感 |\n\n---\n\n## 四、原始提示词（存档）\n\n[风场与流体] 狂暴地渊热浪罡风，流速极狂躁。角色A（白发白须、橙色宽袍、手持金属龙头重锤的壮硕老者）橙色道袍猎猎作响，白须如钢针狂舞；角色B（银白长发、脑后悬浮暗紫神环、黑紫骨甲袍的妖异青年）破碎袍角如毒鞭高速抽打。底层逻辑是\"沸腾的电磁熔岩坍塌\"，高空威压将下方赤红岩浆海压出千米凹陷，滚烫火浆违背重力化作拉丝流体向高空逆流抽吸。\n[光影逻辑] \"深渊冥火与狂暴雷霆的冷暖极限吞噬\"。角色B的暗紫鬼雾压暗天地，角色A爆发炽白耀金雷光（最强上帝光）直射岩浆海，形成刺眼的雷火折射光幕，高频闪烁切割出锐利的硬边轮廓光。\n[摄像机运镜] 360度多轴螺旋环绕，全程45度极限荷兰角构图。在宏观大远景与f/1.2极限浅景深微距特写间极速甩镜切换，配合动作连续触发希区柯克变焦与12mm超广角鱼眼透视畸变。\n[正文 (15s时间轴)]\n(0-3s 宏观对峙与施法) 荷兰角大远景，熔岩海上空，角色B背后紫色神环暴涨化作百丈白骨法相，秒切f/1.2浅景深手部特写，五指成爪触发希区柯克变焦，漫天黑紫鬼爪压下！\n(3-8s 子弹时间蓄力与雷火真龙) 绝境爆发！启动子弹时间360度环绕退轨跟拍！先切角色A足部特写，木屐暴力踏碎空气炸开音爆云，下方百万吨岩浆被电磁场抽吸冲天！镜头上甩至全身超广角鱼眼特写，角色A夸张满弓后仰高举龙头锤，逆流岩浆与蓝白狂雷交融化作千丈\"太古熔岩雷龙\"盘绕锤身！\n(8-12s 破法冲锋与贴脸肉搏) 抽帧加速！镜头紧贴鱼眼放大的龙头锤面，角色A化作Z字雷火流光轰碎漫天鬼爪，带电岩浆覆盖全场！\n(12-15s 顿帧受击与眼神收尾) 顿帧2帧切黑白红冲击帧！秒切f/1.2面部受击微距特写，角色B脸部肌肉夸张扭曲变形，紫血与电火花慢镜头飞溅！角色A右手重锤横扫其胸口，将其打成虾米状暴射撞碎悬浮黑岩遗迹！最后死死咬住角色A眼睛微距特写（浅景深），瞳孔倒映漫天暗紫灰烬与岩浆巨浪。\n[顶级特效拆解] 多相电磁熔岩流体耦合模拟（Multi-phase Electro-Magma Fluid Coupling）、刚体遗迹破碎（Rigid Body Fracture）与希区柯克空间畸变，高帧率3D国漫巅峰渲染，拳拳到肉极致打击感。","file":"data/candidates/2026-11-02-cc-01.md"},{"id":"2026-11-02-cc-02","title":"灵笼追逐 v2 全31镜中文重写版 v2","bot":"CC","date":"2026-11-02","category":"提示词","status":"pending","source":"agent://a43fcf54-afa6-40f8-8b60-11831029fa57","reason":"当日灵笼临摹最新逐镜提示词定稿（32 条、17 段结构），后续实测要以它为准","body":"# 《灵笼_追逐_v2》全 31 镜提示词（中文重写版 v2）\n\n\u003e 根据原片的逐帧运动、亮度和音频分析重写，一镜一条，共 32 条（31 镜分 A、B 两段）。**原片只用于分析，不需要上传。** 尚未在 Seedance 上实测。\n\n---\n\n## 使用说明\n\n**每条提示词的结构（可以单独复制使用）：**\n【本场戏目的】【类型片参考】【场景特效与VFX】【首帧与站位】【光学与镜头】【摄影机运动】【动作时序】【统一影调】【灯光与曝光】【声音】【空气与空间】【成像质感】【资产绑定】【表演与运动风格】【场景空间锁定】【镜头｜N镜｜名称】【反向限定】\n\n**替换占位符：**\n\n| 占位符 | 写什么 |\n|---|---|\n| `[HERO_BRIEF]` | 主角年龄、体型、发型、服装、识别特征 |\n| `[PILOT_BRIEF]` | 飞行员年龄、发型、制服、识别特征 |\n| `[CRAFT_BRIEF]` | 飞行器外形、颜色、识别特征 |\n| `[LINE]` | 11、12、13 镜的台词；不要对白就改成“全程闭嘴” |\n\n**对应上传素材（请换成平台实际标签，如 `{{@图片1}}`）：**\n\n| 标签 | 素材 |\n|---|---|\n| `@FIRST` | 换好角色的本镜首帧 |\n| `@HERO` | 主角设定图 |\n| `@PILOT` | 飞行员设定图 |\n| `@CRAFT` | 飞行器设定图 |\n| `@END` | 只用于 31 镜 B：换好角色的 `镜头_029`，作为结尾构图 |\n\n**每镜标题下的备注：**“生成”是建议时长，短镜头按 4 秒写（我记得的下限，请以平台为准）。动作按真实速度发生，“取用”是生成后要剪出的时间段。“后期”是建议合成的内容。画幅在平台界面选 21:9。\n\n**曝光和声音依据：** 曝光目标来自原片每镜的亮度测量，0% 是全黑、100% 是全白。声音的强弱关系来自每镜的响度测量。\n\n---\n\n## 第一幕：孤行\n\n### 1 镜　山脊上的小人\n\n原片 0.00–3.50（3.50s）｜生成 5s｜取用：任选 3.5s｜后期：开头约 1.2s 黑场渐显\n\n```text\n【本场戏目的】\n立住尺度。观众必须一眼看懂：山大得可怕，人小得几乎看不见，这个人仍在向上走。\n\n【类型片参考】\n末日废土科幻动画的静默开场，用自然奇观式的大全景讲故事，不靠对白。\n\n【场景特效与VFX】\n细雪从山脊边缘被风吹落，形成薄薄的雪幕。右下前景有一团圆形失焦雪粒光斑缓慢飘过。没有其他特效。\n\n【首帧与站位】\n深色雪山脊线从画面中下方沿对角线升到右上角。主角已在脊线上，位于画面正中略偏下，高度约占画面 6%，侧背对摄影机，面向右上方。左下是粉色云海和远山，上半部是苍白的天空。\n\n【光学与镜头】\n47° 对角视场角，摄影机在数百米外。透视自然，无明显畸变，山体从近到远都清晰。\n\n【摄影机运动】\n完全锁定，像焊在三脚架上。所有岩石和山脊的位置从头到尾不变。不推，不摇，不漂移，无手持感。\n\n【动作时序】\n0:00 至 0:05，主角缓慢向右上方攀登，只移动约 5% 画宽，人物大小不变。\n\n【统一影调】\n灰粉桃色高光，蓝紫灰阴影，低对比，低饱和。雪不是纯白，暗部不是纯黑。\n\n【灯光与曝光】\n主光是山脊后方日出前的柔和天光，曝光以天空为准。山脊表面在蓝紫阴影中，顶部有细细的暖色边缘。曝光目标：平均约 49%，暗部约 19%，高光约 73%，高光不截断。\n\n【声音】\n只有细细的风声，是全片最安静的时刻。没有音乐，没有对白。\n\n【空气与空间】\n外景·高海拔雪山·黎明前后。雾气有可见厚度，远山被空气透视层层减弱。\n\n【成像质感】\n写实三维动画电影，不是真人实拍。细部略柔，柔和泛光，轻微暗角，细腻颗粒。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，这个距离下只看剪影和斗篷形状。\n\n【表演与运动风格】\n步子沉，不急，带长途跋涉的疲惫。斗篷在风中缓慢摆动。\n\n【场景空间锁定】\n主角始终在脊线上，不离开脊线。低位太阳在主角前方。画面中只有一人。\n\n【镜头｜1镜｜山脊上的小人】\n超大全景，3.5 秒。这一镜重点是山，人只是山上的一个小点。镜头落点：小人仍在脊线上，山和天空没有任何移动。\n\n【反向限定】\n避免小人变大或被推近。避免摄影机漂移。避免第二个人物。避免纯白的雪、蓝天和金色阳光。不要文字、标志、字幕、水印。\n```\n\n### 2 镜　靴子踏雪\n\n原片 3.50–6.25（2.75s）｜生成 4s｜取用：约 0.5–3.25s\n\n```text\n【本场戏目的】\n从无限大直接切到具体的重量。观众必须一眼看懂：每一步都很沉。\n\n【类型片参考】\n生存跋涉题材的身体细节镜头，用脚步传达疲惫。\n\n【场景特效与VFX】\n每一步都有暗红色碎屑沿短弧线向四周飞散。地面有方向性的运动模糊。细雪掠过。\n\n【首帧与站位】\n只有膝盖以下、靴子和斗篷下摆，从画面上缘中央进入，靴子已踩在雪中。画右有明亮的雪堤。\n\n【光学与镜头】\n84° 对角视场角，摄影机距靴子约 1 米。近处的靴子显得偏大，环境铺到画面边缘，无鱼眼感。靴子清晰，四周雪地有模糊。\n\n【摄影机运动】\n摄影机在主角身后腰部高度，陡峭向下俯视，以主角的步速向前。雪地以每秒接近一个画面高度的速度，从画面上方向下流过，并轻微放大。每一步左右轻摆约 5% 画宽，不上下颠簸。靴子始终在画面上部中央。\n\n【动作时序】\n0:00 至 0:02，一只靴子落下，陷入深雪并承重。\n0:02 至 0:04，重心转移，另一只靴子吃力拔出，再次踏下。\n\n【统一影调】\n灰粉色高光，蓝灰色阴影，碎屑是局部的暗红色。低对比。\n\n【灯光与曝光】\n雾蒙蒙的低位逆光。阴影中的雪呈蓝灰色，隆起的雪堤上有柔和的粉色。没有正面光。曝光目标：平均约 40%，暗部约 19%，高光约 64%。\n\n【声音】\n沉重的踩雪声和风声。比上一镜明显更响、更近。没有音乐，没有对白。\n\n【空气与空间】\n贴近地面，细雪在脚边飘动，空气感比远景弱。\n\n【成像质感】\n写实三维动画电影。雪有颗粒和压痕细节，运动模糊方向一致，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，只出现靴子、小腿和斗篷下摆。\n\n【表演与运动风格】\n靴子先下陷，再承重，然后拔出，留下深脚印。碎屑受重力下落，斗篷下摆延迟摆动。\n\n【场景空间锁定】\n主角在山坡上向前走，方向是画面上方。头部和躯干全程不入画。\n\n【镜头｜2镜｜靴子踏雪】\n脚部特写，2.75 秒。这一镜重点是重量感。镜头落点：靴子踩实，雪地继续向下流过。\n\n【反向限定】\n避免露出上半身或脸。避免摄影机上下颠簸。避免脚踩不实、滑步。不要文字、标志、字幕、水印。\n```\n\n### 3 镜　雪峰居中\n\n原片 6.25–9.21（2.96s）｜生成 4s｜取用：任选 3s\n\n```text\n【本场戏目的】\n再次把人放回无尽的环境里。观众必须一眼看懂：这个人走在一座巨大雪峰的正中央。\n\n【类型片参考】\n史诗感动画的对称构图远景，像一幅静止的画。\n\n【场景特效与VFX】\n薄雪贴着坡面飘过，有一两片失焦雪花经过前景。\n\n【首帧与站位】\n对称的雪峰占据画面，峰顶在画面上方正中。主角已在画面正中偏上，高度约占画面 12%，背对摄影机，走向峰顶。暗红色裸岩沿左右山坡露出。\n\n【光学与镜头】\n47° 对角视场角，摄影机在山坡下方远处。透视自然，无畸变，雪面细节从近到远都可读。\n\n【摄影机运动】\n完全锁定，无任何摄影机运动。雪峰在画面中的位置和大小不变。\n\n【动作时序】\n0:00 至 0:04，主角缓慢上坡，斗篷在侧风中摆动，只移动很短的距离，大小不变。\n\n【统一影调】\n山顶偏粉桃色，裸岩是暗红色，底部是蓝紫灰色。低对比。\n\n【灯光与曝光】\n暖光来自山顶后方，曝光以亮雪为准，保留亮雪的层次。画面底部沉入蓝紫阴影。曝光目标：平均约 51%，暗部约 22%，高光约 82%。\n\n【声音】\n风声上涨，形成第一段的小高潮。没有音乐，没有对白。\n\n【空气与空间】\n外景·雪峰·黎明。薄雾贴着坡面，山顶受光处有柔和的光晕。\n\n【成像质感】\n写实三维动画电影。细部略柔，柔和泛光，轻微暗角，细腻颗粒。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，这个距离下只看剪影。\n\n【表演与运动风格】\n走得慢而稳，身体略微前倾。\n\n【场景空间锁定】\n主角沿雪峰中线向上走，不偏离中线。画面中只有一人。\n\n【镜头｜3镜｜雪峰居中】\n超大全景，3 秒。这一镜重点是对称和安静。镜头落点：主角仍在向峰顶走，没有到达。\n\n【反向限定】\n避免摄影机运动。避免人物变大。避免主角到达峰顶。避免第二个人物。不要文字、标志、字幕、水印。\n```\n\n### 4 镜　后脑过肩\n\n原片 9.21–10.75（1.54s）｜生成 4s｜取用：动作最好的 1.5s\n\n```text\n【本场戏目的】\n让观众站到主角身后，看主角在看的世界。\n\n【类型片参考】\n主观跟随式的过肩镜头，强调同行感。\n\n【场景特效与VFX】\n细雪从镜头前掠过，有失焦雪粒。画右地面附近有一团淡淡的粉色光晕。\n\n【首帧与站位】\n后脑已在画面中央，肩部和带雪的领口占下方三分之一，上方是粉红色的岩石高原。主角背对摄影机，看向高原。\n\n【光学与镜头】\n47° 对角视场角，摄影机在主角身后约 1 米、头部高度。焦点在头发和领口，前方高原柔和失焦。\n\n【摄影机运动】\n缓慢向前跟进，画面每秒均匀放大约 6%。轻微左右摆，每次约 3% 画宽，无上下颠簸。\n\n【动作时序】\n0:00 至 0:04，主角向前走，身体有很小的起伏，风把头发吹向画右。\n\n【统一影调】\n高原是粉红色，头发和服装是深褐色暗部。低对比。\n\n【灯光与曝光】\n雾中的太阳在主角前方。头部是暗部，头发边缘有细细的暖色轮廓光并微微透光。没有正面主光。曝光目标：平均约 41%，暗部约 12%，高光约 69%。\n\n【声音】\n风声和布料摩擦声。没有音乐，没有对白。\n\n【空气与空间】\n外景·岩石高原。远处被雾气减弱，前方有开阔的纵深。\n\n【成像质感】\n写实三维动画电影。头发和领口织物有清晰质感，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，后脑、头发和肩部，与参考图 100% 一致。\n\n【表演与运动风格】\n步伐稳定。头发和领口跟随身体，有延迟。\n\n【场景空间锁定】\n主角一直朝高原方向走，后脑保持在画面中央附近。\n\n【镜头｜4镜｜后脑过肩】\n后脑近景，1.5 秒。这一镜重点是同行感。镜头落点：后脑略微变大，位于中央略偏右。\n\n【反向限定】\n避免露脸或转头。避免摄影机上下颠簸。避免背景清晰得抢戏。不要文字、标志、字幕、水印。\n```\n\n### 5 镜　侧脸大特写\n\n原片 10.75–14.17（3.42s）｜生成 4s｜取用：0–3.4s\n\n```text\n【本场戏目的】\n第一次贴近人物。观众必须一眼看懂：这张脸上的疤和皱纹就是这个人的履历。\n\n【类型片参考】\n西部片式的沉默面部特写，不靠表情，靠脸的质感。\n\n【场景特效与VFX】\n细小的雪花从脸前由左向右掠过，部分失焦。呼出的气形成一点淡淡的白雾。\n\n【首帧与站位】\n侧脸已占据画面右半边，眼睛在右下，额头被上边缘切掉。左半边是粉色云海。\n\n【光学与镜头】\n29° 对角视场角，摄影机距脸约 4 米，特写靠焦距实现，不靠贴近。焦点锐利地落在眼睛和皮肤纹理上，只有脸是清晰的。云海融化为柔和的粉色焦外，背景被压平。不换镜头，不变焦。\n\n【摄影机运动】\n0:00 至 0:00.8 静止。之后只有一个运动：摄影机向下移动，脸在画面中向上移动，到 0:03.4 累计约 60% 画高。开始较快，中段放缓，后段略微加快。不推不拉，不左右摇。\n\n【动作时序】\n0:01 左右缓慢眨眼一次。0:02 左右下颌收紧。全程闭嘴。\n\n【统一影调】\n脸是深紫灰色暗部，背景是灰粉色云海。低饱和。\n\n【灯光与曝光】\n明亮的云层在身后，曝光以云层为准，允许脸压暗。鼻梁和嘴唇边缘有细细的冷色轮廓光，眼中有一点眼神光。没有正面主光。曝光目标：平均约 35%，暗部约 5%，高光约 67%。\n\n【声音】\n贴近的呼吸声和风声。没有音乐，没有对白。\n\n【空气与空间】\n主角身后是远处的云海，没有中景，人物和背景之间有很深的距离感。\n\n【成像质感】\n写实三维动画电影。皮肤、疤痕和胡茬有细致纹理，不要塑料感。柔和泛光，画面右侧有较重暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，脸部和疤痕与参考图 100% 一致。\n\n【表演与运动风格】\n不是耍酷，而是疲惫后的坚硬。目光始终看向画左，动作极小。\n\n【场景空间锁定】\n脸部侧向画左，全程不转向摄影机。\n\n【镜头｜5镜｜侧脸大特写】\n大特写，3.4 秒。这一镜重点是疤痕和眼神。镜头落点：嘴和下颌在画面中，眼睛已移出画面上方。\n\n【反向限定】\n避免变成正面脸。避免说话。避免推镜或变焦。避免脸部被照亮。不要文字、标志、字幕、水印。\n```\n\n### 6 镜　抬头\n\n原片 14.17–16.42（2.25s）｜生成 4s｜取用：0–2.25s\n\n```text\n【本场戏目的】\n第一次看清全脸。观众必须一眼看懂：这个人累了，但没有停止警觉。\n\n【类型片参考】\n沉默型主角的亮相镜头，只靠一个很小的抬头动作。\n\n【场景特效与VFX】\n飞雪从多个距离飘过，近处是大而失焦的白点，部分落在头发和斗篷上并停住。\n\n【首帧与站位】\n主角胸部以上，位于中央偏左，躯干朝向摄影机，头低着，目光向下。身后右上方有被照成橙红色的山体。肩部和斗篷上有积雪。\n\n【光学与镜头】\n47° 对角视场角，略低机位，距离约 3 米。人脸比例自然，背景山体略微失焦。\n\n【摄影机运动】\n完全锁定，无任何摄影机运动。身后山体的位置不变。\n\n【动作时序】\n0:00 至 0:02.25，主角站定，不迈步。头慢慢抬起，身体略微移向画右，目光升到镜头略下方。\n0:02.25 至 0:04，保持不动，只有呼吸和头发在动。\n\n【统一影调】\n灰粉和蓝紫灰为主，橙红色山体是局部暖色。低对比。\n\n【灯光与曝光】\n柔和的天光来自身后，脸在柔和的阴影中，头发和肩部有细细的暖色边缘。没有美颜补光。曝光目标：平均约 38%，暗部约 14%，高光约 61%。\n\n【声音】\n风声和呼吸声。比上一镜略微安静。没有音乐，没有对白。\n\n【空气与空间】\n外景·雪山坡地。飞雪在人物前后形成层次。\n\n【成像质感】\n写实三维动画电影。积雪和布料有细节，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n不是走路，而是停下来抬头。头部运动缓慢，有重量。头发比头部慢半拍。\n\n【场景空间锁定】\n主角站在原地不迈步。目光不看镜头。\n\n【镜头｜6镜｜抬头】\n中景，2.25 秒。这一镜重点是抬头这个小动作。镜头落点：主角已抬头，目光看向镜头略下方。\n\n【反向限定】\n避免主角走路。避免摄影机后退或推近。避免看镜头。避免第二个人物。不要文字、标志、字幕、水印。\n```\n\n### 7 镜　察觉回头\n\n原片 16.42–20.21（3.79s）｜生成 4s｜取用：0–3.8s\n\n```text\n【本场戏目的】\n第一个事件。观众必须一眼看懂：主角察觉到了什么，有东西来了。\n\n【类型片参考】\n悬疑感的背影回头，转头之后的长时间静止才是力量。\n\n【场景特效与VFX】\n头发被风吹向画左，发丝逆光发亮。细雪和雾气吹过身前，口鼻前有微弱的呼气白雾。\n\n【首帧与站位】\n主角在画面左侧，胸部以上，背对摄影机。山脉低低压在下方，天空占据上部和画右。\n\n【光学与镜头】\n47° 对角视场角，肩部高度，距离约 2 米。透视自然，远山略微失焦。\n\n【摄影机运动】\n0:00 至 0:01，摄影机向左横移并略微拉远，人物从画面左侧移到中央偏右，移动约 12% 画宽。0:01 之后完全锁定，直到结束。\n\n【动作时序】\n0:00 至 0:01，身体保持背对，头转向画右，露出带疤的面颊和一只眼睛，肩膀轻微跟随。\n0:01 至 0:04，身体和头保持静止，目光锁定画右下方的远处，只有头发和斗篷边缘在飘动。\n\n【统一影调】\n天空是灰白偏暖，山脉是蓝紫灰色，山脚有一点粉红色。低对比。\n\n【灯光与曝光】\n柔和的低位太阳在主角前方的天空中。摄影机在阴影一侧，曝光以天空为准。脸在阴影中，脸颊和头发有暖色轮廓光。没有正面主光。曝光目标：平均约 50%，暗部约 18%，高光约 84%。\n\n【声音】\n风声上涨，远处开始出现低沉的嗡鸣，这是下一个声音高潮的开始。没有音乐，没有对白。\n\n【空气与空间】\n外景·山脊边缘。前方是开阔的山谷，雾气厚重。\n\n【成像质感】\n写实三维动画电影。头发有细腻的透光效果，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n不是受惊回头，而是早有预感的回头。转头有重量，转完之后完全静止。\n\n【场景空间锁定】\n身体全程背对摄影机，只有头在转。目光方向固定在画右下方。\n\n【镜头｜7镜｜察觉回头】\n背面 3/4 中近景，3.8 秒。这一镜重点是转头后的静止。镜头落点：主角保持回望，摄影机和人物都不动。\n\n【反向限定】\n避免转头后摄影机继续运动。避免身体转过来正对镜头。避免夸张的惊恐。不要文字、标志、字幕、水印。\n```\n\n---\n\n## 第二幕：对峙\n\n### 8 镜　飞行器升起\n\n原片 20.21–25.21（5.00s）｜生成 6s｜取用：0–5s｜后期：声音堆到结尾后硬切\n\n```text\n【本场戏目的】\n巨大的机器出现，人没有退一步。观众必须一眼看懂：两者力量悬殊，但主角不害怕。\n\n【类型片参考】\n科幻片的巨物降临，结合西部片的决斗站位。\n\n【场景特效与VFX】\n推进器喷出冷蓝色气流，在雾中拖出蓝色光带。气流把地面细雪吹向四周，形成贴地扩散的雪尘，斗篷摆动加大。\n\n【首帧与站位】\n主角已在画面中央偏右的下部，全身约占画面高度 40%，背对摄影机，站在有暗红条纹的岩石和雪地上。前方是空旷的雾气山谷。飞行器在首帧还未出现。\n\n【光学与镜头】\n47° 对角视场角，胸部高度，摄影机在主角身后约 12 米。透视自然，无压缩。主角和飞行器都清晰，远山被雾气减弱。\n\n【摄影机运动】\n完全锁定，无任何摄影机运动。地面岩石和远山的位置从头到尾不变，飞行器变大不是摄影机推近造成的。\n\n【动作时序】\n0:00 至 0:01，只有风把斗篷吹向画右。\n0:01 至 0:01.7，飞行器沿画面中线从雾中升起，到机头和主角肩部同高，机翼伸向画面两侧。\n0:01.7 至 0:03.3，气浪使主角身体前压扛风，随后站直。飞行器匀速上升，高过主角头顶。\n0:03.3 至 0:05，继续上升并减速，悬停在画面上方约四分之一处，正对摄影机。\n0:05 至 0:06，保持悬停。\n\n【统一影调】\n灰粉色雾气为主，地面有暗红色岩石，推进器的冷蓝色是唯一的冷色点缀。\n\n【灯光与曝光】\n柔和的低位太阳在飞行器后方的雾中。主角接近剪影，有细细的暖色轮廓。飞行器升过主角时，蓝紫色光短暂照在主角身上。机身有柔和的粉色光泽。曝光目标：平均约 61%，暗部约 40%，高光约 76%，整体明亮、对比低。\n\n【声音】\n风声，低沉的引擎轰鸣持续增大，到结尾是第一幕以来最响的。没有音乐，没有对白。\n\n【空气与空间】\n外景·山脊·日。雾气很厚，山谷深处几乎不可见，飞行器从雾里浮现。\n\n【成像质感】\n写实三维动画电影。金属机身有真实反射，柔和泛光，轻微暗角，细腻颗粒。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，长斗篷，与参考图 100% 一致。@CRAFT：[CRAFT_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n主角不后退，不抬头，只有身体扛风时的一次前压。飞行器极重，上升时有细小的姿态修正，不像无人机一样轻快。\n\n【场景空间锁定】\n主角双脚全程不离开原地。飞行器悬停在主角前方的山谷上空。画面中只有一人和一架飞行器。\n\n【镜头｜8镜｜飞行器升起】\n全景，5 秒。这一镜重点是人没有退。镜头落点：飞行器悬停在主角上方，主角仍背对镜头。\n\n【反向限定】\n避免摄影机推拉摇移。避免飞行器快速飞入。避免主角挪脚、转身。避免飞行器外形变化。不要文字、标志、字幕、水印。\n```\n\n### 9 镜　飞行员亮相\n\n原片 25.21–27.96（2.75s）｜生成 4s｜取用：0–2.75s｜后期：开头声音骤降\n\n```text\n【本场戏目的】\n亮出对手。观众必须一眼看懂：这位飞行员冷静、专注，没有情绪。\n\n【类型片参考】\n科幻片的驾驶舱亮相镜头，靠光影变化而不是表情讲故事。\n\n【场景特效与VFX】\n画左前景有失焦的橙红色山体反光，形状像破碎的晶体，从舱罩玻璃上滑过。玻璃反光不要映出人。\n\n【首帧与站位】\n飞行员已在画面中央，头和肩入画，躯干和脸朝向摄影机，目光略微向下看向画左。两侧是座椅和座舱结构。\n\n【光学与镜头】\n47° 对角视场角，摄影机在座舱内，距脸约 1 米。人脸比例自然。焦点在眼睛上，后方座舱略微失焦。\n\n【摄影机运动】\n基本锁定。0:00 至 0:01.4，摄影机极慢下移，共约 8% 画高。0:01.4 后完全静止。不推不拉。\n\n【动作时序】\n0:00 至 0:01.4，目光不动。\n0:01.4 至 0:02.75，飞行器转向，阴影从下向上爬过脸部。眨眼一次，表情不变。\n0:02.75 至 0:04，保持不动。\n\n【统一影调】\n前半段是暖粉和橙红色，后半段背景变暗变冷，转为深青灰色。\n\n【灯光与曝光】\n日光穿过舱罩是唯一主光。阴影边缘平滑地爬过脸部，最后只有眼睛和额头被照亮，眼中有冷色反光。不要补光。曝光目标：平均约 33%，暗部约 12%，高光约 71%。\n\n【声音】\n上一镜的轰鸣在切入时骤降，只剩安静的座舱低鸣。这是强烈的声音反差。没有音乐，没有对白。\n\n【空气与空间】\n内景·座舱。空间狭窄，窗外的光是唯一的外界信息。\n\n【成像质感】\n写实三维动画电影。皮肤细腻但不塑料，玻璃反光柔和，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@PILOT：[PILOT_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n几乎不动，所有变化都由光完成。眼神冷静，不做多余表情。\n\n【场景空间锁定】\n飞行员坐在座椅上，不移动。目光略过摄影机，不看镜头。\n\n【镜头｜9镜｜飞行员亮相】\n近景，2.75 秒。这一镜重点是从明亮走入阴影。镜头落点：下半张脸在阴影中，目光不动。\n\n【反向限定】\n避免表情变化。避免看镜头。避免脸被均匀照亮。避免玻璃上出现人影。不要文字、标志、字幕、水印。\n```\n\n### 10 镜　高空俯瞰对峙\n\n原片 27.96–31.71（3.75s）｜生成 4s｜取用：任选 3.75s\n\n```text\n【本场戏目的】\n交代地理和力量差距。观众必须一眼看懂：人和机器隔着深渊对峙。\n\n【类型片参考】\n史诗片的上帝视角地理镜头。\n\n【场景特效与VFX】\n细雪沿山脊流动，雾气从云层升起。推进器发出冷蓝色的光，下方有淡淡的气流扰动。右下前景有一颗失焦雪粒。\n\n【首帧与站位】\n深色山脊线从左上斜向右下，把画面分成左边的暗色岩壁和右边的粉色云雾。主角已在中央偏下的脊线上，高度约占画面 7%，面向飞行器。飞行器已悬停在右上方，机翼伸展，机头指向左下。\n\n【光学与镜头】\n84° 对角视场角，高空俯视。从近到远都清晰，地貌铺到画面边缘，直线不弯曲。\n\n【摄影机运动】\n完全锁定，无任何摄影机运动。\n\n【动作时序】\n0:00 至 0:04，飞行器只有极小的悬停修正。主角静立，斗篷摆动。\n\n【统一影调】\n左边是蓝紫灰色岩壁，右边是粉色云雾，形成冷暖对分。\n\n【灯光与曝光】\n来自画右的柔和低位太阳把云雾照成粉色。山脊岩石在蓝紫阴影中，脊线边缘有红色受光。曝光目标：平均约 42%，暗部约 16%，高光约 68%。\n\n【声音】\n风声和低沉平稳的引擎嗡鸣。没有音乐，没有对白。\n\n【空气与空间】\n高空，云层在山脊下方，空间纵深很大。\n\n【成像质感】\n写实三维动画电影。岩石有丰富细节，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，小人影。@CRAFT：[CRAFT_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n两者都几乎不动，是对峙的静止。\n\n【场景空间锁定】\n主角站在脊线上，飞行器在深渊上方，两者位置不变。画面中只有一人和一架飞行器。\n\n【镜头｜10镜｜高空俯瞰对峙】\n高空大全景，3.75 秒。这一镜重点是深渊两侧的对峙。镜头落点：两者的位置没有变化。\n\n【反向限定】\n避免摄影机盘旋或漂移。避免人物变大。避免飞行器靠近主角。不要文字、标志、字幕、水印。\n```\n\n### 11 镜　前景人物，背景飞行器\n\n原片 31.71–35.00（3.29s）｜生成 4s｜取用：任选 3.3s\n\n```text\n【本场戏目的】\n两股力量在同一个画面中。观众必须一眼看懂：主角不把飞行器放在眼里。\n\n【类型片参考】\n西部片式的前后景对峙，前实后虚。\n\n【场景特效与VFX】\n飞行器两盏灯透出冷色光，在雾中形成柔和的光晕和星芒。细雪掠过前景。\n\n【首帧与站位】\n主角已在中央偏右，头和肩入画，身体朝向画左，目光低垂看向画左下。飞行器在背景中央偏左，部分被主角的头挡住，正对摄影机，一侧机翼伸向画面左边缘。\n\n【光学与镜头】\n29° 对角视场角，摄影机距主角约 5 米，特写靠焦距实现。焦点锐利地落在脸上，只有主角是清晰的。背景被压缩到主角身后，飞行器只能读出外形和灯光。焦点全程不移到飞行器上。\n\n【摄影机运动】\n基本锁定，不推不拉不摇，只允许极微小的呼吸感。\n\n【动作时序】\n0:00 至 0:00.5，静止。\n0:00.5 至 0:03，主角低沉平静地说话，头略微低下，只说这句台词：“[LINE]”。\n0:03 至 0:04，闭嘴，目光不变。\n\n【统一影调】\n灰白偏粉的天空，暗红褐色的头发和皮肤，飞行器灯光是冷白色。\n\n【灯光与曝光】\n明亮的雾天在身后，曝光以天空为准。摄影机在阴影一侧，脸在阴影中，头发和脸颊有细细的红褐色轮廓光。不要美颜补光。曝光目标：平均约 43%，暗部约 12%，高光约 81%。\n\n【声音】\n贴近的人声，下面垫低沉的引擎嗡鸣。只有台词，没有音乐，没有多余的词。\n\n【空气与空间】\n人物和飞行器之间有雾气，增加距离感。\n\n【成像质感】\n写实三维动画电影。皮肤和头发细节丰富，背景柔和，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，与参考图 100% 一致。@CRAFT：[CRAFT_BRIEF]，只看背景中的外形和灯光。\n\n【表演与运动风格】\n不是争吵，也不是喊话，而是几乎自言自语的拒绝。头发比头部慢半拍。\n\n【场景空间锁定】\n主角背向飞行器，不回头看。飞行器悬停在主角身后，不动。\n\n【镜头｜11镜｜前景人物，背景飞行器】\n近景，3.3 秒。这一镜重点是前实后虚的对峙。镜头落点：主角说完，嘴闭上，目光不变。\n\n【反向限定】\n避免焦点转移到飞行器。避免主角看飞行器或看镜头。避免喊叫。避免多余台词。不要字幕、说明文字、标志、水印。\n```\n\n### 12 镜　回头说话\n\n原片 35.00–39.83（4.83s）｜生成 5s｜取用：0–4.8s\n\n```text\n【本场戏目的】\n再次拒绝，并结束对话。观众必须一眼看懂：主角把话丢过去，然后转身不再理会。\n\n【类型片参考】\n沉默型主角的长镜头表演，只靠转头这一个动作。\n\n【场景特效与VFX】\n头发被风吹向画左，发丝逆光发亮。细雪掠过。\n\n【首帧与站位】\n主角在画面中央，胸部以上，背对摄影机，看不到脸。山脉低低压在下方，上面是苍白的天空。\n\n【光学与镜头】\n47° 对角视场角，肩部高度，摄影机在主角身后约 2 米。主角清晰，远山柔和失焦。\n\n【摄影机运动】\n完全锁定，无任何摄影机运动。\n\n【动作时序】\n0:00 至 0:00.8，静止，风吹起头发。\n0:00.8 至 0:01.6，头转向画右，变成侧脸。\n0:01.6 至 0:03.2，继续缓慢转动，露出 3/4 的脸、疤痕和眼睛，目光看向画右下方，用平静坚定的声音说话，只说这句台词：“[LINE]”。\n0:03.2 至 0:04.8，闭嘴，头缓慢转回去，脸离开视线。\n\n【统一影调】\n灰白偏暖的天空，粉红色山脉，人物是深红褐色暗部。\n\n【灯光与曝光】\n柔和的低位太阳在主角前方。摄影机在阴影一侧，脸在阴影中。转头时，疤痕被侧逆光勾出。没有正面主光。曝光目标：平均约 51%，暗部约 14%，高光约 82%。\n\n【声音】\n风声上贴近的人声。只有台词，没有音乐，没有多余的词。\n\n【空气与空间】\n前方是开阔的山脉，有厚重的空气透视。\n\n【成像质感】\n写实三维动画电影。头发透光，疤痕细节清晰，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n不是对视，只是把话丢过去，然后转身。转头缓慢、有重量，眼神不看镜头。\n\n【场景空间锁定】\n身体全程背对摄影机，只有头在转。主角不离开原地。\n\n【镜头｜12镜｜回头说话】\n背面近景，4.8 秒。这一镜重点是整个镜头只靠转头。镜头落点：主角再次背对镜头。\n\n【反向限定】\n避免摄影机运动。避免身体转过来。避免看镜头。避免说多余的词。不要字幕、说明文字、标志、水印。\n```\n\n### 13 镜　飞行员回应\n\n原片 39.83–43.38（3.54s）｜生成 4s｜取用：0–3.55s\n\n```text\n【本场戏目的】\n对话结束，下一步就是动手。观众必须一眼看懂：飞行员已经冷静地作出决定。\n\n【类型片参考】\n惊悚片的决定时刻，人物逼近镜头，压低声音。\n\n【场景特效与VFX】\n无粒子。显示屏有微弱的绿色辉光，前景有一点失焦的舱内结构。屏幕上不要可读的文字。\n\n【首帧与站位】\n飞行员已在中央偏左，3/4 侧面朝向画右，下巴压低，目光向下看向画右下方。周围是深色座椅和安全带，右下角有微弱的绿色显示屏，右侧有一块明亮的窗外光。\n\n【光学与镜头】\n47° 对角视场角，摄影机在座舱内，起始距离约 1.2 米。焦点在眼睛上，背景略微失焦。\n\n【摄影机运动】\n缓慢平稳地推近，并略微上移，速度均匀，无抖动。同时飞行员上身向镜头前倾，到 0:03.5 时脸宽从约 23% 放大到约 40% 画宽。显示屏和亮窗退出或变暗。\n\n【动作时序】\n0:00 至 0:00.4，静止。\n0:00.4 至 0:03.2，平静地说话，只说这句台词：“[LINE]”。\n0:03.2 至 0:04，闭嘴，目光盯住下方。\n\n【统一影调】\n暖黑色为主，一道暖光，一点绿色显示屏光。\n\n【灯光与曝光】\n昏暗的座舱。一道斜向的暖光带横过眼睛和面颊，额头和另一侧脸沉在深阴影中，光带随飞行器转向缓慢移动。眼中有一点小高光。没有补光。曝光目标：平均约 24%，暗部约 6%，高光约 62%。\n\n【声音】\n贴近的人声和低沉的座舱声。语气不变。没有音乐，没有多余的词。\n\n【空气与空间】\n内景·座舱。空间压迫，随推近进一步变窄。\n\n【成像质感】\n写实三维动画电影。低调，暗部有层次，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@PILOT：[PILOT_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n不是愤怒，而是冷静地作出决定。语气平，眼神一直锁定目标。\n\n【场景空间锁定】\n飞行员坐在座椅上，只有上身前倾。目标在画右下方，不看镜头。\n\n【镜头｜13镜｜飞行员回应】\n近景推近，3.55 秒。这一镜重点是决定的时刻。镜头落点：脸占据画面中上方，目光盯住下方，一动不动。\n\n【反向限定】\n避免大喊和夸张愤怒。避免摄影机抖动。避免看镜头。避免屏幕出现可读文字。不要字幕、说明文字、标志、水印。\n```\n\n---\n\n## 第三幕：爆发\n\n### 14 镜　按下扳机\n\n原片 43.38–43.96（0.58s）｜生成 4s｜取用：约 1.5–2.1s\n\n```text\n【本场戏目的】\n整段节奏的扳机。观众必须一眼看懂：飞行员按下了开火按钮。\n\n【类型片参考】\n动作片爆发前的手部特写，极短，极干脆。\n\n【场景特效与VFX】\n按钮按下时，手腕上的红色光带略微闪动。仪表有微弱的蓝色辉光。没有粒子。\n\n【首帧与站位】\n一只手已握住画面中央的浅色操纵杆，前臂从画左进入。暗色舱内，右上角有蓝色仪表。拇指停在按钮上方。\n\n【光学与镜头】\n29° 对角视场角，手腕高度，距离约 1.5 米。焦点锐利地落在拇指上，背景融化为柔和的焦外。\n\n【摄影机运动】\n完全锁定，无任何摄影机运动。\n\n【动作时序】\n0:00 至 0:01.5，手保持不动。\n0:01.5 至 0:02.1，以真实速度，拇指略微抬起，再用力按到底。\n0:02.1 至 0:04，拇指保持按下。\n\n【统一影调】\n暖黑色背景，红色细线和蓝色仪表是仅有的色彩。\n\n【灯光与曝光】\n温暖昏暗的舱内，一条窄窄的红色光线横过手腕，手部受光柔和。这是全片最暗的镜头之一。曝光目标：平均约 21%，暗部约 5%，高光约 49%。\n\n【声音】\n一声清脆的机械咔哒。下面是持续的低频。没有音乐，没有对白。\n\n【空气与空间】\n内景·座舱。没有空气感，空间紧贴手部。\n\n【成像质感】\n写实三维动画电影。手部皮肤和袖口织物细节清晰，低调，柔和泛光。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@PILOT：[PILOT_BRIEF]，只出现袖子和手。\n\n【表演与运动风格】\n不是轻轻一点，而是决定性的一按。手腕肌腱绷紧，按钮受力下行，握把轻微弯曲。\n\n【场景空间锁定】\n只出现一只手，五根手指。手不离开操纵杆。\n\n【镜头｜14镜｜按下扳机】\n手部特写，0.6 秒。这一镜重点是决定性的一按。镜头落点：拇指按到底。\n\n【反向限定】\n避免手指数量错误或手部变形。避免摄影机运动。避免出现可读文字。不要标志、字幕、水印。\n```\n\n### 15 镜　机头上升\n\n原片 43.96–46.00（2.04s）｜生成 4s｜取用：0–2s\n\n```text\n【本场戏目的】\n机器调整攻击姿态。观众必须一眼看懂：这架飞行器开始动了。\n\n【类型片参考】\n科幻片的巨型机械低角度镜头。\n\n【场景特效与VFX】\n机身灯带是发光的白色弧线，带细小的横向星芒。雪粒被气流吹过镜头，近处是失焦的白点。\n\n【首帧与站位】\n深色机头已占据画面中央，尖端在下边缘之外，底部中央有一条发光的白色弧线。两侧地平线上是粉色山脉，保持在画面下部。\n\n【光学与镜头】\n84° 对角视场角，低机位，距机头约 5 米。机身在前景中显得庞大，无鱼眼弯曲。机身清晰，远山略微失焦。\n\n【摄影机运动】\n完全锁定，地平线和远山的位置不动，只有飞行器在动。\n\n【动作时序】\n0:00 至 0:01，飞行器快速上升后减速，白色弧线从画面底部升到画面上方。\n0:01 至 0:04，基本悬停，机头尖端露在山脉上方。\n\n【统一影调】\n冷灰金属机身，粉色和蓝灰色山脉，灰白天空。\n\n【灯光与曝光】\n明亮苍白的天空映在机身边缘。上升时机身由暗转亮，底部仍然暗。曝光目标：平均约 47%，暗部约 20%，高光约 77%。\n\n【声音】\n低沉的引擎音调上升，比上一镜更响。没有音乐，没有对白。\n\n【空气与空间】\n外景·山脉上空。远山被雾气减弱，飞雪在机身前后飘动。\n\n【成像质感】\n写实三维动画电影。金属反射真实，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@CRAFT：[CRAFT_BRIEF]，正面视图，与参考图 100% 一致。\n\n【表演与运动风格】\n沉重的钢制机身，惯性明显，上升后有细小的姿态修正。\n\n【场景空间锁定】\n飞行器在画面中线上垂直运动，不向两侧偏移。没有人物。\n\n【镜头｜15镜｜机头上升】\n正面低机位，2 秒。这一镜重点是压迫感。镜头落点：机头尖端悬停在山脉上方。\n\n【反向限定】\n避免摄影机跟随飞行器上摇。避免鱼眼变形。避免飞行器外形变化。不要文字、标志、字幕、水印。\n```\n\n### 16 镜　枪管压顶\n\n原片 46.00–47.71（1.71s）｜生成 4s｜取用：0–1.7s\n\n```text\n【本场戏目的】\n武器就在头顶。观众必须一眼看懂：枪已经对准，主角转身面对。\n\n【类型片参考】\n决斗片的最后站位，用构图表现压迫。\n\n【场景特效与VFX】\n下洗气流贴地吹雪，飞雪从多个距离掠过镜头。枪管到位时机腹有轻微震动。\n\n【首帧与站位】\n深色机腹已占满画面顶部约 15%，横贯全宽。主角已在画面中央下半部，约占画面高度 60%，背对摄影机，站在积雪的岩石上。\n\n【光学与镜头】\n84° 对角视场角，膝盖高度，距主角约 3 米。机腹在画面上方显得庞大，直线不弯曲，环境铺到边缘。\n\n【摄影机运动】\n完全锁定，无任何摄影机运动。\n\n【动作时序】\n0:00 至 0:00.3，两根枪管从机腹左右两侧放下来，炮口朝向摄影机，到位后有一次机械顿挫。\n0:00.3 至 0:01.7，主角转身面向摄影机，抬头看向枪管，斗篷慢一拍甩过来。\n0:01.7 至 0:04，保持不动。\n\n【统一影调】\n前景雪地冷蓝灰，远处高原暖粉，形成清晰的前冷后暖。\n\n【灯光与曝光】\n机腹下方的雪地在阴影中，远处高原是温暖的粉色日光。主角处于逆光。曝光目标：平均约 37%，暗部约 12%，高光约 67%。\n\n【声音】\n引擎轰鸣之上的液压伺服声，枪管到位时有一声沉重的金属锁定声。没有音乐，没有对白。\n\n【空气与空间】\n外景·雪原边缘。飞雪在机腹下方形成气流感。\n\n【成像质感】\n写实三维动画电影。枪管金属和斗篷布料都有质感，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，与参考图 100% 一致。@CRAFT：[CRAFT_BRIEF]，带机枪的底部。\n\n【表演与运动风格】\n主角转身沉稳，不慌张。枪管有沉重的机械运动。斗篷有布料重量。\n\n【场景空间锁定】\n主角站在原地转身，不后退。枪管在主角头顶上方两侧。\n\n【镜头｜16镜｜枪管压顶】\n全景低机位，1.7 秒。这一镜重点是头顶的压迫。镜头落点：主角面向摄影机，枪管在其头顶上方两侧。\n\n【反向限定】\n避免摄影机运动。避免枪管数量和形状变化。避免主角后退。不要文字、标志、字幕、水印。\n```\n\n### 17 镜　抬眼冲向镜头\n\n原片 47.71–49.38（1.67s）｜生成 4s｜取用：0–1.7s\n\n```text\n【本场戏目的】\n对峙的最后一眼。观众必须一眼看懂：主角看清楚了，然后动身。\n\n【类型片参考】\n动作片爆发前的最后一个静止镜头。\n\n【场景特效与VFX】\n飞雪朝向摄影机吹来，有失焦雪粒。主角冲出时带起一小团雪尘和碎雪。\n\n【首帧与站位】\n主角胸部以上，位于中央，正面朝向摄影机，头低垂，斗篷堆在肩颈周围。身后是虚化的雪原和粉色高原。\n\n【光学与镜头】\n47° 对角视场角，低机位，在下巴以下，距离约 1.5 米。焦点在眼睛上，背景柔和失焦。\n\n【摄影机运动】\n完全锁定，背后的雪原不动。人物变大是因为人物前倾，不是摄影机推近。无抖动。\n\n【动作时序】\n0:00 至 0:01.4，身体缓慢向摄影机前压，头保持低垂，眼睛从眉骨下向上盯着镜头上方，不眨眼。\n0:01.4 至 0:01.7，猛地俯身冲向摄影机，头顶和肩从画面下方中央穿出。\n0:01.7 至 0:04，画面中只有空雪地和横飞的雪。\n\n【统一影调】\n蓝灰色雪地，粉色高原，人物是暖褐色暗部。\n\n【灯光与曝光】\n脸在柔和的阴影中，被雪地反射光从下方微微照亮。头发有暖色轮廓光，眼中有一点小高光。曝光目标：平均约 30%，暗部约 12%，高光约 56%。\n\n【声音】\n不断上升的机械呜鸣，声音越来越紧。没有音乐，没有对白。\n\n【空气与空间】\n外景·雪原。人物身后有较深的纵深，飞雪从远到近。\n\n【成像质感】\n写实三维动画电影。眼睛和皮肤有细节，布料沉重，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n不是害怕，也不是挑衅。前压缓慢，爆发突然，冲出时有明显的蹬地发力。斗篷在肩膀运动后才摆动。\n\n【场景空间锁定】\n主角朝摄影机方向运动，从画面下方中央出画。\n\n【镜头｜17镜｜抬眼冲向镜头】\n低机位近景，1.7 秒。这一镜重点是静止到爆发的反差。镜头落点：人已出画，雪地上飞雪横扫。\n\n【反向限定】\n避免摄影机推近或抖动。避免主角向左右两侧出画。避免眨眼。不要文字、标志、字幕、水印。\n```\n\n### 18 镜　枪管开火\n\n原片 49.38–49.83（0.46s）｜生成 4s｜取用：约 3.55–4s｜后期：闪光不理想时用素材叠加\n\n```text\n【本场戏目的】\n枪声响起。观众必须一眼看懂：开火了。\n\n【类型片参考】\n战争动作片的重武器正面镜头。\n\n【场景特效与VFX】\n枪管旋转产生运动模糊。雪花高速掠过。枪口闪光是橙黄色的强光，迅速吞没整个画面，变成过曝的暖白色。\n\n【首帧与站位】\n严格左右对称。一段垂直机身居中，向下延伸到画面约 85% 的高度。左右各一挺旋转机枪，炮口朝向摄影机，支臂伸向两侧。下方是粉色云层。\n\n【光学与镜头】\n47° 对角视场角，与枪管同高。枪管清晰，云层略微失焦。\n\n【摄影机运动】\n机位不移动，带强烈的冲击震动和约 2 度的来回滚转。是有重量的震动，不是高频数字抖动。这是全片第一次出现抖动。\n\n【动作时序】\n0:00 至 0:03.5，枪管从慢到快，加速到完全模糊。\n0:03.5 至 0:03.85，枪管全速旋转，机身颤动。\n0:03.85 至 0:04，枪口闪光爆开。\n\n【统一影调】\n冷灰金属，粉色云层，橙黄色枪火第一次进入画面。\n\n【灯光与曝光】\n明亮苍白的天空，机身边缘有冷色高光。枪口闪光是瞬时主光，把机身照成橙色。曝光目标：平均约 58%，暗部约 29%，高光约 86%，闪光瞬间允许过曝。\n\n【声音】\n快速上升的电机呜鸣，然后枪声爆响。这是到此为止最响的一刻。没有音乐，没有对白。\n\n【空气与空间】\n高空，云层在下方，雾气较厚。\n\n【成像质感】\n写实三维动画电影。金属和枪管细节清晰，闪光有柔和的泛光边缘。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@CRAFT：[CRAFT_BRIEF]，机腹机枪，与参考图 100% 一致。\n\n【表演与运动风格】\n沉重的钢制枪管有明显的旋转惯性，后坐力带动机身颤动。\n\n【场景空间锁定】\n飞行器悬停不动，枪管指向摄影机。没有人物。\n\n【镜头｜18镜｜枪管开火】\n枪管正面，0.45 秒。这一镜重点是第一声枪响。镜头落点：闪光使全画面过曝。\n\n【反向限定】\n避免构图不对称。避免枪管数量变化。避免枪火变成蓝绿色或激光。不要文字、标志、字幕、水印。\n```\n\n### 19 镜　侧面枪管\n\n原片 49.83–50.46（0.62s）｜生成 4s｜取用：约 0.45–1.1s｜后期：闪光不理想时用素材叠加\n\n```text\n【本场戏目的】\n强化火力。观众必须一眼看懂：枪在持续开火，火力很猛。\n\n【类型片参考】\n战争片的机载武器侧面镜头。\n\n【场景特效与VFX】\n枪口闪光是橙黄色火焰，占据画面左半部，每次只有一两帧，瞬间亮起又消失。枪管上拖着薄烟并模糊旋转。飞雪掠过。\n\n【首帧与站位】\n机身从右上方进入，枪管指向画左，枪尖接近画面中央，上方有尖锐翼片。左下是深色雪山，下方是粉色高原。\n\n【光学与镜头】\n47° 对角视场角，摄影机绑定在机身上。枪管清晰，背景略微失焦。\n\n【摄影机运动】\n机身和枪管在画面中基本不动，只随后坐力剧烈震动。背景的雪山和高原向画右滑动，每秒约三分之一画宽，雪山逐渐变大。\n\n【动作时序】\n0:00 至 0:04，枪管全速旋转。0:00.5、0:01.0、0:01.5、0:02 左右，各有一次枪口闪光。\n\n【统一影调】\n灰粉和蓝紫灰为底，开火瞬间加入饱和的橙色。\n\n【灯光与曝光】\n柔和的低位太阳。金属上有暖粉色反光，机身下方是深色阴影。闪光瞬间把枪管和雪山照成橙红色。曝光目标：平均约 53%，暗部约 20%，高光约 80%。\n\n【声音】\n持续的猛烈枪声，和上一镜一样响。没有音乐，没有对白。\n\n【空气与空间】\n高空，下方是广阔的高原，有空气透视。\n\n【成像质感】\n写实三维动画电影。金属有细节，枪烟半透明，柔和泛光。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@CRAFT：[CRAFT_BRIEF]，机枪侧面和翼片，与参考图 100% 一致。\n\n【表演与运动风格】\n后坐力带动整架飞行器颤动，是沉重的机械冲击。\n\n【场景空间锁定】\n枪口始终指向画左下方。没有人物。\n\n【镜头｜19镜｜侧面枪管】\n枪管侧面，0.6 秒。这一镜重点是火力。镜头落点：枪管仍在旋转。\n\n【反向限定】\n避免枪管在画面中大幅移动。避免闪光持续太长。避免枪火变成激光。不要文字、标志、字幕、水印。\n```\n\n### 20 镜　高速追射\n\n原片 50.46–51.46（1.00s）｜生成 4s｜取用：0–1s｜后期：曳光弹可加强\n\n```text\n【本场戏目的】\n火力追着人跑。观众必须一眼看懂：主角只差半步就被打中。\n\n【类型片参考】\n动作片的高速空中追逐镜头。\n\n【场景特效与VFX】\n橙黄色曳光弹是一条细而亮的直线。弹着点依次爆开雪块和细粉，连成一条线。雪墙占满画面左半部，边缘有飞散的雪块，高光过曝成暖白色。主角背部被火光映成橙黄色。\n\n【首帧与站位】\n主角已在画面右上方三分之一处，约占画面高度 15%，背对摄影机，朝画面右上方奔跑，斗篷拖向画左。雪坡倾斜着填满画面。弹着点已在画面左半部撕开雪地。\n\n【光学与镜头】\n84° 对角视场角，高角度斜俯拍，倾斜构图。环境铺到边缘，四周有方向性运动模糊，人物相对清晰。\n\n【摄影机运动】\n摄影机追着主角向右上方高速飞行，并持续逼近。背景向左下方流动，前半秒下移很快，之后减弱，画面每秒放大约 10%。带强烈冲击震动和轻微滚转。\n\n【动作时序】\n0:00 至 0:00.5，主角全力奔跑，曳光弹从画左飞来，弹着点沿直线追向主角。\n0:00.5 至 0:01，弹着点追到脚后，掀起巨大的雪墙。\n0:01 至 0:04，主角继续奔跑，雪块在重力下回落。\n\n【统一影调】\n白色雪浪偏暖，蓝灰色阴影，橙色火光。\n\n【灯光与曝光】\n雾蒙蒙的逆光。雪面高光接近白色并偏暖，枪火的橙光打在主角背上。这是全段最亮的镜头之一。曝光目标：平均约 71%，暗部约 48%，高光约 88%。\n\n【声音】\n枪声和雪地弹着声。高频的碎裂感更多。没有音乐，没有对白。\n\n【空气与空间】\n空气中充满飞雪和粉尘，粉尘在后续镜头中保留。\n\n【成像质感】\n写实三维动画电影。雪块和粉尘有体积感，有方向性运动模糊，柔和泛光。\n\n【资产绑定】\n@FIRST：首帧。@HERO：[HERO_BRIEF]，小人影，与参考图 100% 一致。\n\n【表演与运动风格】\n奔跑时每一步都真实踩实雪地。雪块先向上爆开，再受重力下落，不是烟花式粒子。\n\n【场景空间锁定】\n主角朝画面右上方跑，弹着点从画左追来。主角保持在画面右上方。\n\n【镜头｜20镜｜高速追射】\n高角度跟拍，1 秒。这一镜重点是只差半步。镜头落点：雪墙占满画面大部分，主角的身影仍隐约可见。\n\n【反向限定】\n避免主角被直接击中。避免奔跑发飘。避免粒子遮到看不出主角。避免变成正面视角。不要文字、标志、字幕、水印。\n```\n\n### 21 镜　地面看机身开火\n\n原片 51.46–51.96（0.50s）｜生成 4s｜取用：任选 0.5s｜后期：枪火逐帧频闪\n\n```text\n【本场戏目的】\n退到地面看一眼全局。观众必须一眼看懂：机器悬在那里，一直在开火。\n\n【类型片参考】\n战争片的地面仰望重火力镜头。\n\n【场景特效与VFX】\n机身下方有明亮的橙黄色火焰，快速明暗频闪，照亮机身底部。黑色烟尘从机身下方垂落。一道曳光弹射向画右地面，地面升起粉尘和碎石，逐渐遮住大半画面。飞雪横穿画面。\n\n【首帧与站位】\n飞行器已占据画面上方三分之一，机身在中央，一侧支臂伸向画左。下半部是平坦的雪原，右侧已有雪尘。\n\n【光学与镜头】\n47° 对角视场角，摄影机距雪面约 1 米。飞行器和前景雪地都能读清，无鱼眼感。\n\n【摄影机运动】\n机位不移动，略微向左摇，每秒约 15% 画宽，带强烈冲击震动。\n\n【动作时序】\n0:00 至 0:04，飞行器保持位置，持续向下开火，弹着点在画右地面上。\n\n【统一影调】\n灰白雾天，粉色雪地，橙黄色枪火是唯一的饱和色。\n\n【灯光与曝光】\n灰色的雾天。枪火是画面中最暖、最亮的光，核心过曝。曝光目标：平均约 64%，暗部约 38%，高光约 90%。\n\n【声音】\n枪声和近处的弹着声。声音非常响。没有音乐，没有对白。\n\n【空气与空间】\n粉尘悬浮在雪原上方，飞行器后面是厚重的雾。\n\n【成像质感】\n写实三维动画电影。火焰和烟尘有体积感，柔和泛光。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@CRAFT：[CRAFT_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n碎屑受重力升起又落下，粉尘飘向画右。\n\n【场景空间锁定】\n飞行器悬停在画面上方。弹着点在画右地面。没有人物。\n\n【镜头｜21镜｜地面看机身开火】\n地面全景，0.5 秒。这一镜重点是持续开火的全局。镜头落点：粉尘遮住大半画面，枪火还在闪。\n\n【反向限定】\n避免飞行器坠毁或被击中。避免爆炸像游戏特效。避免枪火变色。不要文字、标志、字幕、水印。\n```\n\n### 22 镜　侧面奔跑\n\n原片 51.96–53.17（1.21s）｜生成 4s｜取用：0–1.2s｜后期：曳光弹可加强\n\n```text\n【本场戏目的】\n看清主角的奔跑形体。观众必须一眼看懂：主角在拼命跑，但跑得有力，不慌乱。\n\n【类型片参考】\n动作片的侧面跟拍奔跑，强调身体力量和斗篷的长线条。\n\n【场景特效与VFX】\n靴子每一步都炸开雪块和细粉。画右和身后翻滚着粉尘。一道亮黄色曳光弹从右下飞过。飞雪掠过。\n\n【首帧与站位】\n主角已在画面中，3/4 背面，朝画面左后方奔跑，斗篷水平拖向画右。前景是蓝灰色雪地，后面是粉色高原，画右是爆开的雪尘。\n\n【光学与镜头】\n47° 对角视场角，髋部高度，距离约 6 米。背景有水平运动模糊，主角相对清晰。\n\n【摄影机运动】\n摄影机向画左高速跟拍，开始时背景每秒向右流过约四分之一画宽，然后明显减速，跟不上主角。带强烈肩扛式震动和轻微滚转。人物大小在画面高度 35% 到 60% 之间变化。\n\n【动作时序】\n0:00 至 0:00.8，全速冲刺，步幅很大，躯干前倾，手臂反向摆动。\n0:00.8 至 0:01.2，曳光弹从右下朝主角飞来，擦过身后。\n0:01.2 至 0:04，继续跑向画左。\n\n【统一影调】\n蓝灰色雪地，粉色高原，斗篷边缘透出橙色。\n\n【灯光与曝光】\n来自画右的侧逆光。主角在暗部，带暖色边缘光，身后爆炸的暖光映在背上和斗篷上。曝光目标：平均约 50%，暗部约 27%，高光约 72%。\n\n【声音】\n奔跑脚步、呼吸和弹着声。枪声退到背景。没有音乐，没有对白。\n\n【空气与空间】\n外景·开阔雪原。粉尘留在空气中，远处高原仍可见。\n\n【成像质感】\n写实三维动画电影。斗篷和雪块有运动模糊，主角身形要读得出来，柔和泛光。\n\n【资产绑定】\n@FIRST：首帧。@HERO：[HERO_BRIEF]，全身，斗篷与参考图 100% 一致。\n\n【表演与运动风格】\n不是漂浮的 CG 跑步。每一步都有真实的地面接触和体重，膝盖抬起，脚下有反作用力，步幅有变化。斗篷有沉重的布料延迟。\n\n【场景空间锁定】\n主角始终朝画左奔跑。这个方向和上一个奔跑镜头相反，是有意的。弹着点在身后的画右。\n\n【镜头｜22镜｜侧面奔跑】\n全身跟拍，1.2 秒。这一镜重点是奔跑的力量和斗篷的线条。镜头落点：主角继续跑向画左，身后粉尘翻滚。\n\n【反向限定】\n避免奔跑发飘、滑步。避免全身同步启动、同步停止。避免主角被击中。不要文字、标志、字幕、水印。\n```\n\n### 23 镜　正面狂奔\n\n原片 53.17–54.46（1.29s）｜生成 4s｜取用：任选 1.3s\n\n```text\n【本场戏目的】\n贴到人身上，让观众感受呼吸和力量。\n\n【类型片参考】\n纪录式手持的贴身奔跑镜头。\n\n【场景特效与VFX】\n雪花高速掠过，有方向性拖影。身边有飞散的雪粉。\n\n【首帧与站位】\n主角腰部以上已在画面中，身体朝向摄影机，目光看向画左。一只手臂抬起，靠近画面左边缘。背景接近全白。\n\n【光学与镜头】\n47° 对角视场角，距离约 2 米。手臂和手有运动模糊，脸相对清晰。\n\n【摄影机运动】\n摄影机以奔跑速度后退，是奔跑中摄影师的强烈手持：每一步都有真实颠簸和来回滚转，重新构图并不完美，人物时常偏离中央，有时部分出画。不是高频数字抖动。\n\n【动作时序】\n0:00 至 0:04，主角拼命奔跑，手臂大幅摆动并掠过前景，肩膀与步伐反向扭转，头部颠簸，牙关紧咬。\n\n【统一影调】\n白粉色背景，灰紫色人物，全片饱和度最低的镜头之一。\n\n【灯光与曝光】\n高调。背景过曝成柔和的白粉色，主角身体落入灰紫色阴影，脸有一半隐没在阴影中。没有正面补光。曝光目标：平均约 62%，暗部约 19%，高光约 92%，亮部允许接近全白。\n\n【声音】\n沉重的呼吸、布料声和闷闷的枪声。没有音乐，没有对白。\n\n【空气与空间】\n背景完全被雪雾吞没，没有地理信息。\n\n【成像质感】\n写实三维动画电影。强烈泛光，运动模糊明显，但脸的结构要能读清。\n\n【资产绑定】\n@FIRST：首帧。@HERO：[HERO_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n每一次落脚都有一股冲击传到肩膀和头部。头发和布料延迟跟随。表情是用力，不是恐惧。\n\n【场景空间锁定】\n主角朝摄影机方向跑，摄影机保持约 2 米距离。不看镜头。\n\n【镜头｜23镜｜正面狂奔】\n中近景手持，1.3 秒。这一镜重点是贴身的力量。镜头落点：一只手臂猛地挥向画左前景。\n\n【反向限定】\n避免稳定器式的平滑运动。避免数字抖动。避免背景出现清晰地貌。避免脸部变形。不要文字、标志、字幕、水印。\n```\n\n### 24 镜　剪影遮黑（4 帧）\n\n原片 54.46–54.62（0.17s）｜**建议直接后期手工做**：把 23 或 25 镜的主角剪影放大，划过画面，第 3–4 帧基本全黑。想要素材就用下面这条，只取最接近镜头的 4 帧。\n\n```text\n【本场戏目的】\n用画面内的遮挡完成转场。\n\n【类型片参考】\n动作片的贴身遮挡转场。\n\n【场景特效与VFX】\n人影有强烈的运动模糊。雪粒被带动，在明亮背景前飞散。\n\n【首帧与站位】\n斗篷和抬起的手臂组成的黑色锯齿状剪影，已占据画面左半部。其余可见雪地和粉色高原。\n\n【光学与镜头】\n84° 对角视场角，腰部高度，奔跑者从距镜头 30 厘米以内经过。背景清晰，剪影因距离太近而失焦。\n\n【摄影机运动】\n摄影机固定，只有轻微的冲击震动。\n\n【动作时序】\n0:00 至 0:02，人影穿向画右，直到纯黑填满整个画面。\n0:02 至 0:04，黑色从右上角开始退去。\n\n【统一影调】\n纯黑剪影，背后是灰粉和蓝灰。\n\n【灯光与曝光】\n人影没有补光，是明亮雾天前的纯黑形状。曝光目标：黑色部分接近 0%，背景约 60%。\n\n【声音】\n一声短促的呼啸。没有音乐，没有对白。\n\n【空气与空间】\n远处是开阔雪原，有飞雪。\n\n【成像质感】\n写实三维动画电影，强烈运动模糊。\n\n【资产绑定】\n@HERO：[HERO_BRIEF]，只看剪影和斗篷形状。\n\n【表演与运动风格】\n人物全速掠过，只有身体轮廓和斗篷边缘可见。\n\n【场景空间锁定】\n人影贴着镜头从左向右经过。画面中只有一人。\n\n【镜头｜24镜｜剪影遮黑】\n极短遮挡，4 帧。这一镜重点是黑色遮挡。镜头落点：接近全黑。\n\n【反向限定】\n避免看清人物细节。避免淡入淡出。不要文字、标志、字幕、水印。\n```\n\n### 25 镜　背影与爆炸白场\n\n原片 54.62–55.54（0.92s）｜生成 4s｜取用：0–0.9s｜后期：最后 3 帧白场可加强\n\n```text\n【本场戏目的】\n一切被光吞没。观众必须一眼看懂：主角没能跑出爆炸。\n\n【类型片参考】\n灾难片的爆炸吞没镜头，以光作为转场。\n\n【场景特效与VFX】\n暖光从主角前方升起。大量橙色粉尘和碎屑从画面左上和两侧向后飞散。靴子踢起雪块。最后光芒膨胀成过曝的白场。\n\n【首帧与站位】\n主角已在画面中央，背对摄影机，朝远处奔跑，膝盖到头部入画，头几乎顶出画面上方。底部是雪地边缘。\n\n【光学与镜头】\n84° 对角视场角，低机位仰视，距雪面约 1 米。主角逐渐变小，地面从近到远都可读。\n\n【摄影机运动】\n摄影机不跟，停在原地，只有爆炸带来的强烈震动。主角自己跑远，所以在画面中变小。\n\n【动作时序】\n0:00 至 0:00.6，主角跑远到全身入画，约占画面高度 50%。\n0:00.6 至 0:00.75，主角变成橙色剪影，双臂被气浪掀得略微张开。\n0:00.75 至 0:00.9，光吞没画面。\n0:00.9 至 0:04，全画面保持暖桃色白场。\n\n【统一影调】\n全片饱和度最高。暖橙和桃色，从白灰转向暖白。\n\n【灯光与曝光】\n光来自主角前方，摄影机在主角的阴影一侧。主角从深色变成橙色剪影。结尾是暖色过曝，不是冷白。曝光目标：平均约 70%，暗部约 47%，高光约 87%，结尾全面过曝。\n\n【声音】\n奔跑脚步声，然后是一声低沉的爆炸，声音压到近乎耳鸣。没有音乐，没有对白。\n\n【空气与空间】\n空气中充满粉尘和热浪，地貌被光和尘吞没。\n\n【成像质感】\n写实三维动画电影。粉尘有体积感，强烈泛光，低对比。\n\n【资产绑定】\n@FIRST：首帧。@HERO：[HERO_BRIEF]，背面，与参考图 100% 一致。\n\n【表演与运动风格】\n冲击波在光到来之前，就把粉尘和雪吹过主角身边。主角身体被气浪推动，失去平衡。\n\n【场景空间锁定】\n主角朝远离摄影机的方向跑，保持在画面中线附近。\n\n【镜头｜25镜｜背影与爆炸白场】\n背面低机位，0.9 秒。这一镜重点是被光吞没。镜头落点：全画面是暖桃色的过曝白场。\n\n【反向限定】\n避免摄影机跟随主角。避免冷白色或蓝色爆炸。避免爆炸像游戏粒子。不要文字、标志、字幕、水印。\n```\n\n---\n\n## 第四幕：坠落\n\n### 26 镜　俯拍坠落\n\n原片 55.54–58.88（3.33s）｜生成 4s｜取用：0–3.35s｜后期：径向模糊和边缘色差可加强\n\n```text\n【本场戏目的】\n局面失控。观众必须一眼看懂：主角被抛上高空，正在坠落。\n\n【类型片参考】\n太空灾难片式的失控坠落，垂直视角，天地翻转。\n\n【场景特效与VFX】\n中段是强烈的放射状速度线，地面拉成条纹。边缘有红青色色差。结尾有一片粉色尘云在主角身下扩散。\n\n【首帧与站位】\n主角已在画面中央偏上，约占画面高度 40%，背部朝向摄影机，四肢张开，头朝画面上方。很远的下方是苍白的雪和粉色岩石。\n\n【光学与镜头】\n84° 对角视场角，摄影机在主角正上方，真正 90 度垂直向下看。环境铺到边缘。画面中心清晰，四周有放射状模糊和红青色色差。\n\n【摄影机运动】\n摄影机跟随主角下落，但比主角慢，所以主角变小。\n0:00 至 0:00.8，地面向画面上方流动，几乎不放大。\n0:00.8 至 0:02.5，地面加速冲上来，向上流动，同时每秒约放大 40%。\n0:02.5 至 0:03.35，地面流动方向反转为向下，放大达到最强，带抖动。\n\n【动作时序】\n0:00 至 0:00.8，身体缓慢旋转，斗篷向上掀起。\n0:00.8 至 0:02.5，主角缩小到约占画面高度 5%。\n0:02.5 至 0:03.35，身下扩散出粉色粉尘，主角重新变大，四肢张开的形状可辨认。\n0:03.35 至 0:04，继续下落。\n\n【统一影调】\n苍白的雪，粉色岩石，蓝灰阴影，低对比。\n\n【灯光与曝光】\n来自上方和后方的柔和天光，没有强烈的太阳光。曝光目标：平均约 56%，暗部约 39%，高光约 73%，对比很低。\n\n【声音】\n呼啸的气流，耳鸣般的单音。这是全片最响的段落之一，低频很重。没有音乐，没有对白。\n\n【空气与空间】\n高空，地面很远，有层层雾气，强调垂直高度。\n\n【成像质感】\n写实三维动画电影。运动模糊呈放射状，色差明显，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧。@HERO：[HERO_BRIEF]，背面，与参考图 100% 一致。\n\n【表演与运动风格】\n真实的重力速度，四肢顶着气流有阻力，没有控制动作。不是飞翔，不是跳伞。斗篷沉重地翻飞。\n\n【场景空间锁定】\n主角保持在画面中央附近。摄影机始终在主角正上方。\n\n【镜头｜26镜｜俯拍坠落】\n垂直俯拍，3.35 秒。这一镜重点是失控和高度。镜头落点：人在粉色粉尘上方，四肢张开。\n\n【反向限定】\n避免垂直视角变成斜角。避免飞翔或跳伞姿势。避免无人机式平滑运动。不要文字、标志、字幕、水印。\n```\n\n### 27 镜　飞行员失神\n\n原片 58.88–59.62（0.75s）｜生成 4s｜取用：0–0.75s\n\n```text\n【本场戏目的】\n飞行员的第一次情绪波动。观众必须一眼看懂：这不是飞行员预想的结果。\n\n【类型片参考】\n心理片的反应镜头，用失焦表现心里的晃动。\n\n【场景特效与VFX】\n舱罩上有柔和的玻璃反光和细小的光斑。前景有一片失焦的亮光掠过。没有粒子。\n\n【首帧与站位】\n飞行员已在中央偏右，胸部以上，3/4 侧面朝向画左，目光透过舱罩向下看向画左，嘴唇微张。舱罩边框斜穿画左，后方是座椅。\n\n【光学与镜头】\n29° 对角视场角，距离约 3 米，特写靠焦距实现。焦点落在眼睛上，背景被压缩并虚化。\n\n【摄影机运动】\n相对座舱几乎固定，只有极慢的横向漂移，人物略微移向画左。焦点运动：0:00.35 焦点滑开，整个画面虚掉；0:00.45 立刻回到脸上。\n\n【动作时序】\n0:00 至 0:00.75，眼睛略微睁大，头缓慢向画左转动一点。\n0:00.75 至 0:04，保持看向窗外。\n\n【统一影调】\n暖粉色日光，深色制服。\n\n【灯光与曝光】\n柔和温暖的粉色日光透过舱罩照在脸上。深色制服落入阴影，舱罩边框上有小小的冷色反光。曝光目标：平均约 35%，暗部约 13%，高光约 67%。\n\n【声音】\n所有声音变闷，只有座舱低鸣。比上一镜明显更安静。没有音乐，没有对白。\n\n【空气与空间】\n内景·座舱。窗外是明亮的高空。\n\n【成像质感】\n写实三维动画电影。皮肤细腻，低对比，柔和泛光。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@PILOT：[PILOT_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n不是惊恐大叫，只是一瞬间的失神，动作极小。\n\n【场景空间锁定】\n飞行员坐在座椅上。目标在窗外画左下方。\n\n【镜头｜27镜｜飞行员失神】\n近景侧面，0.75 秒。这一镜重点是焦点的滑开和回来。镜头落点：焦点回到脸上，目光看向窗外。\n\n【反向限定】\n避免喊叫和夸张的惊恐。避免看镜头。避免长时间失焦。不要文字、标志、字幕、水印。\n```\n\n### 28 镜　飞行器掠过\n\n原片 59.62–61.79（2.17s）｜生成 4s｜取用：0–2.2s｜后期：白闪可加强\n\n```text\n【本场戏目的】\n决定已经做出，机器开始行动。观众必须一眼看懂：飞行器全速追了过去。\n\n【类型片参考】\n航空动作片的低空掠过镜头。\n\n【场景特效与VFX】\n环形推进器发出强烈的青蓝色光。气流把雪从山峰上卷起。飞行器掠过时，推进器的强光让画面短暂过曝成白色，约 0.2 秒。最后画面因气流抖动而模糊。\n\n【首帧与站位】\n飞行器已在画面上半部中央偏左，两侧环形推进器在左右边缘。下半部是被照成橙色的岩峰。\n\n【光学与镜头】\n84° 对角视场角，低角度从下方拍摄。飞行器逼近时在前景中显得庞大，直线不弯曲。边缘有轻微色差。\n\n【摄影机运动】\n几乎不横摇，持续向飞行器推近，每秒放大从 10% 增加到约 28%。同时摄影机侧倾，山脊右端逐渐抬高约 10 度。不是甩镜，山脊始终留在画面下部。\n\n【动作时序】\n0:00 至 0:01.6，飞行器缓慢转动机头朝向左下方，推进器环随之转动，并不断变大，到占满画面上半部。\n0:01.6 至 0:01.85，机身冲过摄影机上方。\n0:01.85 至 0:02.2，一片机翼从画左掠过并离开。\n0:02.2 至 0:04，飞行器已飞走，山脊在气流中抖动。\n\n【统一影调】\n灰粉色机身，橙色岩石，青色推进器是唯一的冷色点缀。\n\n【灯光与曝光】\n明亮的雾蒙蒙天空。低位太阳把岩石照成橙色，机身带灰粉色反光。曝光目标：平均约 56%，暗部约 32%，高光约 85%。\n\n【声音】\n推进器轰鸣涌起，掠过时达到最响。没有音乐，没有对白。\n\n【空气与空间】\n外景·雪山上空。雾气厚重，气流可见。\n\n【成像质感】\n写实三维动画电影。金属和推进器细节丰富，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@CRAFT：[CRAFT_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n沉重的飞行器带着惯性转向，不是灵巧的无人机。\n\n【场景空间锁定】\n飞行器从摄影机前上方飞向后方。山脊固定在画面下部。没有人物。\n\n【镜头｜28镜｜飞行器掠过】\n低角度，2.2 秒。这一镜重点是全速追出。镜头落点：飞行器已飞走，画面中是抖动模糊的山脊和橙色岩石。\n\n【反向限定】\n避免变成甩镜或横摇。避免山脊离开画面。避免飞行器外形变化。不要文字、标志、字幕、水印。\n```\n\n### 29 镜　座舱侧面\n\n原片 61.79–62.67（0.88s）｜生成 4s｜取用：任选 0.9s\n\n```text\n【本场戏目的】\n全力驾驶。观众必须一眼看懂：飞行员在全神贯注地追。\n\n【类型片参考】\n航空片的驾驶舱侧面镜头，舱内稳定，舱外飞驰。\n\n【场景特效与VFX】\n窗外的橙色岩石和苍白天空倾斜着从右向左高速掠过，有强烈运动模糊。舱罩玻璃上有反光和光斑。右下前景有失焦的红色光斑。\n\n【首帧与站位】\n飞行员已在画面右侧，腰部以上，侧面朝向画左，手臂向画左下方伸出，握住操纵杆。画左是舱罩和控制台。\n\n【光学与镜头】\n84° 对角视场角，摄影机位于舱内，距飞行员约 1.2 米。舱内环境可见，边缘略微虚化。\n\n【摄影机运动】\n缓慢推近，每秒放大约 8%，并略微向左摇，人物略微变大并移向画右。无抖动。窗外景物才是高速运动的部分。\n\n【动作时序】\n0:00 至 0:04，飞行器转弯，身体压向安全带，头发随之摆动，下巴抬起，目光追着窗外的目标。\n\n【统一影调】\n窗外橙粉色，舱内深色，有青白色仪表光。\n\n【灯光与曝光】\n外面明亮，里面昏暗。脸上有柔和的窗外光和闪动的暖色反光。深色制服落入阴影。曝光目标：平均约 39%，暗部约 10%，高光约 75%。\n\n【声音】\n座舱低鸣和呼啸的风，声音很响。没有音乐，没有对白。\n\n【空气与空间】\n内景·座舱。窗外是飞速掠过的山脉。\n\n【成像质感】\n写实三维动画电影。舱内材质清晰，窗外模糊，柔和泛光，轻微暗角。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@PILOT：[PILOT_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n身体受到真实的离心力。动作利落，神情专注。\n\n【场景空间锁定】\n飞行员坐在座椅上，手握操纵杆，手不离开。目标在窗外画左。\n\n【镜头｜29镜｜座舱侧面】\n座舱侧面中景，0.9 秒。这一镜重点是舱内稳定、舱外飞驰。镜头落点：飞行员目光锁定窗外。\n\n【反向限定】\n避免飞行员朝向画右。避免舱内剧烈抖动。避免手部变形。不要文字、标志、字幕、水印。\n```\n\n### 30 镜　翻滚逼近镜头\n\n原片 62.67–64.75（2.08s）｜生成 4s｜取用：0–2.1s｜**导出第 2.1 秒的帧，给 31 镜 A 做首帧**\n\n```text\n【本场戏目的】\n跟主角一起掉下去。观众必须一眼看懂：主角完全失控地翻滚着。\n\n【类型片参考】\n空中灾难动作片的翻滚跟拍，一个连续运动。\n\n【场景特效与VFX】\n岩石和雪面拉出运动模糊。发丝和斗篷边缘有细小的雪粉甩出。结尾太阳在主角身后形成强烈的逆光眩光。\n\n【首帧与站位】\n主角已在中上方，约占画面高度 10%，蜷缩着，下方是深色岩石和被照成粉色的雪。摄影机向下看着主角。\n\n【光学与镜头】\n84° 对角视场角，全程不变，无鱼眼弯曲。主角靠近时显得庞大。地面有方向性运动模糊。\n\n【摄影机运动】\n一个连续运动，没有剪辑。\n0:00 至 0:01，摄影机向下俯视，下落得比主角更快，迅速追上主角。\n0:01 至 0:01.6，摄影机擦着主角向画左掠过，主角滑向画右。\n0:01.6 至 0:02.1，摄影机翻转到主角下方，转为仰视。\n\n【动作时序】\n0:00 至 0:01，主角从约 10% 放大到占满大半个画面，头发和斗篷成为一团翻滚的黑影。\n0:01 至 0:01.6，四肢张开，身后的地面模糊。\n0:01.6 至 0:02.1，主角成为衬在白色天空上的剪影，位于画面上方，雪山脊线在下方。\n0:02.1 至 0:04，继续下坠。\n\n【统一影调】\n岩石上有粉色受光，蓝紫阴影，结尾是白粉色天空。\n\n【灯光与曝光】\n开始是柔和的顶光，主角接近剪影。结尾太阳使天空过曝，身体没有补光。曝光目标：平均约 40%，暗部约 15%，高光约 75%，结尾天空过曝。\n\n【声音】\n气流呼啸而过，随主角靠近而增强，贴脸时最响。没有音乐，没有对白。\n\n【空气与空间】\n高空下坠，地面越来越近，雾气减少。\n\n【成像质感】\n写实三维动画电影。头发和斗篷有动态细节，运动模糊明显，柔和泛光。\n\n【资产绑定】\n@FIRST：首帧。@HERO：[HERO_BRIEF]，蜷缩的身体和斗篷，与参考图 100% 一致。\n\n【表演与运动风格】\n身体带着真实的质量旋转，毫无控制。头发和斗篷逆着旋转甩动。\n\n【场景空间锁定】\n主角始终在下坠，下方是岩石山坡。画面中只有一人。\n\n【镜头｜30镜｜翻滚逼近镜头】\n连续翻转，2.1 秒。这一镜重点是贴近主角翻滚。镜头落点：主角是过曝天空前的黑色剪影。\n\n【反向限定】\n避免中途硬切。避免摄影机停下。避免主角做出控制动作。不要文字、标志、字幕、水印。\n```\n\n### 31 镜 A　贴坡下坠，冲向岩壁\n\n原片 64.75–约 66.8（约 2s）｜生成 4s｜取用：0–2.1s｜首帧用 30 镜导出的帧｜**导出第 2.1 秒的帧，给 31 镜 B 做首帧**\n\n```text\n【本场戏目的】\n越来越接近地面。观众必须一眼看懂：主角正冲向岩壁，情况越来越危险。\n\n【类型片参考】\n极限运动视角的贴坡俯冲，有强烈的速度感。\n\n【场景特效与VFX】\n岩壁有快速的运动模糊。雪痕被拉成线条。雪粉沿岩壁飞散。\n\n【首帧与站位】\n主角已在画面顶部中央，是四肢张开的黑色剪影，衬在过曝的白色天空上。雪脊位于画面低处。\n\n【光学与镜头】\n84° 对角视场角，全程不变，无鱼眼弯曲。边缘有运动模糊。\n\n【摄影机运动】\n一个连续运动，没有剪辑。\n0:00 至 0:01，摄影机继续下落并滚转约 30 度，雪坡变成陡峭的对角线。\n0:01 至 0:02.1，高速飞向岩壁，背景向画右和画面上方快速流动，带强烈震动。\n\n【动作时序】\n0:00 至 0:01，主角翻滚下落，在坡前变小，到画面中部。\n0:01 至 0:01.7，深色岩壁冲入画面，主角接近岩壁表面。\n0:01.7 至 0:02.1，岩壁填满整个画面，主角是岩壁中央的一个小点。\n0:02.1 至 0:04，继续沿岩壁下落。\n\n【统一影调】\n从高调白粉色变到黑紫色岩石和苍白雪痕，是极端的明暗转换。\n\n【灯光与曝光】\n开始过曝高调，结束低调。岩壁没有直射光，是全片最暗的时刻，不要提亮。曝光变化：从平均约 70% 降到约 15%。\n\n【声音】\n呼啸的气流，岩壁出现时音调下沉。没有音乐，没有对白。\n\n【空气与空间】\n从开阔的高空进入贴近岩壁的狭窄空间，空气感迅速消失。\n\n【成像质感】\n写实三维动画电影。岩石纹理在模糊中仍可见，柔和泛光。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@HERO：[HERO_BRIEF]，剪影和斗篷。\n\n【表演与运动风格】\n真实的重力速度。斗篷向上飘扬。主角没有控制动作。\n\n【场景空间锁定】\n主角始终在画面中部，下落方向朝向岩壁。画面中只有一人。\n\n【镜头｜31镜A｜贴坡下坠】\n连续俯冲，2.1 秒。这一镜重点是冲向黑暗。镜头落点：黑色岩壁填满画面。\n\n【反向限定】\n避免硬切。避免提亮岩壁。避免主角撞上岩壁。不要文字、标志、字幕、水印。\n```\n\n### 31 镜 B　穿出岩壁，飞行器俯冲\n\n原片 约 66.8–69.79（约 3s）｜生成 5s｜取用：0–3s｜首帧用 31 镜 A 导出的帧；同时上传换好角色的 `镜头_029` 作为结尾构图\n\n```text\n【本场戏目的】\n飞行器与下坠的人第一次同框。观众必须一眼看懂：飞行器追向主角，结局未定。\n\n【类型片参考】\n科幻史诗片的收尾大全景，以悬念结束。\n\n【场景特效与VFX】\n一束暖色眩光从岩壁边缘爆开，画面短暂过曝成粉白色。雪粉从山峰上剥落，随风飘散。飞行器机身上有温暖的光晕。\n\n【首帧与站位】\n深色岩壁填满画面，温暖的阳光在岩壁边缘发亮。主角和飞行器都还被岩壁挡住。\n\n【光学与镜头】\n84° 对角视场角，全程不变，从近到远都清晰，直线不弯曲。\n\n【摄影机运动】\n一个连续运动，没有剪辑。\n0:00 至 0:00.8，岩壁向画右滑开，完全离开画面。\n0:00.8 之后，摄影机立刻稳定，以和主角、飞行器相同的速度下落，三者在画面中的位置几乎不变，没有抖动，不推不拉。\n\n【动作时序】\n0:00 至 0:00.8，岩壁滑开。\n0:00.8 起，飞行器已在画中：中央偏右上，机头指向左下方，陡峭俯冲，约占画面宽度 45%，缓慢靠近主角。主角在机头下方、中央偏左，四肢张开，高度约占画面 5%。\n\n【统一影调】\n高调粉桃色，飞行器底部是深红褐色，是全片最明亮、最轻盈的画面。\n\n【灯光与曝光】\n太阳在画面上方偏右，飞行器顶部有温暖的眩光。主角是小小的黑色剪影。曝光目标：平均约 60%，暗部约 30%，高光约 85%，整体对比低。\n\n【声音】\n呼啸的气流和上升的飞行器引擎声，以长音结束。没有音乐，没有对白。\n\n【空气与空间】\n外景·雪山高空。雾气层层叠叠，空间极其开阔。\n\n【成像质感】\n写实三维动画电影。强烈泛光，轻微暗角，细腻颗粒。\n\n【资产绑定】\n@FIRST：首帧，构图完全一致。@END：结尾构图，飞行器和主角的位置严格参考。@HERO：[HERO_BRIEF]，极小的剪影。@CRAFT：[CRAFT_BRIEF]，与参考图 100% 一致。\n\n【表演与运动风格】\n飞行器有真实的质量，机翼轻微颤动。主角的斗篷向上飘扬。\n\n【场景空间锁定】\n飞行器在主角上方，两者都在下落，没有接触。画面中只有一人和一架飞行器。\n\n【镜头｜31镜B｜穿出岩壁】\n大全景，3 秒。这一镜重点是结尾的悬念。镜头落点：粉色大全景，飞行器仍在追，主角仍在坠落，两者没有接触。\n\n【反向限定】\n避免主角和飞行器接触、被接住或被击中。避免主角变大。避免结尾摄影机运动。避免金色或饱和的蓝天。不要文字、标志、字幕、水印。\n```\n\n---\n\n## 已知不确定的地方\n\n- **未实测：** 提示词较长，模型可能不会逐条执行。如果发现关键内容被忽略，优先保留【首帧与站位】【摄影机运动】【动作时序】【灯光与曝光】，删减其他部分。\n- **视场角、机位距离是我的选择和估算，** 不是从原片测得的，与原片不符时以首帧构图为准。\n- **类型片参考：** 我用类型描述，没有写具体片名。如果你有想对标的作品，可以直接替换。\n- **人物动机：** “要带走主角”“飞行员失神”等是我根据字幕和画面作的解读。\n- **声音：** 强弱关系来自响度测量，具体声音内容（如气流、枪声）是我的设计，因为我听不到原片。原片的低频很重，可能含有配乐，这里按你之前的要求写“没有音乐”。\n- **S31A、S31B 的曝光：** 是根据整镜测量和画面估算的。\n- **没有原片截图的镜头：** 19、21、24、27 镜的首帧构图，可参考 `资料/补充关键帧/`。","file":"data/candidates/2026-11-02-cc-02.md"},{"id":"2026-11-02-cc-03","title":"灵笼追逐 v2 交接与临摹约束","bot":"CC","date":"2026-11-02","category":"研究与课程","status":"pending","source":"agent://b919f851-ad97-42da-9b96-e58e99e652bd","reason":"汇总目标、不上传原视频／男主不要尾巴等硬约束、文件清单与实测纠正，便于回看续做","body":"# 灵笼_追逐_v2 临摹项目：对话总结与交接\n\n整理日期：2026-11-02\n\n## 1. 目标\n\n用 Seedance 临摹 `灵笼_追逐_v2.mp4`：只更换角色，导演逻辑、镜头语言和画面色调尽量 1:1 还原。所有交付物放在本文件夹。\n\n## 2. 必须遵守的约束w\n\n- **不上传原视频。** 提示词里不能引用或引导原视频（没有 @MOTION、视频标签）。原片只用于分析和自己对比。\n- 提示词用中文。\n- 只用硬切；提示词内不写制作备注、不写 IP 名；类型片参考写类型描述，不写片名。\n- 提示词里的人物不用性别代词。\n\n## 3. 当前进度\n\n- **最新交付：** `灵笼_追逐_v2_全31镜提示词_中文重写版_v2.md`。共 32 条提示词（1–30 镜、31 镜 A、31 镜 B），每条都含 17 个部分，顺序一致：\n  【本场戏目的】【类型片参考】【场景特效与VFX】【首帧与站位】【光学与镜头】【摄影机运动】【动作时序】【统一影调】【灯光与曝光】【声音】【空气与空间】【成像质感】【资产绑定】【表演与运动风格】【场景空间锁定】【镜头｜N镜｜名称】【反向限定】\n- **尚未实测：** 所有提示词都没有在 Seedance 上跑过。我没有 Seedance 权限，由用户测试后反馈。\n- **建议的第一步：** 先测 8 镜和 9 镜（一个完全锁定，一个有明显光影变化）。\n\n### 使用前要替换\n- 占位符：`[HERO_BRIEF]`、`[PILOT_BRIEF]`、`[CRAFT_BRIEF]`、`[LINE]`\n- 标签：`@FIRST`、`@HERO`、`@PILOT`、`@CRAFT`、`@END`（`@END` 只在 31 镜 B）\n- 每条都需要换好角色的首帧图\n\n### 下一步\n1. 用户测试并反馈结果，再按结果调整提示词。\n2. 如果长提示词被模型忽略，优先保留【首帧与站位】【摄影机运动】【动作时序】【灯光与曝光】。\n3. 待用户确认：【镜头｜N镜｜名称】目前写的是景别、时长、这一镜重点和镜头落点。\n\n## 4. 文件清单\n\n| 文件 | 说明 |\n|---|---|\n| `灵笼_追逐_v2.mp4` | 原片，3840×1634（约 2.35:1），24fps，69.79s，1675 帧 |\n| `灵笼_追逐_v2_镜头图片/镜头_001–029.png` | 用户的镜头图片 |\n| `提示词_参考.md` | 用户的参考写法（只读） |\n| `灵笼_追逐_v2_Seedance临摹指南.md` | 临摹指南 |\n| `灵笼_追逐_v2_全31镜提示词.md` | 英文逐镜，旧版，仍含 @MOTION 和过时的运镜描述；S07 有用户自己加的翻译 |\n| `灵笼_追逐_v2_全31镜提示词_中文翻译版.md` | 上面英文版的直译 |\n| `灵笼_追逐_v2_全片提示词_中文版.md` | 四幕分段提示词，第一节有实测运镜表 |\n| `灵笼_追逐_v2_全片提示词_中文版_v3.md` | Cinedance 四段版；上次读取后文件在磁盘上有过改动，使用前先重读 |\n| `灵笼_追逐_v2_全31镜提示词_中文重写版.md` | 逐镜重写上一版，附曝光表 |\n| `灵笼_追逐_v2_全31镜提示词_中文重写版_v2.md` | **最新版** |\n| `资料/` | 分镜总览、`分镜切片/S01–S31.mp4`、`分段切片/`、`逐镜缩略图/`、`补充关键帧/`、快剪段拼图、音频波形、对时音频 |\n\n**图片与镜头对应：** 001–018 = S01–S18；019、020 = S20；021 = S22；022 = S23；023 = S25；024 = S26；025、026 = S28；027 = S29；028 = S30；029 = S31。S19、S21、S24、S27 没有用户图片，构图可参考 `资料/补充关键帧/`。\n\n## 5. 实测结论\n\n**切点帧：** `0 84 150 221 258 340 394 485 605 671 761 840 956 1041 1055 1104 1145 1185 1196 1211 1235 1247 1276 1307 1311 1333 1413 1431 1483 1504 1554 1675`\n\n- **节奏：** 四幕平均镜长约 2.9 / 3.9 / 1.0 / 2.4 秒。\n- **运镜：** 前两幕几乎全部锁定，手持抖动从 S18 才开始。\n- **响度（平均 dB）：** S01 −24.5（最安静）；S08 −12.8 切到 S09 −21.7，下降约 9 dB；S18 −10.3；S26 −10.7；S27 −15.2。低频与总响度只差 1–3 dB，低频很重，可能含配乐。\n\n**已纠正的描述：**\n- S01、S03、S06、S10、S11、S16、S17 是锁定镜头\n- S06 是站起并抬头；S07 在前 1 秒内转身\n- S17 冲向镜头，从画面下方出画\n- S20 向右上跑，S22 向左跑\n- S25 摄影机不跟随\n- S28 是飞越带来的白闪，不是甩镜\n- S29 朝画面左侧\n- S30 与 S31 实际连续，64.75s 处没有硬切；岩石段可能藏有遮挡转场\n- S31 岩石让开时，飞行器已经在画内\n- 人物大小：S01 约 6%，S03 约 12%，S10 约 7%，S08 约 40%\n\n## 6. 哪些内容不是实测\n\n- 视场角和机位距离是我的选择，不是从原片测得的。\n- 31 镜 A、B 的曝光值是估算的。\n- 声音的具体内容是根据画面设计的，因为分析时听不到原片；只有响度是实测的。声音部分按之前的要求写成“没有音乐”，但原片可能有配乐。\n- “要带走主角”“飞行员失神”等动机，是根据字幕和画面的解读。\n- Seedance 的官方信息：Dreamina 页面写 2.0 最多 12 个参考资源、2.5 最多 50 个。单条视频数量和时长上限未核实，4 秒最短时长来自记忆，未核实。\n\n## 7. 方法备忘\n\n- **工具：** 本机 `python` 不可用（Windows 占位程序），分析用 ffmpeg 和 gawk。\n- **运动分析：** `vidstabdetect`（`fileformat=1`）后用 gawk 解析。符号：dx 为正表示画面左移，dy 为正表示画面上移，缩放原始值为负表示画面放大。\n- **亮度和响度：** 逐镜用 `signalstats` 和 `volumedetect`。\n- **短镜头做法：** 动作按真实速度生成并留出余量，再裁剪到取用区间，不靠加速慢动作。\n- **写法规范：** Cinedance V4（`C:\\Users\\Administrator\\.claude\\skills\\cinedance-v4\\SOURCE.md`）。该规范要求英文提示词，但用户要中文，以用户为准。\n- **`提示词_参考.md` 的已知问题：** {{@图片4}} 同时用于长矛和场景（第 52、58 行）；第 112 行有多余标签；魔礼青身高写了 215 和 210 两个值。","file":"data/candidates/2026-11-02-cc-03.md"},{"id":"2026-11-03-cc-01","title":"国产动漫临摹复盘：可复用经验","bot":"CC","date":"2026-11-03","category":"研究与课程","status":"pending","source":"agent://43a57eeb-95eb-4091-8858-ee756745c674","reason":"阶段性定稿：白模／文字／图片／后期各管一事，含 v5–v8-2 对照与可复用流程","body":"# 国产动漫临摹复盘：可复用的 AI 视频制作经验\n\n2026-11-03\n\n## 汇报结论\n\n临摹证明，AI 视频的镜头节奏和运镜已经可以较好地控制，人物表演和布料还不能完全交给模型。可复用的核心经验是：白模、文字、图片和后期各管一件事。\n\n目前的实测只覆盖《灵笼》片段第一段的 20.2 秒，全片共 31 镜、69.79 秒。以下结论都是阶段性的。\n\n- **流程要改起点。** 日常制作从剧本出发；临摹从拆解原片出发，并在生成前增加白模预演。\n- **白模是最有效的控制手段。** 没有白模带节奏时，3.79 秒的镜头被压到 1.92 秒；用带人物的白模后，切点只差 1 到 2 帧。\n- **控制素材要做减法。** 模型会照搬它看到的一切。一张简单线稿控制人物比例是可行的，线稿控制多了就会出问题。\n- **第一段已有可用方案。** 在 v8 基础上修改的 v8-2，前五个切点与目标只差 0 到 1 帧，S03 人物约占画高 12.5%（目标 12%），画面表现已可接受。剩下的差异主要来自随机种子，我们从 v8 和 v8-2 中逐镜选用。\n\n## 版本对照（摘要）\n\n| 版本 | 关键素材 | 判断 |\n| --- | --- | --- |\n| v8-2 | v8 + 简单线稿控 S03 比例 | 可用；控制素材要少 |\n| v9 | 混合白模 + 多图 | 改动太多，不如 v8 |\n| v8 | 无人物白模 + 原片音频 | 动作自然；比例／时长偶失控 |\n| v7 | 带人物白模 | 切点准，但照搬僵硬动作 |\n| v5 | 定妆图／线稿／文字时间码 | 时长几乎被均分 |\n\n## 返工分层\n\n- 切点、运镜或构图不对：改白模。\n- 表演或布料不对：改提示词。\n- 服装或光线融合不对：改资产。\n- 微小运动或光效不对：放到后期。\n\n完整原文：`file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/MAC-to-WIN/0002/灵笼临摹复盘汇报_2026-11-03/国产动漫临摹复盘_可复用的AI视频制作经验.md`","file":"data/candidates/2026-11-03-cc-01.md"},{"id":"2026-11-03-cc-02","title":"Seedance 白模与线稿控制教训","bot":"CC","date":"2026-11-03","category":"协作与约定","status":"pending","source":"agent://a141b6d4-9f49-494f-a03c-cfd28c5a3bfc","reason":"可复用方法：无人物白模只管运镜站位；简单线稿只控比例；小改不重写","body":"# Seedance 白模与线稿控制教训（2026-11-03）\n\n## 核心约定\n\n1. **白模降级**：只管切点、运镜、站位与构图；不要指望模型“按白模表演”。带人物白模会把僵硬动作和背景条纹一起照搬。\n2. **默认无人物白模**（`第一段_白模_v05_无人物.mp4`）；需要控比例时**只加一张简单线稿**，并写明不学线稿风格。\n3. **已测好的版本只做针对问题的小改**：不重写，不同时换白模／参考图／大段文字（v9 一次改太多，效果回退）。\n4. **提示词稳定后靠多次生成 + 选镜**解决随机差异，不因此反复改提示词。\n5. **布料／头发**：风要一直动；不要写成片积雪（会钉成硬壳）；雪上不写红色（易被画成血）。\n6. **音频**：提示词带上原片音频参考 `{{@音频1}}`。\n\n## v8 → v8-2 实测摘要\n\n- v8（无人物白模）：动作最自然；S03 人物约 32%（目标 12%）；S04 拖到 4.29s（目标 1.54s）。\n- v8-2（+ S03 简单比例线稿）：画面可接受；前五个切点差 0–1 帧；S03 ≈12.5%；S06 偏长可剪。\n- 用户从 v8 与 v8-2 中选可用镜头。\n\n来源记忆：`lingcage-seedance-reference-video-lessons.md`／`lingcage-seedance-test-v1-lessons.md`","file":"data/candidates/2026-11-03-cc-02.md"},{"id":"2026-11-03-cc-03","title":"灵笼第一段孤行提示词 v8 要点","bot":"CC","date":"2026-11-03","category":"提示词","status":"pending","source":"agent://a141b6d4-9f49-494f-a03c-cfd28c5a3bfc","reason":"当日可用主版本骨架：无人物白模 + 四图 + 原片音频，后续小改出 v8-2","body":"# 《灵笼_追逐_v2》第一段：孤行（S01–S07）提示词 v8 要点\n\n整理日期：2026-11-03。工具：即梦 Seedance 2.5。\n\n## 上传清单\n\n| 标签 | 管什么 |\n| --- | --- |\n| `{{@图片1}}` | 主角脸／发型／眼镜／围巾／斗篷（char_make_v6 上传版） |\n| `{{@图片2}}` | 全段岩石、色调、风雪 |\n| `{{@图片3}}` | S01 场景（无光斑） |\n| `{{@图片4}}` | S03 场景／S02 雪面 |\n| `{{@视频1}}` | 切点、时长、运镜、构图、人物位置大小（白模） |\n| `{{@音频1}}` | 风声、呼吸、脚步节奏 |\n\n生成设置：21:9，21 秒，后期剪到 20.2 秒。\n\n## 素材分工（提示词总则摘要）\n\n- `{{@视频1}}` 只决定切点／时长／摄影机／构图／人物位置大小；虚化占位不是最终造型，不模仿其姿势与运动。\n- 人物步态、重量、表情、布料全部按文字表演；背景细节按参考图想象。\n- 风与布料是全段最重要规则：头发／围巾／斗篷高频抖动，有惯性，不成片积雪。\n- 雪上没有红色。\n\n完整文件：`file:///H:/百度网盘下载/00_百度网盘_WIN/BaiduSyncdisk/MAC-to-WIN/0002/灵笼_追逐_v2_inbox/02_提示词/01_当前版本/灵笼_追逐_v2_第一段_孤行_提示词_v8.md`","file":"data/candidates/2026-11-03-cc-03.md"},{"id":"2026-11-03-coco-01","title":"SNOW 七镜 MAP 提示词","bot":"COCO","date":"2026-11-03","category":"提示词","status":"pending","source":"codex://threads/01a19d69-b978-7983-95da-8a52a0586510","reason":"按 tig-blocking-map 定稿的 7 条可复用 MAP 提示词（标签+颜色键+构图锁定）","body":"按上传顺序做成 **7 个独立 MAP 提示词**。每次只附上对应原图，作为 `image_1`。统一用**低饱和蓝色轮廓**表示这名角色，项目名暂用 `SNOW`，画幅保持约 **2.35:1**。\n\n以下为技能第 1 步：生成提示词、结果标签、原图标签和颜色键。\n\n**MAP 01｜脸部极近特写**\n\n结果标签：`@staging_SNOW_s01_v1`  \n原图标签：`@loc_SNOW_mountain_s01_v1`  \n颜色键：蓝色＝画面右侧、低头朝左的局部面部。\n\n```text\n@[Image 1](image_1) — use the attached image ONLY as the compositional guide: copy its exact framing, camera angle, crop, and the positions, poses and scale of every person — but do NOT copy its photographic look: no photo textures, no realistic lighting, no realistic faces, no colors from the image. Do NOT add anything that is not in the attached image. Do NOT complete cropped bodies — if a body part is cut off by the frame edge in the image, cut it off in the drawing. The OUTPUT is a flat schematic:\nFlat minimalist technical LINE DRAWING, a staging plan for a film scene — an obviously schematic, non-photographic drawing on a white background with a very faint, thin, light-grey graph-paper grid. Figures are drawn as clean THIN OUTLINES in muted colors — NO fills, NO solid color blocks, NO shading, NO texture, NO realism, NO text, NO letters, NO labels anywhere.\nFront view matching the attached image\u0027s framing exactly: 1 partially visible outline figure, preserving the source camera\u0027s extreme close-up.\nRIGHT HALF — a MUTED BLUE outline of the visible portion of one man\u0027s head. The head extends beyond the TOP, RIGHT and BOTTOM frame edges. Its left silhouette enters near 44% of frame width at the top; the brow and projecting nose extend toward frame-left. The head is bowed, face turned toward screen-left and downward. Preserve the single visible narrowed eye near 66% across and 55% down, using only a few simple contour strokes. The nose occupies the lower-central-right area. The mouth and chin remain outside the bottom crop. Do not draw a complete head, a second eye, neck, shoulders or torso.\nNo furniture, open background. Keep the left portion largely empty; the defocused background supplies no definite anchoring outline.\nNothing else — no ground line, no extra props, no extra figures. Simple, readable, diagrammatic — flat 2D line drawing, minimal detail, only who is where. --ar 1920:817 --style raw --stylize 30 --v 8.1 --no photorealism, photo texture, realistic lighting, realistic faces, shading, solid color fills, color blocks, text, letters, labels, typography\n```\n\n**MAP 02｜侧面远景登坡**\n\n结果标签：`@staging_SNOW_s02_v1`  \n原图标签：`@loc_SNOW_mountain_s02_v1`  \n颜色键：蓝色＝画面中下部、朝右上坡的微小全身人物。\n\n```text\n@[Image 1](image_1) — use the attached image ONLY as the compositional guide: copy its exact framing, camera angle, crop, and the positions, poses and scale of every person — but do NOT copy its photographic look: no photo textures, no realistic lighting, no realistic faces, no colors from the image. Do NOT add anything that is not in the attached image. Do NOT complete cropped bodies — if a body part is cut off by the frame edge in the image, cut it off in the drawing. The OUTPUT is a flat schematic:\nFlat minimalist technical LINE DRAWING, a staging plan for a film scene — an obviously schematic, non-photographic drawing on a white background with a very faint, thin, light-grey graph-paper grid. Figures are drawn as clean THIN OUTLINES in muted colors — NO fills, NO solid color blocks, NO shading, NO texture, NO realism, NO text, NO letters, NO labels anywhere.\nFront view matching the attached image\u0027s framing exactly: 1 outline figure, preserving the source camera\u0027s distant side view.\nLOWER CENTER — a tiny MUTED BLUE full-body outline, centered approximately 49% across the frame. Head at approximately 61% of frame height; boots at approximately 69%. Preserve this very small scale. The figure faces screen-right, climbing toward the upper-right with the torso inclined forward. Legs are separated in the exact walking stance shown. The cloak trails toward screen-left. A narrow elongated object extends diagonally down-left behind the lower body; trace only its visible shape and position without inventing its concealed attachment.\nNo furniture. Represent the visible mountain slope boundary with a sparse thin light-grey contour rising from near the bottom-left quarter toward the upper-right edge. Preserve the slope under the boots. Indicate only a few major distant ridge contours in the lower-left background. Keep the broad upper and left sky areas empty.\nNothing else — no ground line, no extra props, no extra figures. Simple, readable, diagrammatic — flat 2D line drawing, minimal detail, only who is where. --ar 1920:817 --style raw --stylize 30 --v 8.1 --no photorealism, photo texture, realistic lighting, realistic faces, shading, solid color fills, color blocks, text, letters, labels, typography\n```\n\n**MAP 03｜腿脚局部特写**\n\n结果标签：`@staging_SNOW_s03_v1`  \n原图标签：`@loc_SNOW_mountain_s03_v1`  \n颜色键：蓝色＝从上边缘进入画面的腿、靴子及右上方衣摆。\n\n```text\n@[Image 1](image_1) — use the attached image ONLY as the compositional guide: copy its exact framing, camera angle, crop, and the positions, poses and scale of every person — but do NOT copy its photographic look: no photo textures, no realistic lighting, no realistic faces, no colors from the image. Do NOT add anything that is not in the attached image. Do NOT complete cropped bodies — if a body part is cut off by the frame edge in the image, cut it off in the drawing. The OUTPUT is a flat schematic:\nFlat minimalist technical LINE DRAWING, a staging plan for a film scene — an obviously schematic, non-photographic drawing on a white background with a very faint, thin, light-grey graph-paper grid. Figures are drawn as clean THIN OUTLINES in muted colors — NO fills, NO solid color blocks, NO shading, NO texture, NO realism, NO text, NO letters, NO labels anywhere.\nFront view matching the attached image\u0027s framing exactly: 1 partially visible outline figure, preserving the source camera\u0027s downward-looking close-up.\nCENTER-RIGHT — a MUTED BLUE outline of the visible lower-body fragment only. The trouser leg enters through the top edge near the center and descends to one prominent boot. The boot occupies approximately 47–56% of frame width and 43–74% of frame height, with its toe pointing toward the lower edge, slightly screen-right. Preserve the knee bend, shin angle and boot outline from the source. The visible angular garment hem spreads across the upper-right area, with its pointed lower corner near 72% across and 35% down. All upper-body anatomy remains beyond the top edge. Do not add a head, torso, hands or a second complete leg or boot.\nNo furniture. The ground occupies the entire background. Use only a few thin light-grey outlines for the larger visible stones; preserve their relative placement and keep the rest empty. No horizon.\nNothing else — no ground line, no extra props, no extra figures. Simple, readable, diagrammatic — flat 2D line drawing, minimal detail, only who is where. --ar 1920:817 --style raw --stylize 30 --v 8.1 --no photorealism, photo texture, realistic lighting, realistic faces, shading, solid color fills, color blocks, text, letters, labels, typography\n```\n\n**MAP 04｜后侧肩部近景**\n\n结果标签：`@staging_SNOW_s04_v1`  \n原图标签：`@loc_SNOW_mountain_s04_v1`  \n颜色键：蓝色＝左侧前景的头、背肩与披风，脸朝画面右侧。\n\n```text\n@[Image 1](image_1) — use the attached image ONLY as the compositional guide: copy its exact framing, camera angle, crop, and the positions, poses and scale of every person — but do NOT copy its photographic look: no photo textures, no realistic lighting, no realistic faces, no colors from the image. Do NOT add anything that is not in the attached image. Do NOT complete cropped bodies — if a body part is cut off by the frame edge in the image, cut it off in the drawing. The OUTPUT is a flat schematic:\nFlat minimalist technical LINE DRAWING, a staging plan for a film scene — an obviously schematic, non-photographic drawing on a white background with a very faint, thin, light-grey graph-paper grid. Figures are drawn as clean THIN OUTLINES in muted colors — NO fills, NO solid color blocks, NO shading, NO texture, NO realism, NO text, NO letters, NO labels anywhere.\nFront view matching the attached image\u0027s framing exactly: 1 partially visible outline figure, preserving the source camera\u0027s rear three-quarter close-up.\nLEFT FOREGROUND — a large MUTED BLUE head-and-shoulders outline. The camera sees mostly the back of the head and the cloaked back, with a narrow facial profile facing screen-right. The crown is cropped by the TOP frame edge. The head occupies approximately 19–53% of frame width; the visible nose projects toward screen-right near the middle of the frame. The chin is slightly lowered. Hair extends backward toward screen-left. The broad cloaked shoulder and back spread from the LEFT frame edge through the lower center, exiting the BOTTOM edge. Preserve the shoulder\u0027s rising curve and the visible cloak silhouette; use only a few contour lines for major overlaps. Do not complete the torso or add arms, hands or legs outside the crop.\nNo furniture. A few thin light-grey mountain-ridge contours appear behind the figure, primarily across the right half, beginning around mid-height. Preserve the open sky above them.\nNothing else — no ground line, no extra props, no extra figures. Simple, readable, diagrammatic — flat 2D line drawing, minimal detail, only who is where. --ar 1920:817 --style raw --stylize 30 --v 8.1 --no photorealism, photo texture, realistic lighting, realistic faces, shading, solid color fills, color blocks, text, letters, labels, typography\n```\n\n**MAP 05｜背面远景登坡**\n\n结果标签：`@staging_SNOW_s05_v1`  \n原图标签：`@loc_SNOW_mountain_s05_v1`  \n颜色键：蓝色＝画面中央偏上、背对镜头向山顶前进的全身人物。\n\n```text\n@[Image 1](image_1) — use the attached image ONLY as the compositional guide: copy its exact framing, camera angle, crop, and the positions, poses and scale of every person — but do NOT copy its photographic look: no photo textures, no realistic lighting, no realistic faces, no colors from the image. Do NOT add anything that is not in the attached image. Do NOT complete cropped bodies — if a body part is cut off by the frame edge in the image, cut it off in the drawing. The OUTPUT is a flat schematic:\nFlat minimalist technical LINE DRAWING, a staging plan for a film scene — an obviously schematic, non-photographic drawing on a white background with a very faint, thin, light-grey graph-paper grid. Figures are drawn as clean THIN OUTLINES in muted colors — NO fills, NO solid color blocks, NO shading, NO texture, NO realism, NO text, NO letters, NO labels anywhere.\nFront view matching the attached image\u0027s framing exactly: 1 outline figure, preserving the source camera\u0027s distant rear view.\nUPPER CENTER — a small MUTED BLUE full-body outline, centered approximately 50% across the frame. The head begins near 29% of frame height and the lowest boot ends near 42%. The figure has his back to the camera and faces uphill, toward the upper center of the image. His torso leans slightly forward; the legs retain the staggered climbing stance shown. The screen-left arm hangs beside the body. The cloak flares mainly toward screen-right, ending beside the upper legs. Preserve the exact small silhouette and do not enlarge it.\nNo furniture. Use sparse thin light-grey contours for the broad mountain shoulder filling almost the entire frame. Its summit area is cut by the top edge; its rocky outer boundaries descend toward the left and right edges. Keep the central slope open, with only a few major rock outlines in their source positions. Preserve the existing trail of small foot impressions descending from behind the figure toward the lower center as faint grey outline marks, without adding a route arrow.\nNothing else — no ground line, no extra props, no extra figures. Simple, readable, diagrammatic — flat 2D line drawing, minimal detail, only who is where. --ar 1920:817 --style raw --stylize 30 --v 8.1 --no photorealism, photo texture, realistic lighting, realistic faces, shading, solid color fills, color blocks, text, letters, labels, typography\n```\n\n**MAP 06｜后脑与背肩近景**\n\n结果标签：`@staging_SNOW_s06_v1`  \n原图标签：`@loc_SNOW_mountain_s06_v1`  \n颜色键：蓝色＝中央前景背对镜头的后脑、肩部及披风。\n\n```text\n@[Image 1](image_1) — use the attached image ONLY as the compositional guide: copy its exact framing, camera angle, crop, and the positions, poses and scale of every person — but do NOT copy its photographic look: no photo textures, no realistic lighting, no realistic faces, no colors from the image. Do NOT add anything that is not in the attached image. Do NOT complete cropped bodies — if a body part is cut off by the frame edge in the image, cut it off in the drawing. The OUTPUT is a flat schematic:\nFlat minimalist technical LINE DRAWING, a staging plan for a film scene — an obviously schematic, non-photographic drawing on a white background with a very faint, thin, light-grey graph-paper grid. Figures are drawn as clean THIN OUTLINES in muted colors — NO fills, NO solid color blocks, NO shading, NO texture, NO realism, NO text, NO letters, NO labels anywhere.\nFront view matching the attached image\u0027s framing exactly: 1 partially visible outline figure, preserving the source camera\u0027s tight rear view.\nCENTER FOREGROUND — a large MUTED BLUE outline of the back of the head, neck covering and shoulders. The head occupies approximately 37–70% of frame width, with the crown clipped by the TOP edge and the nape near 58% of frame height. The figure faces away from the camera and slightly downward toward the slope. No facial features are visible. Preserve the outer hair contour, including the strands projecting screen-right, without drawing individual hair texture. The cloaked shoulders broaden across the lower frame, approximately from 14% to 86% of frame width, and continue beyond the BOTTOM edge. Indicate only the main collar and overlapping cloak boundaries. Preserve the small angular protrusions along the screen-left shoulder as simple contours, without inventing their hidden structure. Do not add a face, hands, waist or legs.\nNo furniture. The background is a nearby rising rocky slope, with a few sparse thin light-grey rock contours, especially across the upper-left and upper-right. No sky or horizon.\nNothing else — no ground line, no extra props, no extra figures. Simple, readable, diagrammatic — flat 2D line drawing, minimal detail, only who is where. --ar 1920:817 --style raw --stylize 30 --v 8.1 --no photorealism, photo texture, realistic lighting, realistic faces, shading, solid color fills, color blocks, text, letters, labels, typography\n```\n\n**MAP 07｜正面低头近景**\n\n结果标签：`@staging_SNOW_s07_v1`  \n原图标签：`@loc_SNOW_mountain_s07_v1`  \n颜色键：蓝色＝中央偏右、低头而双眼向前上方看的头肩人物。\n\n```text\n@[Image 1](image_1) — use the attached image ONLY as the compositional guide: copy its exact framing, camera angle, crop, and the positions, poses and scale of every person — but do NOT copy its photographic look: no photo textures, no realistic lighting, no realistic faces, no colors from the image. Do NOT add anything that is not in the attached image. Do NOT complete cropped bodies — if a body part is cut off by the frame edge in the image, cut it off in the drawing. The OUTPUT is a flat schematic:\nFlat minimalist technical LINE DRAWING, a staging plan for a film scene — an obviously schematic, non-photographic drawing on a white background with a very faint, thin, light-grey graph-paper grid. Figures are drawn as clean THIN OUTLINES in muted colors — NO fills, NO solid color blocks, NO shading, NO texture, NO realism, NO text, NO letters, NO labels anywhere.\nFront view matching the attached image\u0027s framing exactly: 1 partially visible outline figure, preserving the source camera\u0027s frontal close-up.\nCENTER-RIGHT FOREGROUND — a MUTED BLUE head-and-shoulders outline. The head is centered approximately 54% across the frame. The crown remains inside the image, near 4% of frame height; the chin lies near 69%. Preserve the bowed head, lowered chin and forward-inclined upper body. The face is nearly frontal; the eyes look forward and slightly upward beneath the lowered brow. Use only minimal contour marks to establish eye direction, nose and closed mouth. Do not lift the chin or straighten the posture. The cloaked shoulders spread broadly across the lower image, extending approximately from 16% to 85% of frame width at the bottom. The torso is cut by the BOTTOM frame edge. Preserve the high wrapped collar below the chin and the small visible angular projections on the screen-right shoulder as simple outline shapes. Do not add hands or lower-body anatomy.\nNo furniture. Use a few thin light-grey contours for the mountain terrain behind him: the open recessed slope on the left and the prominent steep rock face along the upper-right and right edge. Preserve their placement without rendering rock or snow texture.\nNothing else — no ground line, no extra props, no extra figures. Simple, readable, diagrammatic — flat 2D line drawing, minimal detail, only who is where. --ar 1920:817 --style raw --stylize 30 --v 8.1 --no photorealism, photo texture, realistic lighting, realistic faces, shading, solid color fills, color blocks, text, letters, labels, typography\n```\n\n所有标签均在生成后赋给对应图片，**不要画进 MAP 内**。","file":"data/candidates/2026-11-03-coco-01.md"},{"id":"2026-11-04-cc-01","title":"AI临摹90秒视频起手流程","bot":"CC","date":"2026-11-04","category":"研究与课程","status":"pending","source":"agent://07a85270-f6fd-42bf-b336-be5f703f640b","reason":"可复用起手方法：先跑通最难15秒再铺开，含拆片／样片／试镜步骤与常见坑","body":"# AI 临摹 90 秒视频的流程\r\n\r\n**从一段 15 秒开始，不要从第 1 秒一路做到第 90 秒。** 先把原片拆成镜头表，挑最难的一小段跑通，确认效果和成本都能接受，再铺开做其余部分。\r\n\r\n## 流程\r\n\r\n1. **定目标**：想清楚是 1:1 复刻镜头，还是保留镜头语言、换角色和世界观。前者适合练分镜和节奏，后者更容易做好，也更适合公开发布。\r\n2. **拆片**：用 PySceneDetect 或剪辑软件切出每个镜头，每镜填一行：时间码、时长、景别、运镜、调度、动作和表演、光线、声音。90 秒通常有 20–40 个镜头，快剪的片子会更多。\r\n3. **搭样片**：把原片音轨放进剪辑时间线，每个镜头先放一张截图。这条时间线是整个项目的底板，之后生成一条就替换一条，进度和节奏问题都能直接看到。\r\n4. **锁定视觉**：用 MJ 或其他图像模型定稿角色三视图、主要场景、色彩和光线。后面能否连贯主要取决于这一步。\r\n5. **跑通 15 秒**：挑一段包含最难元素的片段（表演、动作或复杂运镜），每镜先出首帧，再生成视频，然后和原片并排对比。这一步能告诉你提示词写法是否有效，以及每镜要试几次。\r\n6. **批量生成**：按场景分组做，同场景共用参考图。尽量一镜一条，单条时长以平台当前限制为准（Seedance 约 15 秒），这样不满意时可以只重做一个镜头。按每镜 3–5 次估算，30 个镜头约需 100–150 次生成，这是粗估，可以用第 5 步的实际数字修正。\r\n7. **合成修整**：逐镜替换样片，调节奏，统一调色和颗粒，放大画质，最后做音乐、音效和配音。\r\n\r\n## 常见的坑\r\n\r\n- **角色漂移**：这是最常见的问题。每镜都固定用同一组参考图，并用首帧锁定构图。\r\n- **一次写太多**：不要把多个镜头或一整段剧情塞进一条提示词，一镜只写一个主要动作。\r\n- **只看单镜**：单条好看不代表接得上，每做完一组就放回时间线连着看。\r\n- **版权**：私下练习风险较低。如果要公开发布，原片的角色、音乐和直接用作参考的画面都可能涉及版权，最好替换。","file":"data/candidates/2026-11-04-cc-01.md"},{"id":"2026-11-04-cc-02","title":"光阴临摹素材规则","bot":"CC","date":"2026-11-04","category":"协作与约定","status":"pending","source":"agent://b8f2db86-0da4-4a2e-a8ab-f688c3704a19","reason":"关键决策：可用白模／关键帧美术／原片角色，禁用原片视频与深度视频","body":"# 《光阴》AI 1:1 临摹素材规则（2026-11-04）\r\n\r\n用户定下的规则：\r\n\r\n- **可以用**：白模预演、原片里的关键帧美术、原片角色（可以直接生成原片角色）。\r\n- **不可以用**：原片视频、深度视频。\r\n- 美术关键帧用来确定关键 POSE 和美术风格，也可以排进“关键帧加黑场”的参考视频。这种视频的关键姿势用白模姿势和用美术关键帧两种都要测。\r\n- 原片的漫画插帧不交给 AI 视频生成，太不可控，放到后期做。\r\n\r\n**Why:** 用户认为用原片或深度视频来临摹属于作弊。\r\n\r\n**How to apply:** 方案里不要出现原片视频参考、视频转绘和深度控制。从原片提取姿态或动作也不用（按同一原则推断）。白模、线稿和选镜的做法参考灵笼实测教训。和灵笼不同的是，灵笼换了新男主，《光阴》可以用原片角色。","file":"data/candidates/2026-11-04-cc-02.md"},{"id":"2026-11-04-cc-03","title":"上美影×迪士尼神话提示词研究","bot":"CC","date":"2026-11-04","category":"提示词","status":"pending","source":"agent://e42cd8b9-4741-4d69-9f8e-f6b36036e755","reason":"定稿级研究报告与 10 套中国神话中英提示词，可直接回看取用","body":"# 动画导演与表演：二维手绘风格研究报告\r\n\r\n**分类**：动画导演与表演\r\n**研究对象**：上海美术电影制片厂（上美影）二维手绘动画；迪士尼 1990 年代美式二维手绘动画\r\n**研究重点**：构图、配色、运镜、表演与个性、人物造型、场景元素、灯光、饱和度、明度、疏密、氛围\r\n\r\n\u003e 说明：本报告基于既有知识整理，未联网逐条核对出处。引用的作品年代与制作信息如需用于正式出版，请对照上美影厂史资料、《生命的幻觉》（Frank Thomas \u0026 Ollie Johnston, *The Illusion of Life*, 1981）及迪士尼相关幕后资料复核。\r\n\r\n---\r\n\r\n## 一、上美影二维手绘：核心特征\r\n\r\n代表作：《小蝌蚪找妈妈》（1960）、《大闹天宫》（1961–1964）、《牧笛》（1963）、《九色鹿》（1981）、《哪吒闹海》（1979）、《天书奇谭》（1983）、《葫芦娃》（1986 电视系列）、《宝莲灯》（1999）。\r\n\r\n| 维度 | 上美影的典型做法 | 对创作的启示 |\r\n|---|---|---|\r\n| **构图** | 留白与山水式布局：主体常置于画面一侧，大面积留白承担\"气\"与\"空\"；横卷式、纵向景深与长镜头并用 | 留白本身就是情绪载体，不必每一格都填满 |\r\n| **配色** | 墨色、矿物色为主（青绿、赭石、朱砂、石青）；大面积低饱和底色，局部用高饱和点睛（如红衣、金光） | \"灰底 + 一点红\"的主次关系比整体鲜艳更有辨识度 |\r\n| **运镜** | 以定格、推拉、横移为主，多用剪切与水墨晕染转场；很少依赖连续的复杂机位运动 | 节奏靠剪辑与留白，而非摄影机运动 |\r\n| **表演** | 京剧程式与戏曲身段（亮相、云手、趟马式走位）；动作夸张但有节制，动作之间留停顿 | 表演服务于韵律与意象，不追求写实的生理细节 |\r\n| **人物造型** | 线描为骨，线条粗细有变化；五官简化，眼睛与服饰装饰性强；神话角色借用脸谱、纹样 | 线条本身是风格签名，应保持统一的线宽与收笔方式 |\r\n| **场景元素** | 山石、云纹、祥云、水波、窗棂、竹林，符号化而非写实；常用\"一角\"取景 | 用少量符号暗示整个世界 |\r\n| **灯光** | 以平涂为主，少量光源（月光、火光、金光）做剪影或光晕；很少做真实投影 | 光是情绪标记，不是物理模拟 |\r\n| **饱和度** | 整体中低饱和，局部高饱和 | 饱和度是叙事的\"重音\" |\r\n| **明度** | 高明度留白 + 低明度墨色重线，明暗对比集中在主体 | 用明暗层次引导视线 |\r\n| **疏密** | 线条密集的区域（衣纹、山石）与空白区域形成疏密对比 | 疏密决定视觉呼吸 |\r\n| **氛围** | 空灵、哲思、民间童趣并存；《天书奇谭》《牧笛》偏冷寂，《哪吒闹海》《大闹天宫》偏热烈 | 同一风格可用不同的色温与留白比例切换情绪 |\r\n\r\n---\r\n\r\n## 二、迪士尼 1990 年代二维手绘：核心特征\r\n\r\n代表作：《小美人鱼》（1989）、《美女与野兽》（1991）、《阿拉丁》（1992）、《狮子王》（1994）、《风中奇缘》（1995）、《大力士》（1997）、《花木兰》（1998）。\r\n\r\n| 维度 | 迪士尼 90 年代的典型做法 | 对创作的启示 |\r\n|---|---|---|\r\n| **构图** | 宽银幕视野；人物常处于三分线或对角线上；大全景用于建立世界观，中近景用于情绪 | 用景别切换完成叙事 |\r\n| **配色** | 饱和而有层次的暖色主导，冷色用于阴影与环境；色彩分组明确（角色色、背景色、光源色分开） | 角色与背景的色彩分离，保证主体可读 |\r\n| **运镜** | 借助 CAPS 数码上色与合成，实现虚拟推拉、摇移与视差；《美女与野兽》舞会段落是典型 | 运动感来自视差与镜头的\"假想机位\" |\r\n| **表演** | 《生命的幻觉》十二原则的成熟应用：预备动作（anticipation）、跟随与重叠（follow-through）、夸张（exaggeration）、吸引力（appeal）；眼神与微表情成为表演核心 | 先定人格，再定动作；动作从人格里长出来 |\r\n| **人物造型** | 比例夸张但更\"可信\"；大眼睛、鲜明轮廓；服装纹样与角色性格绑定 | 轮廓剪影要能一眼辨认 |\r\n| **场景元素** | 大量细节的写实化背景（森林、城堡、非洲草原），植被与建筑纵深明显 | 背景服务于世界观，但要退后于角色 |\r\n| **灯光** | 戏剧性光线：逆光轮廓光（rim light）、光束（god rays）、暖色日落与冷色夜景 | 光线用来指示时间、情绪与权力关系（如《狮子王》的 Pride Rock） |\r\n| **饱和度** | 高饱和，但通过明度控制避免刺眼 | 饱和与明度要配合，不能一味堆高饱和 |\r\n| **明度** | 明度范围宽，亮部与暗部差距大，制造空间感 | 大明暗差适合史诗场景 |\r\n| **疏密** | 背景细密、角色干净；角色周围留出视觉空间 | 角色要\"跳出\"背景 |\r\n| **氛围** | 史诗、浪漫、温暖，偏向情感外放 | 用音乐、光与色共同推动情绪 |\r\n\r\n---\r\n\r\n## 三、两套风格对比\r\n\r\n| 维度 | 上美影 | 迪士尼 90 年代 |\r\n|---|---|---|\r\n| 核心语汇 | 留白、墨线、符号化 | 体积、光影、写实化细节 |\r\n| 色彩策略 | 低饱和底 + 局部高饱和 | 整体高饱和 + 明暗分层 |\r\n| 运动逻辑 | 节奏靠剪辑与停顿 | 节奏靠镜头运动与动作重叠 |\r\n| 表演来源 | 戏曲程式 | 角色心理与原则化动作 |\r\n| 光的作用 | 情绪标记、剪影 | 物理感光影、戏剧光线 |\r\n| 人物与背景关系 | 人与景融为一体 | 角色从背景中突出 |\r\n\r\n**融合建议**：神话题材用上美影的留白与线描做骨架，在关键镜头借用迪士尼的轮廓光与明暗对比做情绪高点。\r\n\r\n---\r\n\r\n## 四、用于提示词的规则\r\n\r\n1. **风格锁**：每条提示词固定一套风格关键词，避免混用\"水墨\"与\"3D 渲染\"。\r\n2. **留白声明**：上美影风格提示词需明确\"大面积留白\"\"画面三分之二为空\"。\r\n3. **线条声明**：写明\"均匀墨线\"\"线宽统一\"，避免生成的线条变成厚涂。\r\n4. **色彩分层**：写明\"主体为高饱和红，背景为低饱和灰青\"，而不只写\"好看的颜色\"。\r\n5. **表演动词**：用具体动作与情绪（\"回头，指尖停在半空\"）替代形容词（\"很悲伤\"）。\r\n6. **镜头语言**：写景别与机位（\"中景仰拍\"\"远景俯视\"），而非只写\"电影感\"。\r\n\r\n---\r\n\r\n## 五、10 套中国神话主题提示词（中英文）\r\n\r\n每套包含：风格、构图、配色、运镜、表演、人物、场景、灯光、饱和与明度、氛围。比例默认 16:9，可按需调整。\r\n\r\n### 1. 嫦娥奔月（上美影水墨风）\r\n\r\n**中文**：上美影水墨动画风格，二维手绘，均匀墨线。画面三分之二为留白，嫦娥位于右侧三分线，身披淡青色长袖，衣带随风向左飘起。中景侧面，她回首望向画外，指尖停在半空，身体重心后倾，动作带有戏曲云手的弧线。背景为淡墨山峦与一轮白色满月，远处云纹以符号化的线条表现。冷色调为主：石青、灰蓝、月白；仅衣襟一处朱红作为点睛。月光作为唯一光源，从画面左上方洒下，人物背后有淡淡光晕。饱和度低，主体明度高，背景明度低。氛围空灵寂寥。16:9。\r\n\r\n**English**: Shanghai Animation Film Studio ink-wash style, 2D hand-drawn animation, uniform ink lines. Two-thirds of the frame is empty negative space. Chang\u0027e sits on the right third line, wearing a pale cyan long-sleeved robe, sash blowing left in the wind. Medium side shot; she turns her head toward off-frame, fingertip hanging in the air, weight leaning back, gesture with an opera-style cloud-hand arc. Background of pale ink mountains and a white full moon, distant clouds rendered as symbolic line patterns. Cool palette dominated by mineral blue-green, grey-blue and moon white; a single vermilion accent on the hem. Moonlight as the only light source from the upper left, faint halo behind the figure. Low saturation, bright subject, dark background. Ethereal, lonely mood. 16:9.\r\n\r\n### 2. 女娲补天（迪士尼 90 年代风）\r\n\r\n**中文**：迪士尼 90 年代二维手绘史诗风格，宽银幕构图。女娲位于画面左下角三分点，逆光，身体前倾，双臂高举托起一块发光的五色石，衣袍在风中鼓起，动作带有明显的预备与跟随。中景仰拍，天空占据画面上半部分，裂开的云层呈对角线延伸。配色：天空为深蓝到金橙的渐变，五色石饱和度最高（红、金、青、紫、白），地面为暗棕与赭红。轮廓光明显，光束从云隙倾泻而下，形成 god rays。明度对比强烈，亮部与暗部差距大。背景细节丰富但退后，角色轮廓清晰。氛围壮阔、悲壮而温暖。16:9。\r\n\r\n**English**: 1990s Disney-style epic 2D hand-drawn animation, widescreen composition. Nüwa sits at the lower left third, backlit, leaning forward with both arms raised to lift a glowing five-colored stone; her robe billows in the wind with clear anticipation and follow-through. Medium low-angle shot, sky filling the upper half of the frame, torn cloud layers extending on a diagonal. Palette: deep blue fading to golden orange in the sky, most saturated colors on the five-colored stones (red, gold, cyan, purple, white), earthy brown and ochre ground. Strong rim light; beams of light pouring through the cloud gaps as god rays. Strong value contrast between bright and dark areas. Richly detailed background, pushed back; character silhouette clean. Epic, solemn and warm. 16:9.\r\n\r\n### 3. 精卫填海（上美影水墨风）\r\n\r\n**中文**：上美影水墨动画风格，二维手绘，线描为主、少量墨晕。画面纵向构图，精卫位于画面下方三分之一处，身形很小，朝向画面上方。上方是大面积留白，远海以淡墨横线表现，波纹由细密线条组成，与留白形成疏密对比。精卫羽毛为朱红与淡灰，嘴中衔一根细小的木枝，动作为振翅与向前冲的停顿。配色：墨灰、淡蓝、朱红点睛。光源为天边一抹淡橙，几乎无投影。低饱和，明度分布呈\"上亮下暗\"。氛围执着、悲壮、带一点童趣。9:16。\r\n\r\n**English**: Shanghai Animation Film Studio ink-wash style, 2D hand-drawn animation, primarily line work with light ink wash. Vertical composition; Jingwei sits in the lower third, very small, facing upward. Large empty negative space above; distant sea drawn as pale horizontal ink strokes, waves built from dense fine lines contrasting with the empty space. Jingwei\u0027s feathers in vermilion and pale grey, a thin twig in her beak, mid-action between a wing beat and a forward lunge. Palette: ink grey, pale blue, vermilion accent. Single faint orange glow on the horizon, almost no cast shadows. Low saturation; value bright above, dark below. Determined, solemn, with a touch of childlike charm. 9:16.\r\n\r\n### 4. 夸父逐日（迪士尼 90 年代风）\r\n\r\n**中文**：迪士尼 90 年代二维手绘动作风格，宽银幕。夸父在画面中景奔跑，身体前倾约 30 度，手臂向前伸展，预备动作明显：先后仰，再冲刺。太阳位于画面右上角，巨大而炽热，光束向四周放射。地面为干裂的黄褐色土地，远处是连绵的山脉，透视纵深明显。配色：太阳与光束为高饱和橙金，夸父皮肤为暖棕，背景为赭黄与淡紫的冷暖对比。逆光形成轮廓光，身体边缘发亮。明度对比强，阴影部分为深紫红。疏密：地面纹理细密，天空干净。氛围热烈、执着、带有悲壮。16:9。\r\n\r\n**English**: 1990s Disney-style action 2D hand-drawn animation, widescreen. Kuafu runs at medium distance, torso leaning forward about 30 degrees, arms stretched ahead; clear anticipation, pulling back before the sprint. The sun sits at the upper right, huge and blazing, with rays radiating outward. Cracked ochre-brown earth in the foreground, rolling mountains with strong depth in the distance. Palette: sun and rays in high-saturation orange-gold, Kuafu\u0027s skin warm brown, background contrast between ochre and pale violet. Backlight creates a rim light along the body edge. Strong value contrast, shadows in deep plum-red. Dense texture on the ground, clean sky. Fervent, determined, with a tragic heroism. 16:9.\r\n\r\n### 5. 白蛇·断桥（上美影水墨风）\r\n\r\n**中文**：上美影水墨动画风格，二维手绘。断桥位于画面中央偏下，白娘子立于桥的一端，身穿素白长裙，裙摆以水墨晕染的方式下垂。许仙在对岸，仅露出半身，被大面积留白隔开。白娘子的上身微微前倾，双手在胸前交握，眼神向下，动作保持戏曲式的停顿。背景为淡墨的西湖水面与细雨，雨丝用细线表现。配色：白、灰、淡青为主；唯一的红色是白娘子发间的一朵花。光源为湖面反射的冷光，人物轮廓略亮。低饱和，高明度的白与低明度的墨形成对比。氛围凄美、清冷、含蓄。3:2。\r\n\r\n**English**: Shanghai Animation Film Studio ink-wash style, 2D hand-drawn animation. The broken bridge sits center-lower; White Snake stands at one end in a plain white long gown, the hem falling in soft ink wash. Xu Xian is on the opposite bank, only half his body visible, separated by wide empty space. White Snake leans forward slightly, hands clasped at her chest, eyes lowered; the gesture holds a beat in the style of opera. Background of pale ink West Lake water and fine rain, each drop a thin line. Palette: white, grey and pale cyan; the only red is a single flower in her hair. Cold light reflected from the lake gives a faint rim to the figure. Low saturation, high-value white contrasted with low-value ink. Melancholic, cool, restrained. 3:2.\r\n\r\n### 6. 大圣闹天宫（上美影水墨风）\r\n\r\n**中文**：上美影《大闹天宫》式的京剧身段二维手绘风格，线条粗犷，动作夸张但有节制。孙悟空位于画面左侧，身着金色铠甲与红色披风，单脚站立，手持金箍棒斜指天空，身体呈\"亮相\"造型，重心稳定。天宫的殿宇以平面化的符号呈现，云海为白色线条与留白。中景平视，画面两侧留出大量空白，中间的人物与金箍棒形成一条竖线\r\n\r\n…（全文见附件 animation_style_research.md，此处截断）","file":"data/candidates/2026-11-04-cc-03.md"}],"favorites":[],"warnings":[]};
