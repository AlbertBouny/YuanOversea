import React from 'react';
import DocItem from '@theme-original/DocItem';
import styles from './styles.module.css';
import { useDoc } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import Admonition from '@theme/Admonition';

export default function DocItemWrapper(props) {
  const { metadata, frontMatter } = useDoc();
  const location = useLocation();

  // 获取当前文档的分类
  const category = location.pathname.split('/')[2];

  // 根据分类设置不同的样式类
  const categoryClass = category ? styles[category] : '';

  return (
    <div className={`${styles.docWrapper} ${categoryClass}`}>
      {frontMatter.description && (
        <div className={styles.docDescription}>
          <Admonition type="info">
            <p>{frontMatter.description}</p>
          </Admonition>
        </div>
      )}
      <div className={styles.docMeta}>
        {metadata.tags && metadata.tags.length > 0 && (
          <div className={styles.docTags}>
            {metadata.tags.map((tag) => (
              <span key={tag.label} className={styles.docTag}>
                {tag.label}
              </span>
            ))}
          </div>
        )}
        {metadata.lastUpdatedAt && (
          <div className={styles.docLastUpdated}>
            最后更新：{new Date(metadata.lastUpdatedAt).toLocaleDateString()}
          </div>
        )}
      </div>
      <DocItem {...props} />
      <div className={styles.docFooter}>
        <div className={styles.docNav}>
          {metadata.previous && (
            <a href={metadata.previous.permalink} className={styles.docNavLink}>
              ← {metadata.previous.title}
            </a>
          )}
          {metadata.next && (
            <a href={metadata.next.permalink} className={styles.docNavLink}>
              {metadata.next.title} →
            </a>
          )}
        </div>
        <div className={styles.docEdit}>
          <a
            href={`https://github.com/your-org/cross-border-ecommerce/edit/main/${metadata.source}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.docEditLink}>
            编辑此页
          </a>
        </div>
      </div>
    </div>
  );
}
