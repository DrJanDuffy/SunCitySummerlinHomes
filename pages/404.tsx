
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Page Not Found | Dr. Jan Duffy - Sun City Summerlin Specialist</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>

      <main className={styles.main} style={{ textAlign: 'center', padding: '5rem 1rem' }}>
        <h1 className={styles.title} style={{ marginBottom: '2rem' }}>404 - Page Not Found</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          We're sorry, the page you requested could not be found.
        </p>
        <Link href="/" passHref>
          <span className={styles.button} style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1c4966',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Return to Home
          </span>
        </Link>
      </main>
    </div>
  );
}
