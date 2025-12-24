# Usage Instructions for Tofu Nao Docs

[中文](README.md) | English

## Project Overview
This is a VitePress-based multilingual documentation site for 【豆腐脑文档】 (Tofu Nao Docs) products, focusing on fans and batteries. The site supports Chinese (zh-CN, zh-TW), English (en), and Japanese (ja) locales.

## Architecture
- **Framework**: VitePress 1.6.4 with TypeScript
- **Structure**: 
  - Root docs in `docs/` folder
  - Locale-specific content in `docs/{locale}/` subfolders
  - Configuration in `docs/.vitepress/config.ts`
- **Internationalization**: Each locale has independent navigation, sidebar, and footer configurations
- **Assets**: Static files in `docs/public/` (logo.png, favicon.ico)

## Key Files
- `docs/.vitepress/config.ts`: Main configuration file importing modular components
- `docs/.vitepress/locales/`: Directory containing locale-specific configurations
  - `zh.ts`: Simplified Chinese locale configuration
  - `en.ts`: English locale configuration  
  - `ja.ts`: Japanese locale configuration
  - `zh-tw.ts`: Traditional Chinese locale configuration
  - `index.ts`: Exports all locale configurations
- `docs/.vitepress/theme.ts`: Shared theme configuration
- `docs/.vitepress/search.ts`: Search functionality configuration with i18n
- `docs/{locale}/index.md`: Home pages using VitePress home layout
- `docs/public/_redirects`: Netlify redirects for language routing based on browser language

## Development Workflow
### Preview
```bash
git clone https://github.com/Tiking-owo/dfn-docs.git

npm install

npm run docs:dev
```

- **Local Development**: `npm run docs:dev` (runs on http://localhost:5173)
- **Build**: `npm run docs:build`
- **Preview**: `npm run docs:preview`
- **Serve**: `npm run docs:serve`

## Content Patterns
- **Home Pages**: Use `layout: home` with hero section, action buttons, and features list
- **Navigation**: Defined per locale in config.ts with nav and sidebar arrays
- **Product Sections**: 
  - Fan: introduce.md, guide.md
  - Battery: parameter.md, maintenance.md
- **Links**: Internal links use relative paths (e.g., `/fan/introduce`)

## Conventions
- **File Naming**: index.md for section homes, descriptive names for sub-pages
- **Locale Folders**: Mirror structure across en/, zh/, ja/
- **Social Links**: Taobao shop, Xiaohongshu, QQ group integrated in theme config
- **Footer**: Copyright with ICP registration number (浙ICP备2025148805号)

## Deployment
- Hosted on Netlify with language-based redirects
- Server configured for host 0.0.0.0:5173 with allowedHosts: ['tiking.top']

## Adding New Content
1. Create markdown files in appropriate locale folders
2. Update sidebar in the corresponding locale file in `docs/.vitepress/locales/` for each locale
3. Ensure consistent navigation structure across languages
4. Test with `npm run docs:dev` and verify links

## Configuration Maintenance
- **Locale Configuration**: Edit individual locale files in `docs/.vitepress/locales/`
- **Theme Configuration**: Modify `docs/.vitepress/theme.ts` for shared theme settings
- **Search Configuration**: Update `docs/.vitepress/search.ts` for search functionality
- **Main Config**: `docs/.vitepress/config.ts` imports all modular configurations

## Translation Maintenance
- Keep content synchronized across zh/, zh-tw/, en/, ja/ folders
- Update navigation labels and sidebar text for each locale
- Maintain consistent URL structures for cross-language linking

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.