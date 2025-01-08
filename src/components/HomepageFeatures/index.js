import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '核心业务',
    description: (
      <>
        包含订单管理、商品管理、用户管理等核心业务功能的详细说明和技术实现。
      </>
    ),
  },
  {
    title: '供应链管理',
    description: (
      <>
        涵盖仓储管理、物流配送、供应商管理等供应链相关的完整解决方案。
      </>
    ),
  },
  {
    title: '运营支持',
    description: (
      <>
        提供营销活动、客户服务、数据分析等运营支持系统的技术文档。
      </>
    ),
  },
  {
    title: '基础支撑',
    description: (
      <>
        包括系统架构、技术框架、开发规范等基础设施的详细说明。
      </>
    ),
  },
  {
    title: '合规风控',
    description: (
      <>
        涵盖风险控制、合规管理、安全防护等相关技术方案。
      </>
    ),
  },
  {
    title: '资源对接',
    description: (
      <>
        提供第三方服务、API接口、数据对接等资源的集成方案。
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
