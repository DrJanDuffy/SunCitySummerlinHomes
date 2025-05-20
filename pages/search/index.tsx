import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";

// Define property type
interface Property {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  propertyType: string;
  address: string;
  image: string;
  features: string[];
}

// Structured data component for accessible properties
const AccessiblePropertySchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "WebPage",
        "name": "Senior-Friendly Properties in Sun City Summerlin",
        "description": "Find accessible homes with features like wheelchair access, grab bars, and walk-in showers in Sun City Summerlin.",
        "url": "https://suncitysummerlin.com/search", // Replace with your actual URL
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://suncitysummerlin.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "accessibilityAPI": "ARIA",
        "accessibilityControl": ["fullKeyboardAccess", "fullTouchAccess", "screenReaderOptimization"],
        "accessibilityFeature": ["wheelchairAccess", "grabBars", "walkInShower"],
        "accessMode": ["visual", "textual"],
        "accessModeSufficient": [
          {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "WCAG 2.1 AA"
              }
            ]
          }
        ]
      }),
    }}
  />
);

// Structured data component for senior real estate services
const SeniorRealEstateService = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Dr. Jan Duffy",
        "description": "Specializing in senior community real estate in Sun City Summerlin. Helping seniors find the perfect home to enjoy their retirement.",
        "url": "https://suncitysummerlin.com", // Replace with your website URL
        "telephone": "+1-702-555-1234", // Replace with Dr. Duffy's phone number
        "email": "jan.duffy@example.com", // Replace with Dr. Duffy's email
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main St", // Replace with Dr. Duffy's office address
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89101",
          "addressCountry": "US"
        },
        "priceRange": "$300,000-$1,000,000+",
        "image": "https://example.com/dr-jan-duffy.jpg", // Replace with Dr. Duffy's professional headshot
        "agentAssociatedWith": {
          "@type": "RealEstateAgency",
          "name": "Berkshire Hathaway HomeServices",
          "url": "https://www.bhhs.com/"
        },
        "serviceArea": {
          "@type": "City",
          "name": "Sun City Summerlin"
        },
        "knowsAbout": ["Senior Living", "Retirement Communities", "55+ Communities", "Accessibility Features"],
        "additionalType": "http://www.productontology.org/id/Real_estate_agent"
      }),
    }}
  />
);

