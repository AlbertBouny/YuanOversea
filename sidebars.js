// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '核心业务',
      items: [
        'core/overview',
        {
          type: 'category',
          label: '平台运营',
          items: [
            'core/platforms/overview',
            {
              type: 'category',
              label: '亚马逊',
              items: [
                'core/platforms/amazon/introduction',
                'core/platforms/amazon/policies',
                'core/platforms/amazon/product-management',
                'core/platforms/amazon/store-operations',
                'core/platforms/amazon/marketing',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '营销推广',
          items: [
            'core/marketing/strategy',
            'core/marketing/advertising',
          ],
        },
        {
          type: 'category',
          label: '订单履约',
          items: [
            'core/order/fulfillment',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '供应链管理',
      items: [
        'supply-chain/overview',
      ],
    },
    {
      type: 'category',
      label: '运营支持',
      items: [
        'operation-support/overview',
      ],
    },
    {
      type: 'category',
      label: '基础支撑',
      items: [
        'foundation/overview',
      ],
    },
    {
      type: 'category',
      label: '合规风控',
      items: [
        'compliance/overview',
      ],
    },
    {
      type: 'category',
      label: '资源对接',
      items: [
        'resources/overview',
      ],
    },
  ],
};

module.exports = sidebars;
