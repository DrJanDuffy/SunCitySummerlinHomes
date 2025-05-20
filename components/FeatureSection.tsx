
import React from 'react';
import styles from '../styles/FeatureSection.module.css';

const FeatureSection = () => {
  const features = [
    {
      icon: "⛳",
      title: "Championship Golf",
      description: "Three distinct courses offering panoramic views of the Las Vegas valley"
    },
    {
      icon: "🏊",
      title: "Resort-Style Pools",
      description: "Multiple swimming facilities with dedicated lap lanes and relaxation areas"
    },
    {
      icon: "🏥",
      title: "On-Site Healthcare",
      description: "Convenient access to medical offices, pharmacies, and wellness centers"
    },
    {
      icon: "🎾",
      title: "Tennis & Pickleball",
      description: "Professional courts with regular tournaments and social events"
    },
    {
      icon: "🏠",
      title: "Single-Story Living",
      description: "Thoughtfully designed homes with accessibility features and low maintenance"
    },
    {
      icon: "👥",
      title: "Vibrant Community",
      description: "Over 80 clubs and activities for an engaging, active lifestyle"
    }
  ];
  
  return (
    <div className={styles.featureSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Sun City Summerlin Lifestyle</h2>
          <p className={styles.subtitle}>
            Experience the perfect blend of luxury, convenience, and active living in Las Vegas' premier 55+ community
          </p>
        </div>
        
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={styles.featureCard}
            >
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            Schedule a Community Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
