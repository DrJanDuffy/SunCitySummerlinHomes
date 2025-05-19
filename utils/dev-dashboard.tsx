
import React, { useState, useEffect } from 'react';
import styles from '../styles/DevDashboard.module.css';

export default function DevDashboard() {
  const [buildInfo, setBuildInfo] = useState({
    lastBuild: 'Unknown',
    nextVersion: '12.3.4',
    nodeVersion: 'Unknown',
  });
  
  const [pageSpeeds, setPageSpeeds] = useState({
    desktop: 0,
    mobile: 0,
  });
  
  useEffect(() => {
    // Get Node version
    fetch('/api/system-info')
      .then(res => res.json())
      .then(data => {
        setBuildInfo(prev => ({
          ...prev,
          nodeVersion: data.nodeVersion,
          lastBuild: data.lastBuild,
        }));
      })
      .catch(err => console.error('Failed to load system info:', err));
    
    // This would normally fetch real Page Speed data
    setPageSpeeds({
      desktop: 95,
      mobile: 82,
    });
  }, []);

  return (
    <div className={styles.dashboard}>
      <h2>Developer Dashboard</h2>
      
      <div className={styles.statsGrid}>
        <div className={styles.stat}>
          <h3>Build Info</h3>
          <p>Next.js: v{buildInfo.nextVersion}</p>
          <p>Node: {buildInfo.nodeVersion}</p>
          <p>Last Build: {buildInfo.lastBuild}</p>
        </div>
        
        <div className={styles.stat}>
          <h3>PageSpeed</h3>
          <div className={styles.gauge}>
            <div 
              className={styles.desktopScore} 
              style={{width: `${pageSpeeds.desktop}%`}}
              data-score={pageSpeeds.desktop}
            />
            <span>Desktop</span>
          </div>
          <div className={styles.gauge}>
            <div 
              className={styles.mobileScore} 
              style={{width: `${pageSpeeds.mobile}%`}}  
              data-score={pageSpeeds.mobile}
            />
            <span>Mobile</span>
          </div>
        </div>
      </div>
      
      <div className={styles.quickActions}>
        <button>Clear Cache</button>
        <button>Rebuild Project</button>
        <button>Push to GitHub</button>
      </div>
    </div>
  );
}
