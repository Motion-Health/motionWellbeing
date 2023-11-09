import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://www.googletagmanager.com" />
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
            type="text/javascript"
            async
            dangerouslySetInnerHTML={{
              __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"G-B3HKLTG9M3")`,
            }}
          />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/gtag/js?id=G-QY7KK1XGCT"
              height="0"
              width="0"
              className="invisible hidden"
            ></iframe>
          </noscript>
        </Head>

        <body>
          <Main />
          <NextScript />
          <script
            defer
            src="https://app.termly.io/embed.min.js"
            data-auto-block="off"
            data-website-uuid="cb23cb1a-800f-4e1c-8be6-2a04da33755f"
            strategy="lazyOnload"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
