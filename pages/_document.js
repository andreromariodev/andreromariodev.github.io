import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Cor da barra de endereço no navegador (Chrome/Android) */}
        <meta name="theme-color" content="#b751d2" />
        
        {/* Cor da barra de status do iOS (Safari) */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Configuração para Windows (pinned site) */}
        <meta name="msapplication-navbutton-color" content="#b751d2" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
