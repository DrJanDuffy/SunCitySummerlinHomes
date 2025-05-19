
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  
  const propertyImages = [
    "/property1.jpg",
    "/property2.jpg",
    "/property3.jpg",
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate property images
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % propertyImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [propertyImages.length]);

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
    "24/7 Security & Gated Areas"
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
        <title>Sun City Summerlin Las Vegas | Luxury 55+ Community Homes | Dr. Jan Duffy</title>
        <meta name="description" content="Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ Del Webb community. Expert REALTOR® Dr. Jan Duffy brings 25+ years of experience in luxury single-story homes, golf course properties, and active adult living." />
        <meta name="keywords" content="Sun City Summerlin, luxury homes Las Vegas, 55+ community, Del Webb, Dr Jan Duffy Realtor, active adult community, golf course homes, retirement community Las Vegas" />
        <meta name="author" content="Dr. Jan Duffy, REALTOR®" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Sun City Summerlin Las Vegas | Luxury 55+ Community Homes" />
        <meta property="og:description" content="Experience resort-style living in Las Vegas' premier 55+ active adult community with Dr. Jan Duffy, your REALTOR® specialist with 25+ years of experience." />
        <meta property="og:image" content="/property1.jpg" />
        <meta property="og:url" content="https://suncitysummerlin.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sun City Summerlin Las Vegas | Luxury 55+ Living" />
        <meta name="twitter:description" content="Find your dream home in Sun City Summerlin with Dr. Jan Duffy, your local expert REALTOR®." />
        <meta name="twitter:image" content="/property1.jpg" />
        <link rel="canonical" href="https://suncitysummerlin.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: rgb(101, 141, 172);
              width: 100%;
            }
          `
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dr. Jan Duffy, REALTOR®",
              "image": "/drjan-logo.png",
              "url": "https://suncitysummerlin.com",
              "telephone": "(702) 718-0043",
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
              "sameAs": [
                "https://www.instagram.com/drjanduffy/",
                "https://www.facebook.com/DrJanDuffyRealtorCentennialHills/",
                "https://www.linkedin.com/company/lvrmembers/",
                "https://www.youtube.com/@DrDuffy"
              ],
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
              },
              "priceRange": "$$$",
              "areaServed": ["Sun City Summerlin", "Las Vegas", "Clark County"],
              "description": "Dr. Jan Duffy is a REALTOR® specialist with 25+ years of experience in Sun City Summerlin, Las Vegas' premier 55+ Del Webb community."
            }
          `
        }}/>
      </Head>
      
      <Script 
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="afterInteractive"
      />

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoContainer}>
            <img 
              src="/bhhs-quality-seal-black.png" 
              alt="Berkshire Hathaway HomeServices" 
              className={styles.bhsLogo} 
              width={60}
              height={60}
            />
            <div className={styles.logoText}>
              <h1 className={styles.logo}>Sun City Summerlin Homes</h1>
              <p className={styles.subLogo}>Dr. Jan Duffy, REALTOR® | 55+ Community Specialist</p>
            </div>
          </div>
          
          <div className={styles.headerRight}>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}><span>Home</span></Link>
              <Link href="/properties" className={styles.navLink}><span>Properties</span></Link>
              <Link href="/community" className={styles.navLink}><span>Community</span></Link>
              <Link href="/lifestyle" className={styles.navLink}><span>Lifestyle</span></Link>
              <Link href="/amenities" className={styles.navLink}><span>Amenities</span></Link>
              <Link href="/testimonials" className={styles.navLink}><span>Testimonials</span></Link>
              <Link href="/contact" className={styles.navLink}><span>Contact</span></Link>
            </nav>
            
            <div className={styles.headerActions}>
              <a href="tel:7027180043" className={styles.phoneButton}>
                <span className={styles.phoneIcon}>📞</span>
                <span className={styles.phoneNumber}>(702) 718-0043</span>
              </a>
              <button className={styles.mobileMenuButton} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.topBanner}>
        <h1 className={styles.topTitle}>Luxury Living in Sun City Summerlin</h1>
        <p className={styles.topSubtitle}>
          Experience resort-style living in Las Vegas' premier 55+ active adult community with Dr. Jan Duffy, your REALTOR® specialist with 25+ years of experience
        </p>
        <div className={styles.topCredentials}>
          <span className={styles.topCredentialItem}>📍 Del Webb Community Expert</span>
          <span className={styles.topCredentialItem}>🏠 Low-Maintenance Single-Story Homes</span>
          <span className={styles.topCredentialItem}>⛳ Golf Course Properties</span>
          <span className={styles.topCredentialItem}>👨‍👩‍👧‍👧 80+ Social Clubs</span>
        </div>
      </div>

      <div className={styles.listingsSection}>
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="NEWEST" 
          listing-status="For Sale" 
          property-types="SFR,MF" 
          price-min="800000" 
          price-max="4000000">
        </realscout-office-listings>
      </div>

      <main className={styles.main}>
        <section className={`${styles.hero} ${isVisible ? styles.fadeIn : ''}`}>
          <div className={styles.heroContent}>
            <div className={styles.logoContainer}>
              <div className={styles.dualLogoContainer}>
                <Image 
                  src="/bhhs-nevada-logo.jpg" 
                  alt="Berkshire Hathaway HomeServices Nevada Properties" 
                  className={styles.bhhsLogo} 
                  width={150}
                  height={75}
                  unoptimized
                />
                <Image 
                  src="/summerlin-logo.jpg" 
                  alt="Sun City Summerlin A Del Webb Community" 
                  className={styles.summerlinLogo} 
                  width={200}
                  height={150}
                  unoptimized
                />
              </div>
            </div>
            
            <div className={styles.homeValueWidgetContainer}>
              <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
              <style dangerouslySetInnerHTML={{
                __html: `
                  realscout-home-value {
                    --rs-hvw-background-color: #ffffff;
                    --rs-hvw-title-color: #000000;
                    --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
                    --rs-hvw-primary-button-text-color: #ffffff;
                    --rs-hvw-primary-button-color: rgb(35, 93, 137);
                    --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
                    --rs-hvw-secondary-button-color: #ffffff;
                    --rs-hvw-widget-width: 87.5%;
                  }
                `
              }} />
              <div className={styles.widgetWrapper}>
                <h2 className={styles.widgetTitle}>Get Your Sun City Summerlin Home Value</h2>
                <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" include-name include-phone></realscout-home-value>
              </div>
            </div>
            
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
              <h3>$548,175</h3>
              <p>3 Beds | 2 Baths | 1,850 Sq Ft</p>
              <p>Contemporary Mediterranean | Golf Course Views</p>
            </div>

            <p className={styles.description}>
              This stunning single-story home in the prestigious Sun City Summerlin community offers the perfect blend of comfort and luxury. Featuring an open floor plan with spacious breakfast nook, gourmet kitchen, and resort-style backyard with Red Rock Canyon views, this property is perfect for those seeking an active 55+ lifestyle in Las Vegas' most established and amenity-rich community. Many homes in the area include two primary suites and dedicated golf cart garage space.
            </p>
            
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "Residence",
                  "name": "Luxury Single-Story Home in Sun City Summerlin",
                  "description": "Stunning single-story home with open floor plan, gourmet kitchen, and resort-style backyard with Red Rock Canyon views",
                  "numberOfRooms": "3",
                  "floorSize": {
                    "@type": "QuantitativeValue",
                    "value": "1850",
                    "unitCode": "SQF"
                  },
                  "numberOfBathroomsTotal": 2,
                  "amenityFeature": [
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Golf Course Views",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Single-Story",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Gourmet Kitchen",
                      "value": true
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      "name": "Open Floor Plan",
                      "value": true
                    }
                  ],
                  "offers": {
                    "@type": "Offer",
                    "price": "548175",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 36.2043,
                    "longitude": -115.2936
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Las Vegas",
                    "addressRegion": "NV",
                    "postalCode": "89134",
                    "addressCountry": "US"
                  }
                }
              `
            }}/>
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

        <section id="community" className={styles.communitySection}>
          <h2 className={styles.sectionTitle}>Sun City Summerlin Community</h2>
          
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
        </section>

        <section id="lifestyle" className={styles.lifestyleSection}>
          <h2 className={styles.sectionTitle}>Active Adult Lifestyle</h2>
          
          <div className={styles.lifestyleFeatures}>
            <div className={styles.lifestyleFeature}>
              <h3>Golf Paradise</h3>
              <p>Enjoy three distinct courses: Highland Falls with panoramic Vegas views, Palm Valley with mild elevation changes, and the executive Eagle Crest course.</p>
            </div>
            <div className={styles.lifestyleFeature}>
              <h3>Recreation Centers</h3>
              <p>Four recreation centers offer fitness facilities, swimming pools, pickleball courts, and spaces for over 100 different clubs and activities.</p>
            </div>
            <div className={styles.lifestyleFeature}>
              <h3>Golf Cart Community</h3>
              <p>Designated golf cart pathways throughout the community make it easy to travel between courses, recreation centers, and local shopping areas.</p>
            </div>
            <div className={styles.lifestyleFeature}>
              <h3>Shopping & Dining</h3>
              <p>Tucson Plaza features pharmacies, fitness centers, restaurants like My Mother's House Italian cuisine, and Smith's grocery store.</p>
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
              <p>9406 Del Webb Boulevard, Las Vegas, NV 89134</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>(702) 718-0043</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>DrDuffy@bhhsnv.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Google Business</h3>
              <p><a href="https://g.co/kgs/uwtzcWj" target="_blank" rel="noopener noreferrer">View Google Business Profile</a></p>
            </div>
          </div>
        </section>
      </main>

      {/* Debug section to check images - remove after debugging */}
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', margin: '20px', borderRadius: '8px' }}>
        <h2>Image Availability Check</h2>
        <p>If the images below appear, they exist in your public folder:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <p>bhhs-logo.png:</p>
            <Image src="/bhhs-logo.png" alt="BHHS Logo" width={100} height={50} unoptimized />
          </div>
          <div>
            <p>property1.jpg:</p>
            <Image src="/property1.jpg" alt="Property 1" width={100} height={80} unoptimized />
          </div>
          <div>
            <p>property2.jpg:</p>
            <Image src="/property2.jpg" alt="Property 2" width={100} height={80} unoptimized />
          </div>
          <div>
            <p>property3.jpg:</p> 
            <Image src="/property3.jpg" alt="Property 3" width={100} height={80} unoptimized />
          </div>
          <div>
            <p>drjan-logo.png:</p>
            <Image src="/drjan-logo.png" alt="Dr Jan Logo" width={100} height={50} unoptimized />
          </div>
        </div>
      </div>

      <section className={styles.faqSection} id="faqs">
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <h3>What is the average home price in Sun City Summerlin?</h3>
            <p>The average home price in Sun City Summerlin is around $548,175, though prices vary based on size, location, and amenities. Golf course properties typically command higher prices.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Is Sun City Summerlin a 55+ community?</h3>
            <p>Yes, Sun City Summerlin is an age-restricted community where at least one resident must be 55 years or older, and no permanent residents can be under 19 years of age.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What amenities are available in Sun City Summerlin?</h3>
            <p>Sun City Summerlin offers three championship golf courses, four recreation centers, multiple swimming pools, tennis and pickleball courts, fitness centers, woodworking studios, over 100 social clubs, walking trails, and on-site shopping and dining.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>How do I contact Dr. Jan Duffy for property viewings?</h3>
            <p>You can contact Dr. Jan Duffy at (702) 718-0043, email at DrDuffy@bhhsnv.com, or fill out the contact form on this website to schedule a viewing or consultation.</p>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the average home price in Sun City Summerlin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The average home price in Sun City Summerlin is around $548,175, though prices vary based on size, location, and amenities. Golf course properties typically command higher prices."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Sun City Summerlin a 55+ community?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sun City Summerlin is an age-restricted community where at least one resident must be 55 years or older, and no permanent residents can be under 19 years of age."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What amenities are available in Sun City Summerlin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sun City Summerlin offers three championship golf courses, four recreation centers, multiple swimming pools, tennis and pickleball courts, fitness centers, woodworking studios, over 100 social clubs, walking trails, and on-site shopping and dining."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I contact Dr. Jan Duffy for property viewings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Dr. Jan Duffy at (702) 718-0043, email at DrDuffy@bhhsnv.com, or fill out the contact form on this website to schedule a viewing or consultation."
                  }
                }
              ]
            }
          `
        }}/>
      </section>

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
