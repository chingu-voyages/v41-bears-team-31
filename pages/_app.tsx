import '../styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppProvider from '../context/AppContext';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/67b9018f13.js"
        strategy="lazyOnload"
        onLoad={() => {}}
      />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
