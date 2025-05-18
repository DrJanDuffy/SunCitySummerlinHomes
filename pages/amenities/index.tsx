
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";

const Amenities: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const amenities = [
    "Three Championship Golf Courses",
    "Four Recreation Centers",
    "Multiple Swimming Pools",
    "Tennis &amp; Pickleball Courts",
    "Fitness Centers with Classes",
    "Woodworking &amp; Ceramics Studios",
    "Over 100 Social Clubs &amp; Activities",
    "Walking &amp; Golf Cart Trails",
    "On-site Shopping &amp; Dining",
    "24/7 Security &amp; Gated Areas"
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Amenities | BHHS Sun City Summerlin</title>
        <meta name="description" content="Explore amenities at Sun City Summerlin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-logo.png" alt="BHHS Logo" className={styles.bhsLogo} />
          <h1 className={styles.logo}>Sun City Summerlin Homes</h1>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/community">Community</Link>
          <Link href="/lifestyle">Lifestyle</Link>
          <Link href="/amenities">Amenities</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Community Amenities</h1>

        <section className={`${styles.amenitiesSection} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.amenitiesList}>
            {amenities.map((amenity, index) => (
              <div key={index} className={styles.amenity}>
                <span className={styles.checkmark}>✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
          
          <div className={styles.amenitiesDetail}>
            <div className={styles.amenityFeature}>
              <h2>Golf Courses</h2>
              <img src="/golf-course.jpg" alt="Sun City Summerlin Golf Course" />
              <p>
                Sun City Summerlin features three distinct championship golf courses designed by renowned architects. Highland Falls offers panoramic views of the Las Vegas Strip, Palm Valley provides a traditional layout with mild elevation changes, and Eagle Crest is a shorter executive course perfect for a quick round.
              </p>
            </div>
            
            <div className={styles.amenityFeature}>
              <h2>Recreation Centers</h2>
              <img src="/community-center.jpg" alt="Sun City Summerlin Recreation Center" />
              <p>
                Four state-of-the-art recreation centers provide residents with swimming pools, fitness facilities, tennis and pickleball courts, and spaces for various clubs and activities. The centers also host regular social events, classes, and workshops.
              </p>
            </div>
            
            <div className={styles.amenityFeature}>
              <h2>Social Clubs & Activities</h2>
              <p>
                With over 100 clubs and activities, there's something for everyone at Sun City Summerlin. From book clubs and card games to hiking groups and dance classes, residents can pursue existing passions or discover new interests alongside neighbors who share their enthusiasm.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-logo.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; 2023 Berkshire Hathaway HomeServices. All rights reserved.</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">BHHS.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Amenities;
