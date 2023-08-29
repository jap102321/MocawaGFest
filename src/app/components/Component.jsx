import React, { useState } from 'react';
import styles from './MyComponent.module.css';
import Button from './Button';
import Image from 'next/image';

const Component = ({ alternate }) => {
  const [showAlternate, setShowAlternate] = useState(false);
  const componentClasses = `${styles.header} ${
    alternate || showAlternate ? styles.alternateBg : ''
  }`;

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.goDownBtn}>
          <Image
            src='/img/whatsapp-icon.svg'
            width={32}
            height={32}
            alt='Logo whatsapp'
          />
        </button>
      </div>
      <div className={styles.secondButton}>
        <button className={styles.goDownBtnTwo}>
          <Image src='/img/logo2.svg' width={97} height={100} alt='more info' />
        </button>
      </div>
    </div>
  );
};

export default Component;
