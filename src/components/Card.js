import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Card.module.css';

export function Card({ title, description, to }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Link>
  );
}
