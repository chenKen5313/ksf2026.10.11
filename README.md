# Travel Atlas｜旅途地图

[打开贵州五日行程与美食攻略](https://guizhou-five-days-chenken5313.luluqie54.chatgpt.site) — 公开网页，可直接分享给朋友查看。

贵州五日旅行的简洁浏览页。打开后即可查看全部行程，也可点 Day 1—Day 5 只看某一天。Day 4 可在市区休闲与“市区＋马岭河峡谷”两条方案之间切换。生成的 `outputs/Travel-Atlas-行程单.html` 可直接双击打开并分享，无需安装软件或配置。

页面中直接内嵌了本地照片与路线示意图，不需要地图 Key、账号、配置页面或外部地图链接。路线图片仅说明“贵阳 → 兴义 → 贵阳”的行程顺序，不是导航地图。

新增独立的“对应行程的美食推荐”区域。Day 1 楼脚酸汤牛肉；Day 2 韦记布依特色酸笋鱼；Day 3–4 贵丰牛魔王、江氏糯香园、古镇排骨；Day 5 冉林禾牛肉粉。按天查看行程时，美食区域同步筛选；每天的“查看当天美食”可直接跳转。12 张用户提供的店铺与实拍截图完整保留，可点击放大、切换图片。评分、营业时间、人均消费均按用户截图记录。

## 本地打开

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址，通常为 `http://localhost:5173/`。构建检查：`npm run build`。

先运行 `npm run build`，再运行 `python scripts/build_standalone.py`，可将构建后的代码与所有本地图片内嵌到 `outputs/Travel-Atlas-行程单.html`，便于分享。生成文件约 21 MB，按需在本地生成；仓库包含完整源码和图片。

## 内容原则

- Day 1 晚上到贵阳，具体高铁站待确认，不预设贵阳北站。
- Day 2 前往兴义，入住万峰林附近；跨城交通和接驳待确认。
- Day 3 以兴义市区活动为主。
- Day 4 马岭河峡谷是可选方案，不是必去。
- Day 5 返回贵阳，主要在观山湖区活动。
- 没有确认的车次、时间、酒店和费用均不编造。

## 图片来源

封面实景照片为“远眺兴义万峰林上纳灰村及周边田园风光”，作者 [名字长的让人受不了](https://commons.wikimedia.org/wiki/File:WanFengLin-ShangNaHui2025-08.jpg)，来自 Wikimedia Commons，按 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 授权使用。本站只在页面中按容器比例显示，原始文件保存在 `public/images/wanfenglin-real.jpg`。

`public/images/guizhou-map.png` 是本地保存的 OpenStreetMap 静态底图，地图数据归 [© OpenStreetMap contributors](https://www.openstreetmap.org/copyright)。贵阳与兴义之间的虚线由本项目叠加，仅表示行程顺序，不代表实际交通路线。页面打开时无需联网加载地图。

## 说明

这是固定内容的浏览页；每位查看者看到相同的五日行程。开发源码在 `src/`，五日数据在 `src/data.ts`。
