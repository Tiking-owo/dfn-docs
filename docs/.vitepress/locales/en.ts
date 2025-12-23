import type { DefaultTheme } from 'vitepress'

export const en = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  title: 'Tofu Nao Docs',
  description: 'Tofu Nao - English Description',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Fan', link: '/en/fan/' },
      { text: 'Battery', link: '/en/battery/' },
    ],
    sidebar: [
      {
        text: 'Fan',
        items: [
          { text: 'Introduction', link: '/en/fan/introduce' },
          { text: 'User Guide', link: '/en/fan/guide' },
        ],
      },
      {
        text: 'Battery',
        items: [
          { text: 'Design', link: '/en/battery/parameter' },
          { text: 'Maintenance', link: '/en/battery/maintenance' },
        ],
      },
    ],
    footer: {
      message: '© 2025 Tofu Nao Docs. All rights reserved.',
      copyright: 'ICP Record: <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2025148805号</a>',
    },
    notFound: {
      title: 'Page Not Found',
      quote: 'But if you do not change direction, you may end up where you are heading.',
      linkText: 'Go Home'
    },
    // Add more UI translations
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
    skipToContentLabel: 'Skip to content',
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    outline: {
      label: 'On this page'
    },
    lastUpdated: {
      text: 'Last updated'
    },
    langMenuLabel: 'Change language',
    externalLinkIconLabel: 'External link'
  },
}
