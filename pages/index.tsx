import { useEffect, useState } from 'react';
import type { NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import Script from 'next/script';

const Home: NextPage = () => {
  const [realScoutLoaded, setRealScoutLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Set a small delay to ensure hydration is complete before loading RealScout
    const timer = setTimeout(() => {
      setRealScoutLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sun City Summerlin Las Vegas | 55+ Community | Dr. Jan Duffy</title>
        <meta name="description" content="Sun City Summerlin is Las Vegas' premier 55+ community with stunning homes, golf courses, and amenities. Dr. Jan Duffy specializes in Sun City Summerlin real estate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* New Enhanced Hero */}
        <EnhancedHero />

        {/* RealScout Listings Section */}
        <div className={styles.listingsSection}>
          {realScoutLoaded && (
            <div suppressHydrationWarning>
              <realscout-office-listings 
                agent-encoded-id="QWdlbnQtMjI1MDUw" 
                sort-order="NEWEST" 
                listing-status="For Sale" 
                property-types="SFR,MF" 
                price-min="800000" 
                price-max="4000000">
              </realscout-office-listings>
            </div>
          )}
        </div>

        {/* Feature Section */}
        <FeatureSection />

        {/* Property Search */}
        <PropertySearch />

        {/* Testimonial Section */}
        <TestimonialSection />
      </main>

      {/* RealScout script */}
      <Script 
        id="realscout-listings-init" 
        strategy="lazyOnload"
      >
        {`
          document.addEventListener('realscout-web-components-ready', () => {
            const container = document.querySelector('.${styles.listingsSection}');
            if (container) {
              const listingsElement = document.createElement('realscout-office-listings');
              if (listingsElement && listingsElement.setAttribute) {
                listingsElement.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
                listingsElement.setAttribute('sort-order', 'NEWEST');
                listingsElement.setAttribute('listing-status', 'For Sale');
                listingsElement.setAttribute('property-types','SFR,MF');
                listingsElement.setAttribute('price-min', '800000');
                listingsElement.setAttribute('price-max', '4000000');
                container.appendChild(listingsElement);
              }
            }
          });
        `}
      </Script>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
            <p>Dr. Jan Duffy <br />BHHS Nevada Properties</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4>Quick Links</h4>
              <Link href="/search">Search</Link>
              <Link href="/properties">Properties</Link>
              <Link href="/community">Community</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>Services</h4>
              <Link href="/services/buying-agent">Buying</Link>
              <Link href="/services/selling-agent">Selling</Link>
              <Link href="/services/relocation">Relocation</Link>
              <Link href="/services/luxury-homes">Luxury Homes</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>Resources</h4>
              <Link href="/blog">Blog</Link>
              <Link href="/map">Community Map</Link>
              <Link href="/testimonials">Testimonials</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Dr. Jan Duffy. All rights reserved.</p>
          <p>BHHS Nevada Properties | License #12345</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// Dummy components to avoid errors. Replace with your actual components
const EnhancedHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Sun City Summerlin Real Estate</h1>
        <h2 className={styles.subtitle}>Las Vegas&apos; Premier 55+ Community</h2>
        <p className={styles.description}>
          Find your perfect home in this beautiful active adult community with Dr. Jan Duffy, 
          your Sun City Summerlin real estate specialist.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/search" className={styles.primaryButton}>
            Search Homes
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Contact Dr. Jan
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Why Choose Sun City Summerlin?</h2>
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Active Lifestyle</h3>
          <p>Four golf courses, multiple community centers, pools, and countless activities.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Beautiful Views</h3>
          <p>Stunning mountain and Las Vegas valley views from many locations.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Convenient Location</h3>
          <p>Minutes from shopping, dining, and entertainment with easy access to Las Vegas.</p>
        </div>
      </div>
    </section>
  );
};

const PropertySearch = () => {
  return (
    <section className={styles.propertiesSection}>
      <h2 className={styles.sectionTitle}>Featured Properties</h2>
      <div className={styles.propertyGrid}>
        <div className={styles.propertyCard}>
          <img src="/property1.jpg" alt="Sun City Summerlin Home" className={styles.propertyImage} />
          <h3>Beautiful Single Story</h3>
          <p>2 bed | 2 bath | 1,400 sq ft</p>
          <Link href="/properties" className={styles.propertyLink}>
            View Details
          </Link>
        </div>
        <div className={styles.propertyCard}>
          <img src="/property2.jpg" alt="Sun City Summerlin Home" className={styles.propertyImage} />
          <h3>Golf Course Home</h3>
          <p>3 bed | 2.5 bath | 1,800 sq ft</p>
          <Link href="/properties" className={styles.propertyLink}>
            View Details
          </Link>
        </div>
        <div className={styles.propertyCard}>
          <img src="/property3.jpg" alt="Sun City Summerlin Home" className={styles.propertyImage} />
          <h3>Luxury Villa</h3>
          <p>2 bed | 2 bath | 1,600 sq ft</p>
          <Link href="/properties" className={styles.propertyLink}>
            View Details
          </Link>
        </div>
      </div>
      <div className={styles.viewAllContainer}>
        <Link href="/properties" className={styles.viewAllButton}>
          View All Properties
        </Link>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>What My Clients Say</h2>
      <div className={styles.testimonials}>
        <div className={styles.testimonial}>
          <p>"Dr. Jan made our transition to Sun City Summerlin so smooth. Her knowledge of the community is impressive!"</p>
          <p className={styles.testimonialAuthor}>- John & Mary S.</p>
        </div>
        <div className={styles.testimonial}>
          <p>"As a senior buyer, I appreciated Dr. Jan's patience and expertise in finding a home that met all my accessibility needs."</p>
          <p className={styles.testimonialAuthor}>- Robert T.</p>
        </div>
      </div>
      <div className={styles.viewAllContainer}>
        <Link href="/testimonials" className={styles.viewAllButton}>
          Read More Testimonials
        </Link>
      </div>
    </section>
  );
};