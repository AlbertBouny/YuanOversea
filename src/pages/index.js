import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">和远哥做跨境</h1>
        <p className="hero__subtitle">专业的跨境电商运营知识分享平台</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            开始学习 →
          </Link>
        </div>
      </div>
    </header>
  );
}

function AdSection() {
  const ads = [
    {
      title: '新手入门课程',
      description: '零基础快速入门跨境电商，7天掌握核心知识',
      link: '/docs/course/beginner',
      image: 'img/ads/beginner.jpg',
    },
    {
      title: '实战进阶课程',
      description: '从运营到数据分析，系统提升专业技能',
      link: '/docs/course/advanced',
      image: 'img/ads/advanced.jpg',
    },
    {
      title: '跨境电商社群',
      description: '加入远哥社群，与千名跨境卖家一起交流成长',
      link: 'https://example.com/community',
      image: 'img/ads/community.jpg',
    },
    {
      title: '1对1咨询',
      description: '专业解答困惑，为你的跨境之路保驾护航',
      link: 'mailto:your-email@example.com',
      image: 'img/ads/consulting.jpg',
    },
  ];

  return (
    <section className={styles.adSection}>
      <div className="container">
        <div className="row">
          {ads.map((ad, idx) => (
            <div key={idx} className="col col--3">
              <div className={styles.adCard}>
                <div className={styles.adImageContainer}>
                  <img src={ad.image} alt={ad.title} className={styles.adImage} />
                </div>
                <div className={styles.adContent}>
                  <h3>{ad.title}</h3>
                  <p>{ad.description}</p>
                  <Link
                    className="button button--primary button--block"
                    to={ad.link}>
                    了解更多
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AdSection />
      </main>
    </Layout>
  );
}
