import NextDocument, { Html,  Head, Main, NextScript } from "../../node_modules/next/document"
export default class MyDocument extends NextDocument{
  render(){
    return(
      <Html >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;600;900&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
     </Html>
    )
  }
}