import NextDocument, { Html,  Head, Main, NextScript } from "next/document"

export default class MyDocument extends NextDocument{
  render(){
    return(
      <Html >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&family=Roboto:wght@900&display=swap" rel="stylesheet"/>
          <title>Ignews</title>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
     </Html>
    )
  }
}