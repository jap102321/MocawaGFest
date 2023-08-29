'use client';
import styles from './page.module.css';
import Button from './components/Button';
import Component from './components/Component';

export default function Home() {
  return (
    <>
      <Component />
      <div className={styles.secondButton}>
        <Button />
      </div>
    </>
  );
}
