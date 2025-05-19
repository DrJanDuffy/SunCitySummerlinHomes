
import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/PageTransition.module.css';
import { useRouter } from 'next/router';

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const router = useRouter();
  
  return (
    <div className={styles.pageTransitionWrapper}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
