
import type { NextPage } from "next";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Featured neighborhoods in Sun City Summerlin
  const featuredNeighborhoods = [
    {
      id: 1,
      name: "Eagle Crest",
      description: "Luxurious homes with golf course views and modern amenities.",
      image: "/property1.jpg"
    },
    {
      id: 2,
      name: "Sun City Summerlin",
      description: "Heart of the community with easy access to recreation centers.",
      image: "/property2.jpg"
    },
    {
      id: 3,
      name: "Highland Falls",
      description: "Stunning mountain and golf course views with premium properties.",
      image: "/property3.jpg"
    }
  ];

  // Community highlights
  const communityHighlights = [
    {
      id: 1,
      title: "Golf Courses",
      description: "Three championship courses nestled in the desert landscape.",
      icon: "⛳"
    },
    {
      id: 2,
      title: "Recreation Centers",
      description: "Four modern centers with pools, fitness, and activity rooms.",
      icon: "🏊"
    },
    {
      id: 3,
      title: "Community Activities",
      description: "Over 80 clubs and social groups for all interests.",
      icon: "👥"
    },
    {
      id: 4,
      title: "Restaurants & Shopping",
      description: "Convenient dining and retail within the community.",
      icon: "🛍️"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      text: "Dr. Jan helped us find our dream home in Sun City. Her knowledge of the community was invaluable.",
      author: "Robert & Mary S.",
      location: "Eagle Crest"
    },
    {
      id: 2,
      text: "Moving from California was daunting, but Dr. Jan made the transition smooth and stress-free.",
      author: "David L.",
      location: "Highland Falls"
    },
    {
      id: 3,
      text: "As a senior looking for the perfect retirement home, I couldn't have asked for a better agent.",
      author: "Patricia M.",
      location: "Sun City Summerlin"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Sun City Summerlin Las Vegas | Luxury 55+ Community Homes | Dr. Jan Duffy</title>
        <meta name="description" content="Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ Del Webb community. Expert REALTOR® Dr. Jan Duffy brings 25+ years of experience in luxury single-story homes, golf course properties, and active adult living." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.heroContent}>
            <h1>Sun City Summerlin</h1>
            <h2>Las Vegas' Premier 55+ Community</h2>
            <p>Expert guidance from Dr. Jan Duffy, your Sun City Summerlin specialist</p>
            <div className={styles.heroCta}>
              <Link href="/properties" className={styles.primaryButton}>
                View Properties
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Contact Dr. Jan
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Why Choose Sun City Summerlin?</h2>
          <div className={styles.highlightsGrid}>
            {communityHighlights.map(highlight => (
              <div key={highlight.id} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.neighborhoodsSection}>
          <h2 className={styles.sectionTitle}>Featured Neighborhoods</h2>
          <div className={styles.neighborhoodsGrid}>
            {featuredNeighborhoods.map(neighborhood => (
              <div key={neighborhood.id} className={styles.neighborhoodCard}>
                <div className={styles.neighborhoodImage}>
                  <img src={neighborhood.image} alt={neighborhood.name} />
                </div>
                <div className={styles.neighborhoodInfo}>
                  <h3>{neighborhood.name}</h3>
                  <p>{neighborhood.description}</p>
                  <Link href="/neighborhoods" className={styles.learnMoreLink}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.testimonialSection}>
          <h2 className={styles.sectionTitle}>What My Clients Say</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <p className={styles.testimonialText}>&ldquo;{testimonial.text}&rdquo;</p>
                <p className={styles.testimonialAuthor}>{testimonial.author}</p>
                <p className={styles.testimonialLocation}>{testimonial.location}</p>
              </div>
            ))}
          </div>
          <div className={styles.testimonialCta}>
            <Link href="/testimonials" className={styles.secondaryButton}>
              Read More Testimonials
            </Link>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Find Your Dream Home in Sun City Summerlin?</h2>
          <p>Let Dr. Jan Duffy guide you through the best 55+ community in Las Vegas</p>
          <div className={styles.ctaButtons}>
            <Link href="/properties" className={styles.primaryButton}>
              Browse Properties
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. S.0197614.LL</p>
          <p>Real Estate Las Vegas, NV <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">drjanduffy.realscout.com/onboarding</a></p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          <a href="https://www.bhhs.com/" target="_blank" rel="noopener noreferrer">BHHS.com</a>
        </div>
        <div className={styles.socialLinks}>
          <h3>Connect With Dr. Jan</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/drjanduffy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            <a href="https://www.facebook.com/DrJanDuffyRealtorCentennialHills/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">👍</a>
            <a href="https://www.pinterest.com/bhhsluxury/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">📌</a>
            <a href="https://www.youtube.com/@DrDuffy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">🎬</a>
            <a href="https://x.com/drjanduffy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://www.linkedin.com/company/lvrmembers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://www.tiktok.com/@dr.janduffy" target="_blank" rel="noopener noreferrer" aria-label="TikTok">🎵</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
