
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export function usePageTransition() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    // Handle route change start
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };
    
    // Handle route change complete
    const handleRouteChangeComplete = () => {
      setIsTransitioning(false);
    };
    
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
  
  return { 
    isTransitioning, 
    // Return current route as key for AnimatePresence
    routeKey: router.asPath || router.pathname 
  };
}

export default usePageTransition;
