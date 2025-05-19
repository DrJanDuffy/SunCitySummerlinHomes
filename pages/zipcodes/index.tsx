
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Zipcodes.module.css";

interface ZipcodeData {
  code: string;
  area: string;
  description: string;
  neighborhoods: string[];
}

const Zipcodes: NextPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeZipcode, setActiveZipcode] = useState<string | null>(null);

  // Las Vegas zipcode data with relevant neighborhoods and descriptions
  const zipcodes: ZipcodeData[] = [
    {
      code: "89134",
      area: "Sun City Summerlin",
      description: "Premier 55+ community with golf courses, recreation centers, and luxury single-story homes.",
      neighborhoods: ["Sun City", "The Arbors", "Eagle Hills"]
    },
    {
      code: "89135",
      area: "Summerlin South",
      description: "Upscale master-planned community with parks, trails, and access to Red Rock Canyon.",
      neighborhoods: ["The Ridges", "The Trails", "Red Rock Country Club"]
    },
    {
      code: "89144",
      area: "Summerlin North",
      description: "Family-friendly area with top schools, shopping centers, and outdoor recreation options.",
      neighborhoods: ["Tournament Hills", "The Canyons", "The Gardens"]
    },
    {
      code: "89138",
      area: "Summerlin West",
      description: "Newer development with modern homes, community parks, and desert landscape views.",
      neighborhoods: ["Reverence", "Stonebridge", "The Paseos"]
    },
    {
      code: "89145",
      area: "The Lakes",
      description: "Established community centered around man-made lakes with waterfront properties.",
      neighborhoods: ["The Lakes", "Section 10", "Peccole Ranch"]
    },
    {
      code: "89148",
      area: "Spring Valley",
      description: "Diverse suburban area with a mix of housing options and convenient amenities.",
      neighborhoods: ["Rhodes Ranch", "Spanish Trail", "Chinatown"]
    },
    {
      code: "89117",
      area: "Canyon Gate",
      description: "Gated communities with golf courses and luxury homes near the Summerlin area.",
      neighborhoods: ["Canyon Gate", "Peccole Ranch", "The Lakes"]
    },
    {
      code: "89128",
      area: "Centennial Hills",
      description: "Growing northwest area with new developments and mountain views.",
      neighborhoods: ["Lone Mountain", "Desert Shores", "Painted Desert"]
    },
    {
      code: "89129",
      area: "Centennial Hills North",
      description: "Family-oriented neighborhoods with parks and community centers in northwest Las Vegas.",
      neighborhoods: ["Providence", "Skye Canyon", "Elkhorn Springs"]
    },
    {
      code: "89149",
      area: "Centennial Hills West",
      description: "Expanding area with newer homes and natural desert landscape.",
      neighborhoods: ["Skye Canyon", "Iron Mountain Ranch", "Elkhorn"]
    },
    {
      code: "89130",
      area: "North Las Vegas",
      description: "Affordable housing options with easy access to the Las Vegas Strip and downtown.",
      neighborhoods: ["Aliante", "El Dorado", "Aliante Golf Club"]
    },
    {
      code: "89131",
      area: "North Las Vegas North",
      description: "Growing suburban area with new master-planned communities and amenities.",
      neighborhoods: ["Aliante", "Tule Springs", "Shadow Creek"]
    }
  ];

  useEffect(() => {
    // Initialize Google Map after the script has loaded
    if (window.google && mapRef.current && !mapLoaded) {
      initializeMap();
    }
  }, [mapRef.current, window.google, mapLoaded]);

  // Initialize Google Map
  const initializeMap = () => {
    // Center map on Las Vegas
    const lasVegas = { lat: 36.1699, lng: -115.1398 };
    const map = new google.maps.Map(mapRef.current!, {
      zoom: 11,
      center: lasVegas,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    });

    // Add markers for each zipcode
    zipcodes.forEach((zipcode) => {
      // Get coordinates for each zipcode (approximate)
      // In a real implementation, you'd use a geocoding service
      const getZipcodeCoordinates = (code: string) => {
        const coords: {[key: string]: {lat: number, lng: number}} = {
          "89134": { lat: 36.2043, lng: -115.2936 }, // Sun City Summerlin
          "89135": { lat: 36.1277, lng: -115.3389 }, // Summerlin South
          "89144": { lat: 36.1802, lng: -115.3097 }, // Summerlin North
          "89138": { lat: 36.1689, lng: -115.3584 }, // Summerlin West
          "89145": { lat: 36.1613, lng: -115.2826 }, // The Lakes
          "89148": { lat: 36.0751, lng: -115.2932 }, // Spring Valley
          "89117": { lat: 36.1401, lng: -115.2932 }, // Canyon Gate
          "89128": { lat: 36.2055, lng: -115.2466 }, // Centennial Hills
          "89129": { lat: 36.2275, lng: -115.2788 }, // Centennial Hills North
          "89149": { lat: 36.2446, lng: -115.3097 }, // Centennial Hills West
          "89130": { lat: 36.2460, lng: -115.1969 }, // North Las Vegas
          "89131": { lat: 36.2828, lng: -115.1882 }, // North Las Vegas North
        };
        return coords[code] || { lat: 36.1699, lng: -115.1398 }; // Default to Las Vegas
      };

      const position = getZipcodeCoordinates(zipcode.code);
      
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${zipcode.area} (${zipcode.code})`,
        animation: google.maps.Animation.DROP,
        optimized: true
      });

      // Create info window for each marker
      const infoContent = `
        <div class="zipcode-info">
          <h3>${zipcode.area} - ${zipcode.code}</h3>
          <p>${zipcode.description}</p>
          <p><strong>Neighborhoods:</strong> ${zipcode.neighborhoods.join(', ')}</p>
          <a href="/zipcodes/${zipcode.code}">View homes in ${zipcode.code}</a>
        </div>
      `;
      
      const infoWindow = new google.maps.InfoWindow({
        content: infoContent,
        maxWidth: 300
      });

      // Add click listener to marker
      marker.addListener("click", () => {
        // Close all other info windows
        infoWindow.open(map, marker);
        setActiveZipcode(zipcode.code);
        
        // Center map on marker
        map.panTo(position);
        map.setZoom(13);
      });
    });

    setMapLoaded(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Las Vegas Zipcodes | Sun City Summerlin Real Estate | Dr. Jan Duffy</title>
        <meta name="description" content="Explore Las Vegas zipcodes and find your perfect home in Sun City Summerlin, Summerlin South, Spring Valley, and other premier Las Vegas communities with Dr. Jan Duffy, your local REALTOR®." />
        <meta name="keywords" content="Las Vegas zipcodes, 89134, 89135, 89144, Sun City Summerlin, Summerlin South, Las Vegas real estate, Las Vegas neighborhoods, Dr Jan Duffy" />
        <link rel="canonical" href="https://suncitysummerlin.com/zipcodes" />
        <meta property="og:title" content="Las Vegas Zipcodes | Sun City Summerlin Real Estate" />
        <meta property="og:description" content="Interactive map of Las Vegas zipcodes with property information for Sun City Summerlin and surrounding neighborhoods." />
        <meta property="og:type" content="website" />
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
          <Link href="/zipcodes">Zipcodes</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Las Vegas Zipcodes - Real Estate Guide</h1>
        
        <div className={styles.introduction}>
          <p>
            Las Vegas offers diverse communities each with unique amenities and lifestyles. 
            Explore our interactive map to discover the perfect neighborhood for your next home. 
            Dr. Jan Duffy specializes in Sun City Summerlin (89134) and surrounding areas, with 
            expertise in 55+ communities, golf course properties, and luxury homes throughout Las Vegas.
          </p>
        </div>

        <div className={styles.mapContainer}>
          <div id="map" ref={mapRef} className={styles.map}></div>
          <div className={styles.mapInstructions}>
            <p>Click on a marker to learn more about each zipcode area</p>
          </div>
        </div>

        <section className={styles.zipcodesSection}>
          <h2>Las Vegas Zipcode Areas</h2>
          <div className={styles.zipcodeGrid}>
            {zipcodes.map((zipcode) => (
              <div 
                key={zipcode.code} 
                className={`${styles.zipcodeCard} ${activeZipcode === zipcode.code ? styles.activeCard : ''}`}
                onClick={() => setActiveZipcode(zipcode.code)}
              >
                <h3>{zipcode.area}</h3>
                <div className={styles.zipcodeLabel}>{zipcode.code}</div>
                <p>{zipcode.description}</p>
                <div className={styles.neighborhoodsList}>
                  <strong>Featured Neighborhoods:</strong>
                  <ul>
                    {zipcode.neighborhoods.map((neighborhood, idx) => (
                      <li key={idx}>{neighborhood}</li>
                    ))}
                  </ul>
                </div>
                <Link href={`/zipcodes/${zipcode.code}`} className={styles.zipcodeLink}>
                  Browse {zipcode.area} Homes
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.seoContent}>
          <h2>Finding Your Perfect Las Vegas Home</h2>
          <p>
            Las Vegas offers a diverse range of neighborhoods and communities, each with its own unique character and amenities. 
            From the luxurious golf course properties of Sun City Summerlin (89134) to the family-friendly neighborhoods of 
            Summerlin South (89135), there's something for everyone in the Las Vegas Valley.
          </p>
          <p>
            As a specialist in Las Vegas real estate, Dr. Jan Duffy provides expert guidance on finding the perfect home in your 
            preferred zipcode. Whether you're looking for a 55+ active adult community, a family-oriented neighborhood with top 
            schools, or a luxury property with mountain views, Las Vegas has it all.
          </p>
          <p>
            Contact Dr. Jan Duffy today to explore property options in your desired Las Vegas zipcode and discover why so many 
            people are choosing to make Las Vegas their home.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBranding}>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Sun City Summerlin REALTOR® Dr. Jan Duffy - Serving Las Vegas since 2013</p>
          <p>Dr Jan Duffy REALTOR® | CA to LV Relocation Expert @DrJanDuffy</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://www.bhhs.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.bhhs.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        </div>
      </footer>

      {/* Google Maps API */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=Function.prototype`}
        strategy="afterInteractive"
        onLoad={() => {
          if (mapRef.current && !mapLoaded) {
            initializeMap();
          }
        }}
      />
    </div>
  );
};

export default Zipcodes;
