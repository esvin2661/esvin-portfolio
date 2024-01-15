import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
        <Head>
          <link rel="icon" href="/favicon-16x16" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;