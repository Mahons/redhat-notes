import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = 'G-R5D3EJRMG4';

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JK6WYLH9WJ" />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JK6WYLH9WJ');
        `}
      </Script>
    </>
  );
}
