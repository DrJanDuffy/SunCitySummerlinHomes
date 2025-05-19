
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";

const Header = () => {
  const router = useRouter();
  
  // Determine if a link is active
  const isActive = (path: string) => {
    return router.pathname === path ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoContainer}>
          <div className={styles.logoText}>
            <h1 className={styles.logo}>Sun City Summerlin</h1>
            <div className={styles.subLogoContainer}>
              <img src="/bhhs-quality-seal-black.png" alt="BHHS Logo" className={styles.headerLogo} />
              <p className={styles.subLogo}>Dr. Jan Duffy, REALTOR® | 55+ Specialist</p>
            </div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <nav className={styles.nav}>
            <div className={styles.navLinks}>
              <Link href="/" className={isActive('/')}><span>Home</span></Link>
              <Link href="/properties" className={isActive('/properties')}><span>Properties</span></Link>
              <Link href="/search" className={isActive('/search')}><span>Search</span></Link>
              <Link href="/community" className={isActive('/community')}><span>Community</span></Link>
              <Link href="/lifestyle" className={isActive('/lifestyle')}><span>Lifestyle</span></Link>
              <Link href="/amenities" className={isActive('/amenities')}><span>Amenities</span></Link>
              <Link href="/zipcodes" className={isActive('/zipcodes')}><span>Zipcodes</span></Link>
              <Link href="/blog" className={isActive('/blog')}><span>Blog</span></Link>
              <Link href="/testimonials" className={isActive('/testimonials')}><span>Testimonials</span></Link>
              <Link href="/contact" className={isActive('/contact')}><span>Contact</span></Link>
            </div>
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
  );
};

export default Header;
