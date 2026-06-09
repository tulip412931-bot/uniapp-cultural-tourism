# 文旅平台 · uni-app

基于 uni-app (Vue3 + Vite) 的文化旅游 H5 / 小程序 / App 多端应用 demo。
本项目纯前端，**无后端依赖**，所有数据使用 mock 数据。

## 功能模块

| 模块 | 列表页 | 详情页 |
|------|--------|--------|
| 🥾 徒步线路 | `pages/hiking/list` | `pages/hiking/detail` |
| 🎫 景区门票 | `pages/ticket/list` | `pages/ticket/detail` |
| 🏨 酒店民宿 | `pages/hotel/list` | `pages/hotel/detail` |
| 🎨 文创周边 | `pages/cultural/list` | `pages/cultural/detail` |
| 📖 游玩攻略 | `pages/guide/list` | `pages/guide/detail` |

首页包含：顶部 Banner、5 大功能图标区、地图导览、工会福利汇横向滚动、会员推荐、底部 Tabbar。
所有功能图标、底部 Tab 与卡片均可点击跳转到对应模块。

## 技术栈

- **uni-app** 3.x (Vue3 + `<script setup>` + 组合式 API)
- **Vite** 5.x 构建
- **SCSS** 样式
- 多端目标：H5 / 微信小程序 / App / 各小程序平台（参见 `package.json` scripts）

## 运行

### 方式 1：H5 开发模式（推荐，热更新）

```bash
npm install
npm run dev:h5
# 启动后浏览器打开 http://localhost:5173/
```

### 方式 2：H5 生产构建 + 预览

```bash
npm install
npm run build:h5     # 产物在 dist/build/h5
npm run preview:h5   # 自动启动静态服务器 http://localhost:3000
```

> ⚠️ **不要直接双击 `dist/build/h5/index.html`**。Vue SPA 必须通过 HTTP 服务器访问，
> 否则 `file://` 协议会导致页面空白（浏览器无法加载 ES Module）。
> 已通过 `vite.config.js` 的 `base: './'` 让资源路径使用相对引用，
> 但 SPA 仍需 http 服务器才能正确运行。

### 方式 3：微信小程序 / App

```bash
npm run dev:mp-weixin   # 然后用微信开发者工具打开 dist/dev/mp-weixin
npm run dev:app         # 在 HBuilderX 中真机运行
```

## 目录结构

```
src/
├── App.vue
├── main.js
├── manifest.json
├── pages.json              # 所有页面路由配置
├── common/
│   └── data.js             # 5 个模块的 mock 数据
├── pages/
│   ├── index/index.vue     # 文旅平台首页
│   ├── hiking/             # 徒步线路
│   ├── ticket/             # 景区门票
│   ├── hotel/              # 酒店民宿
│   ├── cultural/           # 文创周边
│   └── guide/              # 游玩攻略
└── static/
```

## 设计参考

基于 Calicat 上的文旅平台原型设计：
- 主色：`#1F2937`（深色）
- 背景：`#F3F4F6`
- 辅助色：每个模块独立配色（徒步绿、门票蓝、民宿粉、文创橙、攻略紫）

## License

MIT
