
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Custom404: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Page Not Found | Sun City Summerlin Real Estate</title>
        <meta name="description" content="The page you're looking for couldn't be found." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.description}>
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className={styles.grid}>
          <Link href="/" className={styles.card}>
            <h2>Return Home &rarr;</h2>
            <p>Go back to the homepage</p>
          </Link>
          <Link href="/properties" className={styles.card}>
            <h2>View Properties &rarr;</h2>
            <p>Browse available Sun City Summerlin homes</p>
          </Link>
          <Link href="/contact" className={styles.card}>
            <h2>Contact Us &rarr;</h2>
            <p>Get in touch for assistance</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Custom404;
