
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate property images
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % propertyImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const propertyImages = [
    "/property1.jpg",
    "/property2.jpg",
    "/property3.jpg",
  ];

  const amenities = [
    "Golf Course Access",
    "Community Swimming Pool",
    "Fitness Center",
    "Tennis Courts",
    "Walking Trails",
    "Social Club",
    "24/7 Security"
  ];
  
  const testimonials = [
    {
      name: "Sarah & David Johnson",
      text: "Moving to Sun City Summerlin was the best decision we've made. The community is vibrant and the amenities are outstanding!",
      rating: 5
    },
    {
      name: "Robert Wilson",
      text: "After looking at dozens of properties, this home stood out for its quality finishes and perfect location near the golf course.",
      rating: 5
    },
    {
      name: "Margaret Thompson",
      text: "The BHHS agent made our buying process so smooth. We're loving our new home and the active lifestyle here.",
      rating: 4
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>BHHS | Sun City Summerlin Homes</title>
        <meta name="description" content="Luxury homes in Sun City Summerlin community offered by Berkshire Hathaway HomeServices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/bhhs-logo.png" alt="BHHS Logo" className={styles.bhsLogo} />
          <h1 className={styles.logo}>Sun City Summerlin Homes</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#property">Property</a>
          <a href="#features">Features</a>
          <a href="#amenities">Amenities</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Luxury Living in Sun City Summerlin</h1>
            <p className={styles.subtitle}>
              Experience resort-style living in Las Vegas' premier active adult community
            </p>
            <div className={styles.ctaContainer}>
              <button className={styles.cta}>Schedule a Viewing</button>
              <button 
                className={styles.virtualTourBtn} 
                onClick={() => setShowVirtualTour(true)}
              >
                Virtual Tour <span className={styles.tourIcon}>🔍</span>
              </button>
            </div>
          </div>
          
          {showVirtualTour && (
            <div className={styles.virtualTourModal}>
              <div className={styles.modalContent}>
                <button 
                  className={styles.closeModal}
                  onClick={() => setShowVirtualTour(false)}
                >
                  ×
                </button>
                <h2>Virtual Tour</h2>
                <div className={styles.tourPlaceholder}>
                  <div className={styles.tourMessage}>
                    <p>360° Virtual Tour</p>
                    <p className={styles.tourInstructions}>Use your mouse to look around</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section id="property" className={`${styles.propertySection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>Property Highlights</h2>
          
          <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
              <div className={styles.imageOverlay}>
                <span className={styles.imageCount}>{activeImage + 1}/{propertyImages.length}</span>
              </div>
              <img 
                src={propertyImages[activeImage]} 
                alt="Sun City Summerlin Property" 
                className={styles.featuredImage}
              />
              <div className={styles.imageNavigation}>
                <button 
                  onClick={() => setActiveImage((prev) => (prev - 1 + propertyImages.length) % propertyImages.length)}
                  className={styles.navArrow}
                >
                  &#10094;
                </button>
                <button 
                  onClick={() => setActiveImage((prev) => (prev + 1) % propertyImages.length)}
                  className={styles.navArrow}
                >
                  &#10095;
                </button>
              </div>
            </div>
            <div className={styles.thumbnails}>
              {propertyImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`${styles.thumbnail} ${activeImage === index ? styles.activeThumbnail : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`Property view ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.propertyDetails}>
            <div className={styles.detailCard}>
              <h3>$475,000</h3>
              <p>3 Beds | 2 Baths | 1,850 Sq Ft</p>
              <p>Built in 2018 | 0.25 Acre Lot</p>
            </div>

            <p className={styles.description}>
              This stunning single-story home in the prestigious Sun City Summerlin community offers the perfect blend of comfort and luxury. Featuring an open floor plan, gourmet kitchen, and resort-style backyard with mountain views, this property is perfect for those seeking an active adult lifestyle in Las Vegas' most desirable community.
            </p>
          </div>
        </section>

        <section id="features" className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Property Features</h2>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Modern Kitchen</h3>
              <p>Granite countertops, stainless steel appliances, and custom cabinetry</p>
            </div>
            <div className={styles.feature}>
              <h3>Primary Suite</h3>
              <p>Spacious bedroom with walk-in closet and en-suite bathroom with dual vanities</p>
            </div>
            <div className={styles.feature}>
              <h3>Outdoor Living</h3>
              <p>Covered patio with built-in BBQ and desert landscaping</p>
            </div>
            <div className={styles.feature}>
              <h3>Energy Efficient</h3>
              <p>Solar panels, smart thermostat, and energy-efficient windows</p>
            </div>
          </div>
        </section>

        <section id="amenities" className={styles.amenitiesSection}>
          <h2 className={styles.sectionTitle}>Community Amenities</h2>
          
          <div className={styles.amenitiesList}>
            {amenities.map((amenity, index) => (
              <div key={index} className={styles.amenity}>
                <span className={styles.checkmark}>✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
          
          <div className={styles.communityDescription}>
            <p>
              Sun City Summerlin is Las Vegas' premier 55+ active adult community with over 7,800 homes, offering a resort lifestyle with world-class amenities. Enjoy three golf courses, four community centers, multiple swimming pools, and over 80 clubs and activities.
            </p>
          </div>
        </section>

        <section id="testimonials" className={`${styles.testimonialsSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>What Homeowners Say</h2>
          
          <div className={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <p className={styles.testimonialAuthor}>- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section id="contact" className={`${styles.contactSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="Your Phone" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message" rows={4}></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
          
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

export default Home;
