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
            width={24}
            height={24}
            alt='wsp-logo'
          />
        </button>
      </div>
      <div className={styles.secondButton}>
        <Button />
      </div>
    </div>
  );
};

export default Component;
