import { ReactNode } from 'react';
import styles from '../styles/PageTransition.module.css';
import usePageTransition from '../utils/usePageTransition';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { isReady, pathname } = usePageTransition();

  // Apply different CSS classes based on the page path
  const getPageClass = () => {
    if (pathname === '/') {
      return styles.homePage;
    }
    return '';
  };

  return (
    <div 
      className={`${styles.pageWrapper} page-wrapper ${isReady ? styles.pageReady : styles.pageHidden} ${getPageClass()}`}
    >
      <div className={styles.decorationTop}></div>
      <div className={`${styles.pageContent} page-content`}>
        {children}
      </div>
      <div className={styles.decorationBottom}></div>
    </div>
  );
};

export default PageTransition;