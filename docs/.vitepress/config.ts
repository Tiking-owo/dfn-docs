import { defineConfig } from 'vitepress'
import { zh, en, ja } from './locales'
import { zhTw } from './locales/zh-tw'
import { searchConfig } from './search'
import { themeConfig } from './theme'

export default defineConfig({
  locales: {
    root: zh,
    en,
    ja,
    'zh-tw': zhTw,
  },

  themeConfig: {
    ...themeConfig,
    search: searchConfig, // 正确引用搜索配置
  },

  vite: {
    server: {
      host: '0.0.0.0',
      port: 5173,
    },
  },

  // 添加自定义CSS
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],
})
