'use client';
import styles from './page.module.css';
import Button from './components/Button';

export default function Home() {
  return (
    <>
      <div id='seeMore' className={styles.main_button}>
        <Button />
      </div>
    </>
  );
}
