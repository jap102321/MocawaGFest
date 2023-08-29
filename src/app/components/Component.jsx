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
        <a href='https://api.whatsapp.com/send/?phone=573136449825&text&type=phone_number&app_absent=0'>
          <button className={styles.goDownBtn}>
            <Image
              src='/img/whatsapp-icon.svg'
              width={97}
              height={100}
              alt='Logo whatsapp'
            />
          </button>
        </a>
      </div>
      <div className={styles.secondButton}>
        <a href='#'>
          <button className={styles.goDownBtnTwo}>
            <Image
              src='/img/logo2.svg'
              width={97}
              height={100}
              alt='more info'
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Component;
