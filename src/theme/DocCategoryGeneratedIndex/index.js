import React from 'react';
import DocCategoryGeneratedIndex from '@theme-original/DocCategoryGeneratedIndex';
import styles from './styles.module.css';
import { useLocation } from '@docusaurus/router';

export default function DocCategoryGeneratedIndexWrapper(props) {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const categoryClass = category ? styles[category] : '';

  return (
    <div className={`${styles.categoryWrapper} ${categoryClass}`}>
      <div className={styles.categoryHeader}>
        <h1 className={styles.categoryTitle}>{props.categoryGeneratedIndex.title}</h1>
        {props.categoryGeneratedIndex.description && (
          <p className={styles.categoryDescription}>{props.categoryGeneratedIndex.description}</p>
        )}
      </div>
      <div className={styles.categoryContent}>
        <DocCategoryGeneratedIndex {...props} />
      </div>
    </div>
  );
}
