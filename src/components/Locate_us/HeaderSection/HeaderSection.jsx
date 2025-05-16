import React from 'react';
import styles from './HeaderSection.module.css';

const HeaderSection = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.mainHeading}>Visit Our Smiling Star</h1>
      <p className={styles.subHeading}>
        We’re here to welcome you and your family at our cultural center — 
        come see what’s happening at our location.
      </p>
    </div>
  );
};

export default HeaderSection;
