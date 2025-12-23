import type { DefaultTheme } from 'vitepress'

export const zh = {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/',
  title: '豆腐脑文档',
  description: '中文 - 豆腐脑文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '风扇', link: '/fan' },
      { text: '电池', link: '/battery' },
    ],
    sidebar: [
      {
        text: '风扇',
        items: [
          { text: '产品介绍', link: '/fan/introduce' },
          { text: '使用说明', link: '/fan/guide' },
        ],
      },
      {
        text: '电池',
        items: [
          { text: '详细参数', link: '/battery/parameter' },
          { text: '维护指南', link: '/battery/maintenance' },
        ],
      },
    ],
    footer: {
      message: '© 2025 豆腐脑文档 版权所有',
      copyright: 'ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2025148805号</a>',
    },
    notFound: {
      title: '页面未找到',
      quote: '但如果你不改变方向，继续沿着这条路走下去，那么你最终会到达你要去的地方。',
      linkText: '回到首页'
    },
    // 添加更多界面翻译
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    langMenuLabel: '多语言',
    externalLinkIconLabel: '外部链接'
  },
}
