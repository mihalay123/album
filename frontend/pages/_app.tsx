import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Header from '../src/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
