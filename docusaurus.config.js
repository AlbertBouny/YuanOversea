// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '跨境电商运营指南',
  tagline: '完整的跨境电商运营知识体系',
  url: 'https://albertbouny.github.io',
  baseUrl: '/YuanOversea/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AlbertBouny',
  projectName: 'YuanOversea',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/your-org/kuajingdianshang/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '跨境电商知识库',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '目录',
          },
          {
            type: 'dropdown',
            label: '快速导航',
            position: 'left',
            items: [
              {
                label: '1-核心业务',
                to: '/docs/core',
              },
              {
                label: '2-供应链',
                to: '/docs/supply-chain',
              },
              {
                label: '3-运营支持',
                to: '/docs/operation-support',
              },
              {
                label: '4-基础支撑',
                to: '/docs/foundation',
              },
              {
                label: '5-合规风控',
                to: '/docs/compliance',
              },
              {
                label: '6-资源对接',
                to: '/docs/resources',
              },
              {
                label: '7-工具模板',
                to: '/docs/tools',
              },
            ],
          },
          {
            href: 'https://github.com/your-org/kuajingdianshang',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始',
                to: '/docs/intro',
              },
              {
                label: '1-核心业务',
                to: '/docs/core',
              },
              {
                label: '2-供应链',
                to: '/docs/supply-chain',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '3-运营支持',
                to: '/docs/operation-support',
              },
              {
                label: '4-基础支撑',
                to: '/docs/foundation',
              },
              {
                label: '5-合规风控',
                to: '/docs/compliance',
              },
            ],
          },
          {
            title: '链接',
            items: [
              {
                label: '6-资源对接',
                to: '/docs/resources',
              },
              {
                label: '7-工具模板',
                to: '/docs/tools',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/your-org/kuajingdianshang',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} 跨境电商知识库`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
