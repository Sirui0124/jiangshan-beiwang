# 完整路由与选项关联 · JSON 使用说明

2026-11-12，本机 build 21189939。数据文件：`完整路由与选项关联.json`。

“完整”仅指已提取的章节显示图路径，包含全部分支、合流、上游与后续关联，不代表所有按钮文字、对白概要、跨章状态和隐藏判定都已恢复。

## 已交付范围

- 615 个节点、770 条唯一连线、59 个结局。
- 每个结局均有 `all_route_nodes_topological` 与 `all_route_edges`，无最短路径或前 N 条筛选。
- 59 个结局共 142,138 条章节内组合路径；“孤勇者”最多，为 38,304 条。
- 46 条来自内置结局提示的选项文字记录，关联 41 个选择节点。相同选项可能在不同结局提示中重复，保留各自出处。
- 其中 3 条选项记录已核实对应具体后续视频；其余不猜出口。
- 613 个图节点关联到中文字幕文件，记录字幕条数和首尾时间；未导出整套剧本文本。
- 17 个节点有已整理的情境释义。其他节点没有伪造概要，明确为 `not_yet_summarized`。

## 结构

| 字段 | 用途 |
|---|---|
| `chapter_starts` | 每章入口 |
| `nodes[].id` | 视频节点 ID，也是连线端点 |
| `nodes[].predecessors` / `successors` | 全部直接前驱与后继 |
| `nodes[].title` | 已定位的游戏节点标题 |
| `nodes[].change` | 本地播放器的数值变化提示，不含增量或阈值 |
| `nodes[].verified_choice_evidence_indices` | 指向 `choice_evidence` 的记录下标；只说明选项文字来源可核实，出口是否核实还要看 `mapping_status` |
| `nodes[].options_complete` | 当前均为 false，不能把找到的部分选项当作全部按钮 |
| `nodes[].dialogue.scene_summary` | 已整理的情境概要；null 表示未整理 |
| `nodes[].dialogue.current_video_subtitles` | 本节点的字幕包、文件、条数及时间范围 |
| `nodes[].dialogue.previous_video_subtitles` | 前驱字幕出处，可帮助定位选择前的对话；合流时这些是不同来源，不能强行拼成一段对话 |
| `choice_evidence[].option_text` | 内置 help 中的选项文字，不是运行时按钮抓取 |
| `choice_evidence[].candidate_choice_nodes` | 按章节和问题标题匹配到的节点；有多个候选时保留歧义 |
| `choice_evidence[].target_video` | 已核实的后续视频；null 表示未映射，不表示自动跳转 |
| `choice_evidence[].related_ending` | 该提示出现在哪个结局的 help 中；不是断言单个选项必定导向该结局 |
| `edges[].guard` | 当前为 null，分流规则待核实，不应解释为无条件通过 |
| `ending_routes[].all_path_count` | 全部图上组合路径数，用字符串存储整数 |
| `ending_routes[].all_route_edges` | 从本章入口到该结局所有路径包含的全部边 |

## 如何得到任意一条或全部路径

对某个 `ending_routes` 记录，以 `start` 开始，沿 `all_route_edges` 深度优先遍历，直到 `target`；每次到达目标输出当前完整路径。图已经确认无环，因此可以穷尽，不必设置路径条数上限。

HTML 查看器采用等价的分支计数与路径编号方式，无需一次把所有路径放进内存。编号从 1 到 `all_path_count`，每条路径均可访问。网络图则同时显示全部分支与合流。

## 明确缺失

未获得全量 `timeline.actions`，因此尚不能给出每个选择点的全部按钮原文及其准确出口。尚未逐段整理全部字幕的情境概要。跨章累积变量、隐藏判定、随机/QTE 对应关系未全部恢复；图上可达不等于存档状态下可执行。

## 验证

对 59 个结局和 3 个虞宫结果节点，使用穷举 DFS 核对路径计数；检查每个目标第一条、中间一条、最后一条路径的端点、连线与渲染逻辑。JSON 节点引用和 3 条已核实选项出口均通过一致性检查。未进行浏览器视觉验收或实机路线验证。
