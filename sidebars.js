/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '核心业务',
      items: [
        'core/index',
      ],
    },
    {
      type: 'category',
      label: '供应链',
      items: [
        'supply-chain/index',
      ],
    },
    {
      type: 'category',
      label: '运营支持',
      items: [
        'operation-support/index',
      ],
    },
    {
      type: 'category',
      label: '基础支撑',
      items: [
        'foundation/index',
      ],
    },
    {
      type: 'category',
      label: '合规风控',
      items: [
        'compliance/index',
      ],
    },
    {
      type: 'category',
      label: '资源对接',
      items: [
        'resources/index',
      ],
    },
    {
      type: 'category',
      label: '工具模板',
      items: [
        'tools/index',
      ],
    },
  ],
};

module.exports = sidebars;
