import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#43A047" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#43A047" />
        <meta name="msapplication-navbutton-color" content="#43A047" />
        <meta name="title" content="Frontend Developer | andreromariodev" />
        <meta name="description" content="A creative portfolio showcasing my web development and graphic design projects." />
        <meta name="keywords" content="portfolio, web development, graphic design, JavaScript, React" />
        <meta name="author" content="Andre Romario" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (para Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Frontend Developer | andreromariodev" />
        <meta property="og:description" content="A creative portfolio showcasing my web development and graphic design projects." />
        <meta property="og:image" content="https://andreromariodev.github.io/img/andreromario.jpg" />
        <meta property="og:url" content="https://andreromariodev.github.io/portfolio/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards (para compartilhamentos no Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frontend Developer | andreromariodev" />
        <meta name="twitter:description" content="A creative portfolio showcasing my web development and graphic design projects." />
        <meta name="twitter:image" content="https://andreromariodev.github.io/img/andreromario.jpg" />    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
