// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '跨境电商运营指南',
  tagline: '专业的跨境电商运营知识库',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://albertbouny.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/YuanOversea/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AlbertBouny', // Usually your GitHub org/user name.
  projectName: 'YuanOversea', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/AlbertBouny/YuanOversea/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '跨境电商运营指南',
        logo: {
          alt: '跨境电商运营指南 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            href: 'https://github.com/AlbertBouny/YuanOversea',
            label: 'GitHub',
            position: 'right',
          },
        ],
        style: 'primary',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '核心业务',
                to: '/docs/category/核心业务',
              },
              {
                label: '供应链管理',
                to: '/docs/category/供应链管理',
              },
              {
                label: '运营支持',
                to: '/docs/category/运营支持',
              },
            ],
          },
          {
            title: '资源',
            items: [
              {
                label: '基础支撑',
                to: '/docs/category/基础支撑',
              },
              {
                label: '合规风控',
                to: '/docs/category/合规风控',
              },
              {
                label: '资源对接',
                to: '/docs/category/资源对接',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AlbertBouny/YuanOversea',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} 跨境电商运营指南`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

module.exports = config;
