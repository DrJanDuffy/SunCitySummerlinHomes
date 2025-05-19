
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Analytics tracking (simplified version)
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Track page views when route changes
      console.log(`Page view: ${url}`);
      // Here you would normally send to your analytics service
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `
        }} />
      </Head>
      
      {/* Load critical RealScout script */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="afterInteractive"
        id="realscout-script"
      />
      
      {/* Structured data for organization */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Berkshire Hathaway HomeServices Nevada",
            "url": "https://www.bhhsnv.com/",
            "logo": "https://suncitysummerlin.com/bhhs-logo.png",
            "sameAs": [
              "https://www.facebook.com/DrJanDuffyRealtorCentennialHills/",
              "https://www.instagram.com/drjanduffy/",
              "https://www.linkedin.com/company/lvrmembers/"
            ]
          })
        }}
      />
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
