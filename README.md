# 豆腐脑文档的使用说明

中文 | [English](README_en.md)

## 项目概述
这是基于 VitePress 的多语言文档站点，为【豆腐脑文档】 (Tofu Nao Docs) 产品服务，主要关注风扇和电池。该站点支持中文 (zh-CN, zh-TW)、英文 (en) 和日文 (ja) 语言环境。

## 架构
- **框架**: VitePress 1.6.4 with TypeScript
- **结构**: 
  - 根文档在 `docs/` 文件夹
  - 特定语言的内容在 `docs/{locale}/` 子文件夹
  - 配置在 `docs/.vitepress/config.ts`
- **国际化**: 每个语言环境有独立的导航、侧边栏和页脚配置
- **资产**: 静态文件在 `docs/public/` (logo.png, favicon.ico)

## 关键文件
- `docs/.vitepress/config.ts`: 导入模块化组件的主配置文件
- `docs/.vitepress/locales/`: 包含特定语言配置的目录
  - `zh.ts`: 简体中文语言配置
  - `en.ts`: 英文语言配置  
  - `ja.ts`: 日文语言配置
  - `zh-tw.ts`: 繁体中文语言配置
  - `index.ts`: 导出所有语言配置
- `docs/.vitepress/theme.ts`: 共享主题配置
- `docs/.vitepress/search.ts`: 带 i18n 的搜索功能配置
- `docs/{locale}/index.md`: 使用 VitePress home 布局的主页
- `docs/public/_redirects`: 基于浏览器语言的 Netlify 重定向，用于语言路由

## 开发工作流
### 预览
```bash
git clone https://github.com/Tiking-owo/dfn-docs.git

npm install

npm run docs:dev
```

- **本地开发**: `npm run docs:dev` (在 http://localhost:5173 上运行)
- **构建**: `npm run docs:build`
- **预览**: `npm run docs:preview`
- **服务**: `npm run docs:serve`

## 内容模式
- **主页**: 使用 `layout: home` 与英雄部分、操作按钮和功能列表
- **导航**: 在 config.ts 中按语言定义，使用 nav 和 sidebar 数组
- **产品部分**: 
  - 风扇: introduce.md, guide.md
  - 电池: parameter.md, maintenance.md
- **链接**: 内部链接使用相对路径 (例如 `/fan/introduce`)

## 约定
- **文件命名**: index.md 用于部分主页，描述性名称用于子页面
- **语言文件夹**: 跨 en/, zh/, ja/ 镜像结构
- **社交链接**: 淘宝店铺、小红书、QQ 群集成在主题配置中
- **页脚**: 带有 ICP 注册号和版权信息
## 部署
- 在 Netlify 上托管，具有基于语言的重定向
- 服务器配置为 host 0.0.0.0:5173
## 添加新内容
1. 在适当的语言文件夹中创建 markdown 文件
2. 为每个语言更新 `docs/.vitepress/locales/` 中相应语言文件中的侧边栏
3. 确保跨语言的导航结构一致
4. 使用 `npm run docs:dev` 测试并验证链接

## 配置维护
- **语言配置**: 编辑 `docs/.vitepress/locales/` 中的单个语言文件
- **主题配置**: 修改 `docs/.vitepress/theme.ts` 以获取共享主题设置
- **搜索配置**: 更新 `docs/.vitepress/search.ts` 以获取搜索功能
- **主配置**: `docs/.vitepress/config.ts` 导入所有模块化配置

## 翻译维护
- 保持 zh/, zh-tw/, en/, ja/ 文件夹中的内容同步
- 为每个语言更新导航标签和侧边栏文本
- 维护一致的 URL 结构以进行跨语言链接

## 开源协议
本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件以获取详情。