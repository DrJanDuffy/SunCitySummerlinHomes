import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Zipcodes.module.css";
import { useState } from "react";

const ZipcodesIndex: NextPage = () => {
  const [activeZipcode, setActiveZipcode] = useState<string | null>(null);

  // Las Vegas zipcode data with relevant neighborhoods and descriptions
  const zipcodes = [
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
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Las Vegas Zipcodes | Sun City Summerlin | Dr. Jan Duffy</title>
        <meta name="description" content="Explore Las Vegas zipcodes and neighborhoods with Dr. Jan Duffy, your real estate expert. Find information on Sun City Summerlin and surrounding areas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Las Vegas Zipcodes</h1>
        <p>Please select a zipcode to learn more</p>

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
      </main>
    </div>
  );
};

export default ZipcodesIndex;