import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://app.termly.io" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
            />
          </noscript>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3841592,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TFPMRG87SG"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-TFPMRG87SG');
              `,
            }}
          />
          <meta
            name="og:description"
            content="Telling stories that move people. Motion is a marketing agency that helps brands connect with their audience through powerful storytelling."
          />
          <meta
            name="og:image"
            content="https://motion.org.uk/assets/MotionLogo.png
      "
          />
          <meta name="og:url" content="https://motion.org.uk/" />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script
            defer
            src="https://app.termly.io/embed.min.js"
            data-auto-block="off"
            data-website-uuid="cb23cb1a-800f-4e1c-8be6-2a04da33755f"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
