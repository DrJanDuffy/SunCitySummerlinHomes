import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";

const Testimonials: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah & David Johnson",
      text: "Moving to Sun City Summerlin was the best decision we've made. The community is vibrant and the amenities are outstanding!",
      rating: 5,
      image: "/property1.jpg",
      location: "Highland Falls Area"
    },
    {
      name: "Robert Wilson",
      text: "After looking at dozens of properties, this home stood out for its quality finishes and perfect location near the golf course.",
      rating: 5,
      image: "/property2.jpg",
      location: "Palm Valley Neighborhood"
    },
    {
      name: "Margaret Thompson",
      text: "The BHHS agent made our buying process so smooth. We're loving our new home and the active lifestyle here.",
      rating: 4,
      image: "/property3.jpg",
      location: "Eagle Crest Community"
    },
    {
      name: "James & Patricia Miller",
      text: "We've lived in several active adult communities, but Sun City Summerlin stands head and shoulders above the rest. The people are friendly, the facilities are well-maintained, and there's always something to do.",
      rating: 5,
      image: "/golf-course.jpg",
      location: "Golf Course Views"
    },
    {
      name: "Thomas Rodriguez",
      text: "As a single retiree, I was concerned about making friends in a new community. Within weeks, I had more social invitations than I could accept! The clubs and activities make it so easy to connect.",
      rating: 5,
      image: "/community-center.jpg",
      location: "Near Community Center"
    },
    {
      name: "Barbara & Kenneth Clark",
      text: "We specifically looked for a home near one of the recreation centers, and our BHHS agent found us the perfect property. We use the pool almost daily and have joined several clubs.",
      rating: 5,
      image: "/property1.jpg",
      location: "Desert Vista Area"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Testimonials | BHHS Sun City Summerlin</title>
        <meta name="description" content="Hear from residents of Sun City Summerlin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.bhsLogo} />
          <p className={styles.logo}>Sun City Summerlin Homes</p>
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
        <h1 className={styles.pageTitle}>Resident Testimonials</h1>

        <section className={`${styles.testimonialsSection} ${isVisible ? styles.fadeIn : ''}`}>
          <p className={styles.testimonialIntro}>
            Don't just take our word for it. Hear directly from homeowners who have made Sun City Summerlin their home and are enjoying the active adult lifestyle it offers.
          </p>

          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCardLarge}>
                <div className={styles.testimonialImage}>
                  <img src={testimonial.image} alt={`Home of ${testimonial.name}`} />
                </div>
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialRating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <span key={i} className={styles.emptyStar}>☆</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <p className={styles.testimonialAuthor}>- {testimonial.name}</p>
                  <p className={styles.testimonialLocation}>{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.testimonialCTA}>
            <h2>Ready to Join Our Community?</h2>
            <p>Discover why so many active adults choose Sun City Summerlin for their retirement lifestyle.</p>
            <Link href="/contact" className={styles.cta}>Contact Us Today</Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <img src="/bhhs-quality-seal-black.png" alt="Berkshire Hathaway HomeServices" className={styles.footerLogo} />
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway HomeServices. All rights reserved.</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
          <p>Dr. Jan Duffy is a Nevada REALTOR® Making Dreams Come True in Las Vegas, Summerlin, Henderson, North Las Vegas, and Spring Valley Nevada. S.0197614.LL</p>
          <p>Real Estate Las Vegas, NV <a href="https://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer">drjanduffy.realscout.com/onboarding</a></p>
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

export default Testimonials;