import type { DefaultTheme } from 'vitepress'

export const ja = {
  label: '日本語',
  lang: 'ja',
  link: '/ja/',
  title: '豆腐脳ドキュメント',
  description: '日本語 - 豆腐脳ドキュメント',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/ja/' },
      { text: 'ファン', link: '/ja/fan/' },
      { text: 'バッテリー', link: '/ja/battery/' },
    ],
    sidebar: [
      {
        text: 'ファン',
        items: [
          { text: '製品紹介', link: '/ja/fan/introduce' },
          { text: '使用説明', link: '/ja/fan/guide' },
        ],
      },
      {
        text: 'バッテリー',
        items: [
          { text: '設計原理', link: '/ja/battery/parameter' },
          { text: 'メンテナンス', link: '/ja/battery/maintenance' },
        ],
      },
    ],
    footer: {
      message: '© 2025 豆腐脳ドキュメント 著作権所有',
      copyright: 'ICP登録番号：<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2025148805号</a>',
    },
    notFound: {
      title: 'ページが見つかりません',
      quote: 'しかし、方向を変えなければ、最終的に行き着く場所は自分が向かっている場所です。',
      linkText: 'ホームに戻る'
    },
    // 追加のUI翻訳
    returnToTopLabel: 'トップに戻る',
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え',
    skipToContentLabel: 'コンテンツにスキップ',
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },
    outline: {
      label: 'このページ内'
    },
    lastUpdated: {
      text: '最終更新'
    },
    langMenuLabel: '言語変更',
    externalLinkIconLabel: '外部リンク'
  },
}
