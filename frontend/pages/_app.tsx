import '../styles/globals.css';
import styles from '../styles/App.module.scss';
import type { AppProps } from 'next/app';

import Header from '../src/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
