import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import DynamicMap from '../components/DynamicMap';
import RealEstateAgentSchema from '../components/RealEstateAgentSchema';
import PropertyListingSchema from '../components/PropertyListingSchema';
import CommunityStructuredData from '../components/CommunityStructuredData';
import AccessiblePropertySchema from '../components/AccessiblePropertySchema';
import SeniorRealEstateService from '../components/SeniorRealEstateService';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Initialize any client-side only features
    if (typeof window !== 'undefined') {
      // Add any client-side initialization code here
    }
  }, []);

  // Featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Single-Story Home",
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2100,
      address: "123 Del Webb Blvd, Las Vegas, NV 89134",
      image: "/property1.jpg",
      features: ["Single Story", "Golf Course View", "Updated Kitchen"]
    },
    {
      id: 2,
      title: "Pristine Golf Course Villa",
      price: 525000,
      bedrooms: 2,
      bathrooms: 2.5,
      sqft: 2300,
      address: "456 Sun City Pkwy, Las Vegas, NV 89134",
      image: "/property2.jpg",
      features: ["Golf Course", "Pool", "Casita"]
    },
    {
      id: 3,
      title: "Updated Desert Modern Home",
      price: 399000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1850,
      address: "789 Rampart Blvd, Las Vegas, NV 89134",
      image: "/property3.jpg",
      features: ["Mountain View", "Renovated", "Private Courtyard"]
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Sun City Summerlin Las Vegas | Luxury 55+ Community Homes | Dr. Jan Duffy</title>
        <meta name="description" content="Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ Del Webb community. Expert REALTOR® Dr. Jan Duffy brings 25+ years of experience in luxury single-story homes, golf course properties, and active adult living." />
        <meta name="keywords" content="Sun City Summerlin, Las Vegas 55+ community, Del Webb homes, luxury single story homes, golf course properties, active adult living, Dr Jan Duffy realtor" />
        <meta property="og:title" content="Sun City Summerlin Las Vegas | Luxury 55+ Community Homes" />
        <meta property="og:description" content="Find your dream home in Sun City Summerlin, Las Vegas' premier 55+ Del Webb community with expert REALTOR® Dr. Jan Duffy." />
        <meta property="og:image" content="/hero-bg.jpg" />
        <meta property="og:url" content="https://suncitysummerlin.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8e1f41" />

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/property1.jpg" />
        <link rel="preload" as="image" href="/property2.jpg" />
        <link rel="preload" as="image" href="/property3.jpg" />
        <link rel="preload" as="image" href="/hero-bg.jpg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroSection} data-aos="fade-in">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Sun City Summerlin Las Vegas</h1>
            <h2 className={styles.subtitle}>Luxury 55+ Living in Las Vegas&apos; Premier Active Adult Community</h2>
            <p className={styles.description}>Find your dream home with Las Vegas&apos; Sun City Summerlin expert, Dr. Jan Duffy</p>
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

        <section className={styles.introSection} data-aos="fade-up">
          <div className={styles.introBadges}>
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>25+</span>
              <span className={styles.badgeText}>Years Experience</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>250+</span>
              <span className={styles.badgeText}>Sun City Homes Sold</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>8,000+</span>
              <span className={styles.badgeText}>Homes in Community</span>
            </div>
          </div>
          <div className={styles.introContent}>
            <h2>Welcome to Sun City Summerlin</h2>
            <p>Sun City Summerlin is Las Vegas&apos; premier 55+ active adult community, featuring luxury single-story homes, world-class amenities, and stunning mountain and golf course views.</p>
            <p>As a resident and REALTOR® specializing in this unique community, Dr. Jan Duffy provides unmatched expertise whether you&apos;re buying or selling in Sun City Summerlin.</p>
            <div className={styles.introCta}>
              <Link href="/community" className={styles.textButton}>
                Learn About The Community
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.featuredSection} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Featured Properties</h2>
          <p className={styles.sectionSubtitle}>Discover handpicked homes in Sun City Summerlin</p>

          <div className={styles.propertyGrid}>
            {featuredProperties.map(property => (
              <div key={property.id} className={styles.propertyCard} data-aos="fade-up" data-aos-delay={(property.id - 1) * 100}>
                <div className={styles.propertyImageContainer}>
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className={styles.propertyImage}
                  />
                  <div className={styles.propertyPrice}>${property.price.toLocaleString()}</div>
                </div>
                <div className={styles.propertyContent}>
                  <h3 className={styles.propertyTitle}>{property.title}</h3>
                  <p className={styles.propertyAddress}>{property.address}</p>
                  <div className={styles.propertySpecs}>
                    <span>{property.bedrooms} bd</span>
                    <span>{property.bathrooms} ba</span>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                  <div className={styles.propertyFeatures}>
                    {property.features.map((feature, index) => (
                      <span key={index} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                  <Link href={`/properties?id=${property.id}`} className={styles.viewPropertyButton}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sectionCta}>
            <Link href="/properties" className={styles.primaryButton}>
              Browse All Properties
            </Link>
          </div>
        </section>

        <section className={styles.communitySection} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Life in Sun City Summerlin</h2>
          <p className={styles.sectionSubtitle}>Enjoy luxury living with world-class amenities</p>

          <div className={styles.amenitiesGrid}>
            <div className={styles.amenityCard} data-aos="fade-up" data-aos-delay="0">
              <img src="/golf-course.jpg" alt="Golf Course" className={styles.amenityImage} />
              <h3>Championship Golf</h3>
              <p>Three 18-hole golf courses designed by Billy Casper and Greg Nash</p>
            </div>
            <div className={styles.amenityCard} data-aos="fade-up" data-aos-delay="100">
              <img src="/community-center.jpg" alt="Community Center" className={styles.amenityImage} />
              <h3>Community Centers</h3>
              <p>Four community centers with pools, fitness, classes and social activities</p>
            </div>
            <div className={styles.amenityCard} data-aos="fade-up" data-aos-delay="200">
              <img src="/shopping-plaza.jpg" alt="Shopping Plaza" className={styles.amenityImage} />
              <h3>Shopping & Dining</h3>
              <p>Convenient access to shopping centers, restaurants and medical facilities</p>
            </div>
          </div>

          <div className={styles.sectionCta}>
            <Link href="/lifestyle" className={styles.primaryButton}>
              Explore Lifestyle
            </Link>
          </div>
        </section>

        <section className={styles.accessibilitySection} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Senior-Friendly Features</h2>
          <p className={styles.sectionSubtitle}>Homes designed with accessibility and comfort in mind</p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏠</div>
              <h3>Single-Story Living</h3>
              <p>No stairs to navigate with convenient single-level floor plans</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚪</div>
              <h3>Wide Doorways</h3>
              <p>Accessible entry points for easy mobility</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛁</div>
              <h3>Walk-in Showers</h3>
              <p>Many homes feature step-free shower entry</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌡️</div>
              <h3>Climate Control</h3>
              <p>Efficient systems for year-round comfort</p>
            </div>
          </div>
        </section>

        <section className={styles.testimonialSection} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Client Testimonials</h2>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <p>"Dr. Jan Duffy made our move to Sun City Summerlin seamless. Her knowledge of the community is unmatched, and she found us the perfect home that met all our needs."</p>
              <div className={styles.testimonialAuthor}>- Robert & Mary Williams</div>
            </div>
          </div>

          <div className={styles.sectionCta}>
            <Link href="/testimonials" className={styles.textButton}>
              Read More Testimonials
            </Link>
          </div>
        </section>

        <section className={styles.mapSection} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Explore Sun City Summerlin</h2>
          <p className={styles.sectionSubtitle}>Located in the northwest Las Vegas valley with mountain views</p>

          <div className={styles.mapContainer}>
            {isLoaded && <DynamicMap />}
          </div>

          <div className={styles.sectionCta}>
            <Link href="/map" className={styles.primaryButton}>
              Interactive Community Map
            </Link>
          </div>
        </section>

        <section className={styles.contactSection} data-aos="fade-up">
          <div className={styles.contactContent}>
            <h2>Ready to Find Your Dream Home?</h2>
            <p>Contact Dr. Jan Duffy for expert guidance on buying or selling in Sun City Summerlin.</p>
            <div className={styles.contactLinks}>
              <Link href="/contact" className={styles.primaryButton}>
                Contact Dr. Jan
              </Link>
              <a href="tel:7027180043" className={styles.secondaryButton}>
                Call (702) 718-0043
              </a>
            </div>
          </div>
          <div className={styles.brokerage}>
            <p>Berkshire Hathaway HomeServices Nevada Properties</p>
            <div className={styles.brokerageLogos}>
              <img src="/bhhs-logo.png" alt="Berkshire Hathaway HomeServices" />
              <img src="/bhhs-quality-seal-black.png" alt="Quality Service Certification" />
            </div>
          </div>
        </section>
      </main>

      {/* Structured Data for SEO */}
      <RealEstateAgentSchema />
      <PropertyListingSchema properties={featuredProperties} />
      <CommunityStructuredData />
      <AccessiblePropertySchema />
      <SeniorRealEstateService />
    </div>
  );
}