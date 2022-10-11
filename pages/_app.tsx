import '../styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppProvider from '../context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
