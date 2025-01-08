// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '和远哥做跨境',
  tagline: '专业的跨境电商运营知识分享平台',
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
        title: '和远哥做跨境',
        logo: {
          alt: '和远哥做跨境 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/category/temu',
            label: 'Temu',
            position: 'left',
          },
          {
            to: '/docs/category/tiktok',
            label: 'TikTok',
            position: 'left',
          },
          {
            to: '/docs/category/amazon',
            label: 'Amazon',
            position: 'left',
          },
          {
            to: '/docs/category/shopee',
            label: 'Shopee',
            position: 'left',
          },
          {
            to: '/docs/category/lazada',
            label: 'Lazada',
            position: 'left',
          },
          {
            to: '/docs/category/aliexpress',
            label: 'AliExpress',
            position: 'left',
          },
          {
            to: '/docs/category/wish',
            label: 'Wish',
            position: 'left',
          },
          {
            href: 'https://space.bilibili.com/your-channel',
            label: 'B站',
            position: 'right',
          },
          {
            href: 'https://www.xiaohongshu.com/your-profile',
            label: '小红书',
            position: 'right',
          },
          {
            href: 'https://www.douyin.com/your-profile',
            label: '抖音',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '平台',
            items: [
              {
                label: 'Temu',
                to: '/docs/category/temu',
              },
              {
                label: 'TikTok',
                to: '/docs/category/tiktok',
              },
              {
                label: 'Amazon',
                to: '/docs/category/amazon',
              },
            ],
          },
          {
            title: '课程',
            items: [
              {
                label: '新手入门',
                to: '/docs/course/beginner',
              },
              {
                label: '进阶课程',
                to: '/docs/course/advanced',
              },
              {
                label: '实战案例',
                to: '/docs/course/cases',
              },
            ],
          },
          {
            title: '合作',
            items: [
              {
                label: '商务合作',
                href: 'mailto:your-email@example.com',
              },
              {
                label: '加入社群',
                href: 'https://example.com/community',
              },
              {
                label: '关于我们',
                to: '/about',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} 和远哥做跨境. All rights reserved.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
