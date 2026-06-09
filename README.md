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

```bash
# 安装依赖
npm install

# H5 开发模式
npm run dev:h5

# H5 生产构建（产物在 dist/build/h5）
npm run build:h5

# 微信小程序（需安装微信开发者工具，并把 dist/dev/mp-weixin 导入）
npm run dev:mp-weixin
```

H5 构建完成后可使用任意静态文件服务器预览：

```bash
cd dist/build/h5 && python3 -m http.server 3000
# 浏览器访问 http://localhost:3000/
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
