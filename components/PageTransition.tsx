
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import styles from '../styles/PageTransition.module.css';

interface PageTransitionProps {
  children: ReactNode;
  key?: string;
}

const PageTransition = ({ children, key }: PageTransitionProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className={styles.pageTransitionContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={styles.pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <div className={styles.decorationTop} />
      <div className={styles.decorationBottom} />
    </div>
  );
};

export default PageTransition;
