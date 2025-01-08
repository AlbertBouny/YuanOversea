import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '核心业务',
    description: (
      <>
        包含产品开发、营销推广、订单履约等核心业务流程的详细指南，
        帮助你快速掌握跨境电商运营的关键环节。
      </>
    ),
  },
  {
    title: '供应链管理',
    description: (
      <>
        从供应商管理、采购管理到仓储物流，全面的供应链管理体系，
        助你打造高效的跨境电商供应链。
      </>
    ),
  },
  {
    title: '运营支持',
    description: (
      <>
        客户服务、售后支持、数据分析等运营支持体系的建设指南，
        让你的跨境电商业务运转更加顺畅。
      </>
    ),
  },
  {
    title: '基础支撑',
    description: (
      <>
        IT系统、财务管理、人力资源等基础支撑体系的搭建方案，
        为你的跨境电商业务提供坚实基础。
      </>
    ),
  },
  {
    title: '合规风控',
    description: (
      <>
        平台规则、法律法规、风险控制等合规管理指南，
        帮助你的业务在合规的框架下健康发展。
      </>
    ),
  },
  {
    title: '资源对接',
    description: (
      <>
        供应商、服务商、平台资源等对接指南，
        助你快速找到合适的合作伙伴，加速业务发展。
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
