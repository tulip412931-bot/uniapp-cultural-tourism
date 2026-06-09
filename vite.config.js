import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  // 使用相对路径，便于直接打开 dist/build/h5/index.html 或部署到任意子路径
  base: './',
  plugins: [
    uni(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
