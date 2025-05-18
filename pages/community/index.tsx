
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";

const Community: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Community | Sun City Summerlin Homes</title>
        <meta name="description" content="Learn about the Sun City Summerlin community offered by Berkshire Hathaway HomeServices" />
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
        <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
          <h1 className={styles.title}>Sun City Summerlin Community</h1>
          
          <div className={styles.communitySection}>
            <img src="/community-center.jpg" alt="Sun City Summerlin Community Center" className={styles.featuredImage} />
            
            <div className={styles.communityHighlights}>
              <div className={styles.statsCard}>
                <h3>$548,175</h3>
                <p>Average Home Value</p>
              </div>
              <div className={styles.statsCard}>
                <h3>$331</h3>
                <p>Average Price per Sq Ft</p>
              </div>
              <div className={styles.statsCard}>
                <h3>8,000+</h3>
                <p>Homes in Community</p>
              </div>
              <div className={styles.statsCard}>
                <h3>20,000+</h3>
                <p>Active Residents</p>
              </div>
            </div>
            
            <div className={styles.communityDescription}>
              <p>
                Sun City Summerlin is a 55-plus, active adult community brimming with amenities. Located just beyond the foothills of the Spring Mountains, residents enjoy stunning backyard views of Red Rock Canyon and adjacent rocky peaks. As Las Vegas' oldest and largest community of its kind, Sun City Summerlin is truly "a city within a city," offering convenient access to doctors, banks, florists, and various stores right within the community.
              </p>
              <p>
                Built in three phases starting in 1989, the community consists of almost 8,000 attached and single-family homes. With more than two dozen floor plans ranging from 1,000 to 2,900 square feet, homes feature contemporary Mediterranean bungalow designs with characteristic terracotta roofing and stucco siding. Many properties front one of the community's renowned golf courses, with garage space specifically for golf carts.
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

export default Community;

const Community: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Community | BHHS Sun City Summerlin</title>
        <meta name="description" content="Learn about the Sun City Summerlin community" />
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
        <h1 className={styles.pageTitle}>Sun City Summerlin Community</h1>

        <section className={`${styles.communitySection} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.communityHighlights}>
            <div className={styles.statsCard}>
              <h3>$548,175</h3>
              <p>Average Home Value</p>
            </div>
            <div className={styles.statsCard}>
              <h3>$331</h3>
              <p>Average Price per Sq Ft</p>
            </div>
            <div className={styles.statsCard}>
              <h3>8,000+</h3>
              <p>Homes in Community</p>
            </div>
            <div className={styles.statsCard}>
              <h3>20,000+</h3>
              <p>Active Residents</p>
            </div>
          </div>
          
          <div className={styles.communityDescription}>
            <p>
              Sun City Summerlin is a 55-plus, active adult community brimming with amenities. Located just beyond the foothills of the Spring Mountains, residents enjoy stunning backyard views of Red Rock Canyon and adjacent rocky peaks. As Las Vegas' oldest and largest community of its kind, Sun City Summerlin is truly "a city within a city," offering convenient access to doctors, banks, florists, and various stores right within the community.
            </p>
            <p>
              Built in three phases starting in 1989, the community consists of almost 8,000 attached and single-family homes. With more than two dozen floor plans ranging from 1,000 to 2,900 square feet, homes feature contemporary Mediterranean bungalow designs with characteristic terracotta roofing and stucco siding. Many properties front one of the community's renowned golf courses, with garage space specifically for golf carts.
            </p>
          </div>
          
          <div className={styles.communityMedia}>
            <div className={styles.mediaItem}>
              <img src="/community-center.jpg" alt="Sun City Summerlin Community Center" />
              <h3>Community Center</h3>
              <p>Modern facilities designed for community events and activities</p>
            </div>
            <div className={styles.mediaItem}>
              <img src="/golf-course.jpg" alt="Sun City Summerlin Golf Course" />
              <h3>Championship Golf</h3>
              <p>Three distinct courses catering to all skill levels</p>
            </div>
          </div>
          
          <div className={styles.communityHistory}>
            <h2>Community History</h2>
            <p>
              Sun City Summerlin was developed by Del Webb Corporation beginning in 1989 as one of the company's premier active adult communities. The development was carefully planned to integrate with the natural desert landscape while providing all the amenities modern retirees desire.
            </p>
            <p>
              Named after the Summerlin master-planned community it's part of, which itself was named for Howard Hughes' grandmother, Jean Summerlin, the area has grown to become one of the most sought-after retirement destinations in the Southwest.
            </p>
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

export default Community;
