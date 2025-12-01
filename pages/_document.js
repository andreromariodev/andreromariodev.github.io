import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#2A652A" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2A652A" />
        <meta name="msapplication-navbutton-color" content="#2A652A" />
        <meta name="title" content="Frontend Developer | andreromariodev" />
        <meta name="description" content="Desenvolvedor front-end com experiência em performance de aplicações, acesssbilidade ao usuário e manutenibilidade de código." />
        <meta name="keywords" content="portfolio, web development, graphic design, JavaScript, React" />
        <meta name="author" content="Andre Romario" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (para Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Frontend Developer | andreromariodev" />
        <meta property="og:description" content="Desenvolvedor front-end com experiência em performance de aplicações, acesssbilidade ao usuário e manutenibilidade de código." />
        <meta property="og:image" content="https://andreromariodev.github.io/img/novo-linkedin.jpg" />
        <meta property="og:url" content="https://andreromariodev.github.io/portfolio/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards (para compartilhamentos no Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desenvolvedor Front-end | andreromariodev" />
        <meta name="twitter:description" content="Desenvolvedor front-end com experiência em performance de aplicações, acesssbilidade ao usuário e manutenibilidade de código." />
        <meta name="twitter:image" content="https://andreromariodev.github.io/img/novo-linkedin.jpg" />    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