const PropertySearch: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [priceRange, setPriceRange] = useState([300000, 800000]);
  const [bedrooms, setBedrooms] = useState("any");
  const [bathrooms, setBathrooms] = useState("any");
  const [propertyType, setPropertyType] = useState("any");
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Accessibility Filters
  const [showAccessibilityFilters, setShowAccessibilityFilters] = useState(false);
  const [activeAccessibilityFilters, setActiveAccessibilityFilters] = useState({});

  const accessibilityFeatures = [
    { id: "wheelchairAccess", label: "Wheelchair Access", important: true },
    { id: "grabBars", label: "Grab Bars in Bathrooms", important: true },
    { id: "walkInShower", label: "Walk-In Shower" },
    { id: "leverHandles", label: "Lever Handles on Doors" },
    { id: "ramps", label: "Ramps" },
    { id: "wideDoorways", label: "Wide Doorways" },
    { id: "elevator", label: "Elevator (if multi-story)" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock property data - in a real implementation, this would come from an API
  const mockProperties: Property[] = [
    {
      id: 1,
      title: "Elegant Single-Story Home",
      price: 548175,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1850,
      propertyType: "Single-Story",
      address: "10243 Sun City Blvd, Las Vegas, NV 89134",
      image: "/property1.jpg",
      features: ["Golf Course View", "Patio", "Updated Kitchen", "Wheelchair Access"]
    },
    {
      id: 2,
      title: "Golf Course Paradise",
      price: 625000,
      bedrooms: 2,
      bathrooms: 2.5,
      sqft: 2100,
      propertyType: "Single-Story",
      address: "9876 Del Webb Blvd, Las Vegas, NV 89134",
      image: "/property2.jpg",
      features: ["Pool", "Spa", "Mountain View", "Grab Bars in Bathrooms"]
    },
    {
      id: 3,
      title: "Contemporary Desert Oasis",
      price: 485000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1750,
      propertyType: "Patio Home",
      address: "2468 Sunshine Way, Las Vegas, NV 89134",
      image: "/property3.jpg",
      features: ["Updated Flooring", "Open Floor Plan", "Desert Landscaping", "Walk-In Shower"]
    }
  ];

  const handleAccessibilityFilterChange = (e: any) => {
    const { name, checked } = e.target;
    setActiveAccessibilityFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked
    }));
  };

  const handleSearch = () => {
    setIsLoading(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      let filtered = mockProperties.filter(property => {
        const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
        const matchesBeds = bedrooms === "any" || property.bedrooms === parseInt(bedrooms);
        const matchesBaths = bathrooms === "any" || property.bathrooms === parseFloat(bathrooms);
        const matchesType = propertyType === "any" || property.propertyType === propertyType;

        return matchesPrice && matchesBeds && matchesBaths && matchesType;
      });

      // Apply accessibility filters
      filtered = filtered.filter(property => {
        for (const featureId in activeAccessibilityFilters) {
          if (activeAccessibilityFilters[featureId] === true) {
            if (!property.features.includes(featureId)) {
              return false;
            }
          }
        }
        return true;
      });

      setSearchResults(filtered);
      setIsLoading(false);
    }, 800);
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Senior-Focused Property Search | Dr. Jan Duffy</title>
        <meta name="description" content="Find the perfect Sun City Summerlin home with our specialized search tools for senior buyers. Filter by accessibility features and senior-friendly amenities." />
      </Head>
      <SeniorRealEstateService />
      <AccessiblePropertySchema />
      <div className={styles.searchContainer}>

            <div className={styles.searchFilters}>
              <div className={styles.accessibilityToggle}>
                <button 
                  onClick={() => setShowAccessibilityFilters(!showAccessibilityFilters)}
                  className={styles.accessibilityButton}
                  aria-expanded={showAccessibilityFilters}
                  aria-controls="senior-property-filters"
                >
                  {showAccessibilityFilters ? 'Hide Accessibility Filters' : 'Show Accessibility Filters'} 
                  <span aria-hidden="true">♿</span>
                </button>
                <p className={styles.accessibilityNote}>Find properties with senior-friendly features</p>
              </div>

              {showAccessibilityFilters && (
                <div id="senior-property-filters" className={styles.accessibilityFilters}>
                  <h3>Accessibility Features</h3>
                  <div className={styles.accessibilityGrid}>
                    {accessibilityFeatures.map(feature => (
                      <div key={feature.id} className={styles.accessibilityCheckbox}>
                        <input
                          type="checkbox"
                          id={`feature-${feature.id}`}
                          name={feature.id}
                          checked={activeAccessibilityFilters[feature.id] || false}
                          onChange={handleAccessibilityFilterChange}
                          aria-label={feature.label}
                        />
                        <label htmlFor={`feature-${feature.id}`}>
                          {feature.label}
                          {feature.important && <span className={styles.importantFeature} title="Highly recommended for seniors">★</span>}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className={styles.filterSummary}>
                    <span className={styles.filterCount} id="filter-count">
                      {searchResults.length} properties match accessibility criteria
                    </span>
                  </div>
                </div>
              )}

              <div className={styles.filterGroup}>
                <label htmlFor="priceRange">Price Range:</label>
                <div className={styles.dualSlider}>
                  <span className={styles.rangeValue}>{formatPrice(priceRange[0])}</span>
                  <input 
                    type="range" 
                    min="200000" 
                    max="1000000" 
                    step="5000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className={styles.rangeSlider}
                  />
                  <span>to</span>
                  <input 
                    type="range" 
                    min="200000" 
                    max="1000000" 
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className={styles.rangeSlider}
                  />
                  <span className={styles.rangeValue}>{formatPrice(priceRange[1])}</span>
                </div>
              </div>

              <div className={styles.filterRow}>
                <div className={styles.filterGroup}>
                  <label htmlFor="bedrooms">Bedrooms:</label>
                  <select 
                    id="bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="any">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>

                <div className={styles.filterGroup}>
                  <label htmlFor="bathrooms">Bathrooms:</label>
                  <select 
                    id="bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="any">Any</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3+</option>
                  </select>
                </div>

                <div className={styles.filterGroup}>
                  <label htmlFor="propertyType">Property Type:</label>
                  <select 
                    id="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="any">Any</option>
                    <option value="Single-Story">Single-Story</option>
                    <option value="Patio Home">Patio Home</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhome">Townhome</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={handleSearch}
                className={styles.searchButton}
                disabled={isLoading}
              >
                {isLoading ? 'Searching...' : 'Search Properties'}
              </button>
            </div>

            <div className={styles.searchResults}>
              {searchResults.length > 0 ? (
                <div className={styles.resultsGrid}>
                  {searchResults.map(property => (
                    <div key={property.id} className={styles.propertyCard}>
                      <div className={styles.propertyImage}>
                        <img src={property.image} alt={property.title} />
                      </div>
                      <div className={styles.propertyInfo}>
                        <h3>{property.title}</h3>
                        <p className={styles.propertyPrice}>{formatPrice(property.price)}</p>
                        <p className={styles.propertyAddress}>{property.address}</p>
                        <div className={styles.propertyStats}>
                          <span>{property.bedrooms} bd</span>
                          <span>{property.bathrooms} ba</span>
                          <span>{property.sqft.toLocaleString()} sqft</span>
                        </div>
                        <div className={styles.propertyFeatures}>
                          {property.features.map((feature, i) => (
                            <span key={i} className={styles.featureTag}>{feature}</span>
                          ))}
                        </div>
                        <button className={styles.viewPropertyBtn}>View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.noResults}>
                  {isLoading ? (
                    <p>Searching for your perfect home...</p>
                  ) : (
                    searchResults.length === 0 && priceRange[0] !== 300000 ? (
                      <div>
                        <p>No properties match your search criteria.</p>
                        <p>Try adjusting your filters for more results.</p>
                      </div>
                    ) : (
                      <div className={styles.initialSearch}>
                        <p>Use the filters to find your dream home in Sun City Summerlin.</p>
                        <p>Dr. Jan Duffy specializes in finding the perfect match for your lifestyle.</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      </div>
      </section>

      <section className={styles.searchTips}>
          <h2>Home Search Tips for Sun City Summerlin</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <h3>Golf Course Views</h3>
              <p>Properties along Eagle Crest, Highland Falls, or Palm Valley courses command premium prices but offer stunning views and direct golf access.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Single-Story Living</h3>
              <p>Most Sun City Summerlin homes are single-story, perfect for aging in place with accessible layouts and no stairs to navigate.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Community Location</h3>
              <p>Consider proximity to recreation centers, shopping, and medical facilities when selecting your ideal neighborhood within Sun City.</p>
            </div>
            <div className={styles.tipCard}>
              <h3>Updated Properties</h3>
              <p>Many homes have been renovated with modern finishes. Look for updated kitchens, bathrooms, and energy-efficient features.</p>
            </div>
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

export default PropertySearch;