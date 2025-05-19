
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/PageTransition.module.css';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
    
    const handleRouteChangeStart = () => {
      setIsVisible(false);
    };
    
    const handleRouteChangeComplete = () => {
      setTimeout(() => setIsVisible(true), 50);
    };
    
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <div className={`${styles.pageTransition} ${isVisible ? styles.visible : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;
