import '../styles/global.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppProvider from '../context/AppContext';
import Script from 'next/script';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

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
