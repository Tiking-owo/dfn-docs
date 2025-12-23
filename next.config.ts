import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'zh','jp'], // 支持的语言列表
    defaultLocale: 'zh',    // 默认语言
  },
};

export default withNextIntl(nextConfig);