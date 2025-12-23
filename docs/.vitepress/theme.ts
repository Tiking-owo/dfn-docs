import type { DefaultTheme } from 'vitepress'

export const themeConfig: DefaultTheme.Config = {
  logo: '/logo.png',
  socialLinks: [
    { icon: 'taobao', link: 'https://shop151485374.taobao.com/' },
    { icon: 'xiaohongshu', link: 'https://www.xiaohongshu.com/user/profile/5d3bc43a0000000011035727' },
    { icon: 'qq', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=XQAYtdxsujVzYMfopxCZhb-Efdq6qTIJ&authKey=Qz76O6YqOj3NE2ebzjlFDJe3ibJF3PSGDdsAxfC3vNbIb34gi+vNevtti2cq7cxo&noverify=0&personal_qrcode_source=1001' },
  ],
  footer: {
    message: '© 2025 豆腐脑文档 版权所有',
    copyright: 'ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2025148805号</a>',
  },
  outline: {
    label: '本页大纲'
  },
  externalLinkIcon: true,
}
