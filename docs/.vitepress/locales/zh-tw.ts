import type { DefaultTheme } from 'vitepress'

export const zhTw = {
  label: '繁體中文',
  lang: 'zh-TW',
  link: '/zh-tw/',
  title: '豆腐腦文檔',
  description: '繁體中文 - 豆腐腦文檔',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/zh-tw/' },
      { text: '風扇', link: '/zh-tw/fan/' },
      { text: '電池', link: '/zh-tw/battery/' },
    ],
    sidebar: [
      {
        text: '風扇',
        items: [
          { text: '產品介紹', link: '/zh-tw/fan/introduce' },
          { text: '使用說明', link: '/zh-tw/fan/guide' },
        ],
      },
      {
        text: '電池',
        items: [
          { text: '詳細參數', link: '/zh-tw/battery/parameter' },
          { text: '維護指南', link: '/zh-tw/battery/maintenance' },
        ],
      },
    ],
    footer: {
      message: '© 2025 豆腐腦文檔 版權所有',
      copyright: 'ICP備案號：<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2025148805号</a>',
    },
    notFound: {
      title: '頁面未找到',
      quote: '但如果你不改變方向，繼續沿著這條路走下去，那麼你最終會到達你要去的地方。',
      linkText: '回到首頁'
    },
    // 額外的UI翻譯
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
    skipToContentLabel: '跳到內容',
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    outline: {
      label: '本頁大綱'
    },
    lastUpdated: {
      text: '最後更新'
    },
    langMenuLabel: '更改語言',
    externalLinkIconLabel: '外部連結'
  },
}
