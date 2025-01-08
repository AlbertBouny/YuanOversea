import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            开始学习
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center padding-horiz--md">
              <h3>核心业务</h3>
              <p>产品开发、营销推广、订单履约等核心业务流程指南</p>
              <Link
                className="button button--secondary button--sm"
                to="/docs/category/核心业务">
                了解更多
              </Link>
            </div>
          </div>
          <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center padding-horiz--md">
              <h3>供应链管理</h3>
              <p>供应商管理、采购管理、仓储物流等供应链体系指南</p>
              <Link
                className="button button--secondary button--sm"
                to="/docs/category/供应链管理">
                了解更多
              </Link>
            </div>
          </div>
          <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center padding-horiz--md">
              <h3>运营支持</h3>
              <p>客户服务、数据分析、系统支持等运营支持体系指南</p>
              <Link
                className="button button--secondary button--sm"
                to="/docs/category/运营支持">
                了解更多
              </Link>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center padding-horiz--md">
              <h3>基础支撑</h3>
              <p>IT系统、财务管理、人力资源等基础支撑体系指南</p>
              <Link
                className="button button--secondary button--sm"
                to="/docs/category/基础支撑">
                了解更多
              </Link>
            </div>
          </div>
          <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center padding-horiz--md">
              <h3>合规风控</h3>
              <p>平台规则、法律法规、风险控制等合规体系指南</p>
              <Link
                className="button button--secondary button--sm"
                to="/docs/category/合规风控">
                了解更多
              </Link>
            </div>
          </div>
          <div className={clsx('col col--4', styles.featureCard)}>
            <div className="text--center padding-horiz--md">
              <h3>资源对接</h3>
              <p>供应商资源、服务商资源、平台资源等对接指南</p>
              <Link
                className="button button--secondary button--sm"
                to="/docs/category/资源对接">
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="跨境电商运营知识库，包含产品、营销、供应链、运营等全方位指南">
      <HomepageHeader />
      <main>
        <HomepageContent />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
