
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import styles from '../styles/PageTransition.module.css';
import usePageTransition from '../utils/usePageTransition';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { isTransitioning, transitionKey } = usePageTransition();

  return (
    <div className={styles.pageTransitionContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={transitionKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={styles.pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
