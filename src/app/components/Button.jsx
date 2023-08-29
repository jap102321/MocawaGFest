'use client';
import styles from './Button.module.css';
const Button = () => {
  return (
    <button className={styles.button}>
      <a href='https://api.whatsapp.com/send/?phone=573136449825&text&type=phone_number&app_absent=0'>
        <h4>PULSA PARA</h4>
        <h5>MAS INFORMACIÓN</h5>
      </a>
    </button>
  );
};

export default Button;
