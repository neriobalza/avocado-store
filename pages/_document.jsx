import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* fav icons */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* web fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        ></link>
        {/* style sheet */}
        {/* scrips js */}
        <script defer src="https://app.embed.im/snow.js"></script>
        <script src="https://unpkg.com/scrollreveal"></script>
      </Head>
      <body className="my-class">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
