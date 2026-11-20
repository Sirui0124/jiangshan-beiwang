# 江山北望 剧本与客户端恢复

恢复日期：2026-11-12。来源：本机安装包，app.asar SHA-256 已与已有 REA 证据核对。适用原整理标记的 build 21189939。

已导出 615 个中文字幕文件、9852 条字幕、617 个节点 Markdown；显示图含 615 节点、770 连线、59 结局。

## 按章阅读

- [0 大风起](chapters/00-大风起.md)
- [1 雨打萍](chapters/01-雨打萍.md)
- [2 蛟入海](chapters/02-蛟入海.md)
- [3 试锋刀](chapters/03-试锋刀.md)
- [4 破山缺](chapters/04-破山缺.md)
- [5 问天命](chapters/05-问天命.md)
- [6 太平志](chapters/06-太平志.md)
- [7 九州同](chapters/07-九州同.md)

## 编辑方式

在 nodes 中直接编辑 Markdown，保留节点 ID 便于关联。原始 VTT 和 code-original 保留发布字节；可读代码另放 code-readable。修改 Markdown 不会自动改写游戏，当前交付不是可重新编译的完整开发工程。重新导出须选择新的输出目录，避免覆盖人工修改。

## 恢复范围

对白按字幕原文保存，未补写导演说明或未知说话人。图含分支与合流，不能展开为唯一的线性剧本。隐藏阈值、完整选项和跨章状态仍有缺失；API 返回的时间线不在现有静态资源中。

客户端代码来自已发布 JavaScript，可排版阅读，但原始 Vue/TypeScript 文件、压缩前变量名、注释和服务端源码未恢复。没有将推测实现冒充原源码。

## 证据和复现

data/extraction-manifest.json 记录每个原始导出文件的来源与 SHA-256；data/recovery-report.json 记录覆盖量与缺口。data/route-graph.json 保留全部显示图数据和选项出处。上级 recover.py 是提取脚本，使用 --output 指定新的导出目录。

REA 项目：https://github.com/morluto/rea 。已有证据在 ../../research/jiangshan-beiwang/rea-evidence.json；本轮补充分析在 ../rea-followup-evidence.json。REA 提供静态代码关系证据，字幕和 Markdown 由本地提取脚本转换。

未启动游戏、未连接游戏服务器、未验证存档条件下的可执行路线。