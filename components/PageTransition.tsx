
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from '../styles/PageTransition.module.css';
import usePageTransition from '../utils/usePageTransition';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { isReady, pathname } = usePageTransition();

  // Advanced page transitions with customizable variants
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.98,
      filter: 'blur(5px)'
    },
    enter: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smoother motion
        staggerChildren: 0.09,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      scale: 0.98,
      filter: 'blur(5px)',
      transition: {
        duration: 0.4,
        ease: [0.43, 0, 0.23, 0.96]
      }
    }
  };

  // Different variants based on page type
  const getChildVariants = () => {
    // Home page gets a special animation
    if (pathname === '/') {
      return {
        hidden: { opacity: 0, y: 30 },
        enter: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }
        },
        exit: { 
          opacity: 0, 
          y: -20,
          transition: {
            duration: 0.5,
            ease: [0.43, 0, 0.23, 0.96]
          }
        }
      };
    }
    
    // Default animation for all other pages
    return {
      hidden: { opacity: 0, y: 25 },
      enter: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }
      },
      exit: { 
        opacity: 0, 
        y: -15,
        transition: {
          duration: 0.3,
          ease: [0.43, 0, 0.23, 0.96]
        }
      }
    };
  };
  
  const childVariants = getChildVariants();

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isReady ? "enter" : "hidden"}
      exit="exit"
      className={`${styles.pageWrapper} page-wrapper`}
      key={pathname}
    >
      <div className={styles.decorationTop}></div>
      <motion.div 
        variants={childVariants} 
        className={`${styles.pageContent} page-content`}
        layoutId="page-content"
      >
        {children}
      </motion.div>
      <div className={styles.decorationBottom}></div>
    </motion.div>
  );
};

export default PageTransition;
