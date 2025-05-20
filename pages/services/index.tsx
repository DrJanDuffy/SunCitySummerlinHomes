
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Services.module.css';
import StructuredData from '../../components/StructuredData';
import PageTransition from '../../components/PageTransition';

const ServicesPage = () => {
  return (
    <PageTransition>
      <div className={styles.container}>
        <Head>
          <title>Real Estate Services | Dr. Jan Duffy | Sun City Summerlin</title>
          <meta name="description" content="Specialized real estate services in Sun City Summerlin - buying agent, selling agent, property management, and 55+ community expertise." />
        </Head>

        <main className={styles.main}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Real Estate Services</h1>
              <p className={styles.subtitle}>Specialized real estate solutions for Sun City Summerlin and Las Vegas 55+ communities</p>
            </div>
          </section>

          <section id="services" className={styles.servicesContainer}>
            <div className={styles.serviceCard} data-service-type="buying-agent">
              <h2>Buying Agent Services</h2>
              <p>Dr. Jan Duffy provides expert guidance for finding your ideal home in Sun City Summerlin, Las Vegas' premier 55+ community.</p>
              <div className={styles.serviceDetails} itemScope itemType="http://schema.org/RealEstateAgent">
                <span itemProp="name">Dr. Jan Duffy, REALTOR®</span>
                <span itemProp="description">Professional buying agent specializing in Sun City Summerlin, Las Vegas.</span>
              </div>
              <Link href="/services/buying-agent" className={styles.ctaButton}>Learn More</Link>
            </div>

            <div className={styles.serviceCard} data-service-type="selling-agent">
              <h2>Selling Agent Services</h2>
              <p>Maximize your property's value with specialized marketing and negotiation expertise for Sun City Summerlin homes.</p>
              <div className={styles.serviceDetails} itemScope itemType="http://schema.org/RealEstateAgent">
                <span itemProp="name">Dr. Jan Duffy, REALTOR®</span>
                <span itemProp="description">Professional selling agent with deep knowledge of Sun City Summerlin market trends.</span>
              </div>
              <Link href="/services/selling-agent" className={styles.ctaButton}>Learn More</Link>
            </div>

            <div className={styles.serviceCard} data-service-type="relocation">
              <h2>Relocation Services</h2>
              <p>Specialized support for homebuyers relocating from California to Las Vegas, with expertise in 55+ communities.</p>
              <div className={styles.serviceDetails} itemScope itemType="http://schema.org/RealEstateAgent">
                <span itemProp="name">Dr. Jan Duffy, REALTOR®</span>
                <span itemProp="description">Relocation specialist helping clients move to Sun City Summerlin and Las Vegas.</span>
              </div>
              <Link href="/services/relocation" className={styles.ctaButton}>Learn More</Link>
            </div>

            <div className={styles.serviceCard} data-service-type="luxury-homes">
              <h2>Luxury Home Services</h2>
              <p>Specialized expertise in luxury properties and golf course homes in Sun City Summerlin.</p>
              <div className={styles.serviceDetails} itemScope itemType="http://schema.org/RealEstateAgent">
                <span itemProp="name">Dr. Jan Duffy, REALTOR®</span>
                <span itemProp="description">Luxury home specialist in Sun City Summerlin's premier neighborhoods.</span>
              </div>
              <Link href="/services/luxury-homes" className={styles.ctaButton}>Learn More</Link>
            </div>
          </section>

          <section className={styles.servicesContainer}>
            <div className={styles.serviceCard} data-service-type="specialized-offerings">
              <h2>Specialized 55+ Community Services</h2>
              <p>Tailored real estate solutions for Sun City Summerlin residents including Senior Downsizing, Veterans Housing Benefits, and HOA Navigation expertise.</p>
              <div className={styles.serviceDetails} itemScope itemType="http://schema.org/RealEstateAgent">
                <span itemProp="name">Dr. Jan Duffy, REALTOR®</span>
                <span itemProp="description">55+ Community Real Estate Specialist in Sun City Summerlin, Las Vegas.</span>
              </div>
              <Link href="/services/offerings" className={styles.ctaButton}>View All Specialized Services</Link>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to start your real estate journey?</h2>
            <p>Contact Dr. Jan Duffy today for a personalized consultation about your real estate needs in Sun City Summerlin.</p>
            <Link href="/contact" className={styles.primaryButton}>Contact Now</Link>
          </section>
        </main>

        <StructuredData
          type="Service"
          data={{
            name: "Sun City Summerlin Real Estate Services",
            provider: {
              "@type": "RealEstateAgent",
              name: "Dr. Jan Duffy",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9406 Del Webb Boulevard",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89134"
              }
            },
            serviceType: [
              "Buying Agent Services",
              "Selling Agent Services",
              "Relocation Services",
              "Luxury Home Services"
            ],
            areaServed: {
              "@type": "Place",
              name: "Sun City Summerlin, Las Vegas, NV"
            }
          }}
        />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
