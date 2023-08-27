'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href='#seeMore'>
        <button className={styles.goDownBtn}>
          <h3>Ver más información ⬇️</h3>
        </button>
      </Link>

      <div id='seeMore' className={styles.main_button}>
        <Button />
      </div>
    </>
  );
}
