'use client';
import styles from './Button.module.css';
const Button = () => {
  return (
    <button className={styles.button}>
      <a href='#'>
        <h2>PULSA PARA</h2>
        <h3>MAS INFORMACIÓN</h3>
      </a>
    </button>
  );
};

export default Button;
