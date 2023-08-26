'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/Button';

export default function Home() {
  return (
    <>
      <div className={styles.buttonContTop}>
        <Button />
      </div>
      <div className={styles.buttonContBot}>
        <Button />
      </div>
    </>
  );
}
