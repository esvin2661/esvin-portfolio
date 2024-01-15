import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import RootLayout from './layout';
import '../global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (!router.isReady) {
    console.log('Router is not ready!');
    router.push("/");
  }

  return (
    <ChakraProvider>
      <Head>
        <title>Esvin RUiz</title>
      </Head>
      <CSSReset />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  );
}

export default MyApp;