import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Improve Core Web Vitals with preconnect and prefetch
    const links = [
      { rel: 'preconnect', href: 'https://em.realscout.com' },
      { rel: 'dns-prefetch', href: 'https://em.realscout.com' },
      // Add Google Fonts preconnect if you're using them
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    links.forEach(link => {
      const linkElement = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        if (value !== undefined) {
          linkElement.setAttribute(key, value);
        }
      });
      document.head.appendChild(linkElement);
    });

    // Add accessibility improvements
    document.documentElement.lang = 'en';
    
    // Header scroll animation
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.style.padding = '0.5rem 1.5rem';
          header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
          header.style.padding = '0.8rem 1.5rem';
          header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu toggle
    const setupMobileMenu = () => {
      const menuButton = document.querySelector('.mobileMenuButton');
      if (menuButton) {
        menuButton.addEventListener('click', () => {
          // Implement mobile menu toggle logic here
          console.log('Mobile menu toggled');
        });
      }
    };
    
    // Call after a slight delay to ensure DOM is ready
    setTimeout(setupMobileMenu, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8e1f41" />
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `
        }} />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />
      </Head>

      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="afterInteractive"
        id="realscout-script"
      />

      {/* Add Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />

      <Component {...pageProps} />

      {/* LocalBusiness Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dr. Jan Duffy - Sun City Summerlin REALTOR®",
            "image": "/drjan-logo.png",
            "url": "https://suncitysummerlin.com",
            "telephone": "(702) 718-0043",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "9406 Del Webb Boulevard",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89134",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.2043,
              "longitude": -115.2936
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            }
          }
        `
      }}/>

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
            "logo": "https://suncitysummerlin.com/bhhs-quality-seal-black.png",
            "sameAs": [
              "https://www.facebook.com/DrJanDuffyRealtorCentennialHills/",
              "https://www.instagram.com/drjanduffy/",
              "https://www.linkedin.com/company/lvrmembers/"
            ]
          })
        }}
      />
    </>
  )
}

export default MyApp