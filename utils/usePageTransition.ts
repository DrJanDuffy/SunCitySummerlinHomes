
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export function usePageTransition() {
  const router = useRouter();
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Set ready state after initial load
    setIsReady(true);
    
    // Handle route change start
    const handleRouteChangeStart = () => {
      setIsRouteChanging(true);
    };
    
    // Handle route change complete
    const handleRouteChangeComplete = () => {
      setIsRouteChanging(false);
    };
    
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
  
  return { isRouteChanging, isReady, pathname: router.pathname };
}

export default usePageTransition;
