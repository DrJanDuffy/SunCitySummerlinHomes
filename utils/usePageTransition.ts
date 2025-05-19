
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export function usePageTransition() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionKey, setTransitionKey] = useState(router.pathname);
  
  useEffect(() => {
    // Handle route change start
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };
    
    // Handle route change complete
    const handleRouteChangeComplete = (url: string) => {
      setIsTransitioning(false);
      setTransitionKey(url);
    };
    
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
  
  return { isTransitioning, transitionKey: router.pathname };
}

export default usePageTransition;
