
import type { NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import PageTransition from '../components/PageTransition';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Initialize AOS animations if needed
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.refresh();
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sun City Summerlin Las Vegas | 55+ Community | Dr. Jan Duffy</title>
        <meta name="description" content="Sun City Summerlin is Las Vegas' premier 55+ community with stunning homes, golf courses, and amenities. Dr. Jan Duffy specializes in Sun City Summerlin real estate." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent} data-aos="fade-up">
            <h1>Sun City Summerlin</h1>
            <h2>Las Vegas&apos; Premier 55+ Community</h2>
            <p>Discover resort-style living in the heart of Las Vegas</p>
            <div className={styles.heroCta}>
              <Link href="/properties" className={styles.primaryButton}>
                View Properties
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Contact Dr. Jan
              </Link>
            </div>
          </div>
        </div>

        <section className={styles.featureSection}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard} data-aos="fade-up" data-aos-delay="100">
              <Image 
                src="/property1.jpg" 
                alt="Beautiful home in Sun City Summerlin" 
                width={400} 
                height={300}
                className={styles.featureImage}
              />
              <h3>Premium Properties</h3>
              <p>Explore beautiful homes designed for active adults</p>
              <Link href="/properties" className={styles.featureLink}>
                Browse Listings
              </Link>
            </div>

            <div className={styles.featureCard} data-aos="fade-up" data-aos-delay="200">
              <Image 
                src="/golf-course.jpg" 
                alt="Golf course in Sun City Summerlin" 
                width={400} 
                height={300}
                className={styles.featureImage}
              />
              <h3>World-Class Amenities</h3>
              <p>Enjoy golf courses, pools, and community centers</p>
              <Link href="/amenities" className={styles.featureLink}>
                Discover Amenities
              </Link>
            </div>

            <div className={styles.featureCard} data-aos="fade-up" data-aos-delay="300">
              <Image 
                src="/community-center.jpg" 
                alt="Community center in Sun City Summerlin" 
                width={400} 
                height={300}
                className={styles.featureImage}
              />
              <h3>Active Community</h3>
              <p>Join a vibrant community with events and activities</p>
              <Link href="/community" className={styles.featureLink}>
                Community Life
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection} data-aos="fade-up">
          <h2>Ready to find your dream home in Sun City Summerlin?</h2>
          <p>Let Dr. Jan Duffy guide you through the process with over 20 years of local expertise</p>
          <Link href="/contact" className={styles.primaryButton}>
            Schedule a Consultation
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Image src="/drjan-logo.png" alt="Dr. Jan Duffy Logo" width={180} height={60} />
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4>Explore</h4>
              <Link href="/properties">Properties</Link>
              <Link href="/neighborhoods">Neighborhoods</Link>
              <Link href="/amenities">Amenities</Link>
              <Link href="/lifestyle">Lifestyle</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>Services</h4>
              <Link href="/services/buying-agent">Buying</Link>
              <Link href="/services/selling-agent">Selling</Link>
              <Link href="/services/relocation">Relocation</Link>
              <Link href="/services/luxury-homes">Luxury Homes</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>About</h4>
              <Link href="/contact">Contact</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/map">Area Map</Link>
            </div>
          </div>
          <div className={styles.footerContact}>
            <h4>Contact Dr. Jan</h4>
            <p>Phone: (702) 718-0043</p>
            <p>Email: realestate@drjanduffy.com</p>
            <p>Office: 9406 Del Webb Boulevard, Las Vegas, NV 89134</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Dr. Jan Duffy | BHHS Nevada Properties | All Rights Reserved</p>
          <Image src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway Home Services Quality Seal" width={120} height={40} />
        </div>
      </footer>
    </div>
  );
};

export default Home;
