import styles from './page.module.css';
import { Montserrat } from 'next/font/google';
import './globals.css';
const montse = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'GastroFest',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${styles.backgroundContainer} ${montse.className}`}>
        {children}
      </body>
    </html>
  );
}
