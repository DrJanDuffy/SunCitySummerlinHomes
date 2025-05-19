
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  // Enhanced page transitions with multiple animation options
  const variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    enter: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for smoother motion
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="page-wrapper"
    >
      <motion.div variants={childVariants} className="page-content">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;
