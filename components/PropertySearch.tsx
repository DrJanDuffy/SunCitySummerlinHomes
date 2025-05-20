
import React, { useState } from 'react';
import styles from '../styles/PropertySearch.module.css';

const PropertySearch = () => {
  const [minPrice, setMinPrice] = useState(300000);
  const [maxPrice, setMaxPrice] = useState(800000);
  const [bedrooms, setBedrooms] = useState('any');
  const [bathrooms, setBathrooms] = useState('any');
  const [features, setFeatures] = useState<string[]>([]);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const featureOptions = [
    "Golf Course View",
    "Swimming Pool",
    "Single Story",
    "Updated Kitchen",
    "Mountain View",
    "Covered Patio"
  ];
  
  const toggleFeature = (feature: string) => {
    if (features.includes(feature)) {
      setFeatures(features.filter(f => f !== feature));
    } else {
      setFeatures([...features, feature]);
    }
  };
  
  return (
    <div className={styles.searchSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Find Your Dream Home</h2>
          <p className={styles.subtitle}>
            Use our advanced search tools to find the perfect Sun City Summerlin property that matches your lifestyle needs
          </p>
        </div>
        
        <div className={styles.searchCard}>
          <div className={styles.searchForm}>
            <div className={styles.searchGrid}>
              {/* Price Range */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Price Range</label>
                <div className={styles.priceRangeContainer}>
                  <div className={styles.priceInput}>
                    <label className={styles.subLabel}>Minimum</label>
                    <select 
                      value={minPrice} 
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className={styles.select}
                    >
                      <option value={200000}>$200,000</option>
                      <option value={300000}>$300,000</option>
                      <option value={400000}>$400,000</option>
                      <option value={500000}>$500,000</option>
                      <option value={600000}>$600,000</option>
                    </select>
                  </div>
                  <div className={styles.priceInput}>
                    <label className={styles.subLabel}>Maximum</label>
                    <select 
                      value={maxPrice} 
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className={styles.select}
                    >
                      <option value={500000}>$500,000</option>
                      <option value={600000}>$600,000</option>
                      <option value={700000}>$700,000</option>
                      <option value={800000}>$800,000</option>
                      <option value={1000000}>$1,000,000+</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Bedrooms & Bathrooms */}
              <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Bedrooms</label>
                  <select 
                    value={bedrooms} 
                    onChange={(e) => setBedrooms(e.target.value)}
                    className={styles.select}
                  >
                    <option value="any">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Bathrooms</label>
                  <select 
                    value={bathrooms} 
                    onChange={(e) => setBathrooms(e.target.value)}
                    className={styles.select}
                  >
                    <option value="any">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                  </select>
                </div>
              </div>
              
              {/* Features */}
              <div className={styles.formGroupWide}>
                <label className={styles.label}>Features</label>
                <div className={styles.featuresGrid}>
                  {featureOptions.map((feature, index) => (
                    <div key={index} className={styles.checkboxContainer}>
                      <input
                        id={`feature-${index}`}
                        type="checkbox"
                        checked={features.includes(feature)}
                        onChange={() => toggleFeature(feature)}
                        className={styles.checkbox}
                      />
                      <label htmlFor={`feature-${index}`} className={styles.checkboxLabel}>
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.searchButtonContainer}>
              <button className={styles.searchButton}>
                Search Properties
              </button>
            </div>
          </div>
        </div>
        
        <div className={styles.contactPrompt}>
          <p>Looking for something specific? <a href="#" className={styles.contactLink}>Contact Dr. Jan Duffy</a> for personalized assistance.</p>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
