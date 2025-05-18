
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";

const Contact: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    setFormSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | BHHS Sun City Summerlin</title>
        <meta name="description" content="Contact us about properties in Sun City Summerlin" />
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
        <h1 className={styles.pageTitle}>Contact Us</h1>

        <section className={`${styles.contactSection} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.contactIntro}>
            <h2>We're Here to Help</h2>
            <p>
              Whether you're looking to buy a home in Sun City Summerlin, sell your current property, or simply have questions about the community, our experienced team is ready to assist you.
            </p>
          </div>
          
          {formSubmitted ? (
            <div className={styles.formSuccess}>
              <h2>Thank You for Contacting Us!</h2>
              <p>We've received your message and will get back to you within 24 hours.</p>
              <button onClick={() => setFormSubmitted(false)} className={styles.resetButton}>
                Send Another Message
              </button>
            </div>
          ) : (
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="Your Phone" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="interest">I'm interested in:</label>
                  <select id="interest">
                    <option value="buying">Buying a home</option>
                    <option value="selling">Selling my home</option>
                    <option value="information">Community information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Your Message" rows={4} required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            </div>
          )}
          
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>10000 Sun City Blvd, Las Vegas, NV 89134</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>(702) 123-4567</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>info@suncitysummerlinhomes.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Office Hours</h3>
              <p>Monday-Friday: 9am-5pm</p>
              <p>Saturday: 10am-4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className={styles.mapContainer}>
            <h3>Find Us</h3>
            <div className={styles.map}>
              {/* In a real application, you would embed a Google Map here */}
              <div className={styles.mapPlaceholder}>
                <p>Map of Sun City Summerlin Location</p>
              </div>
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

export default Contact;
