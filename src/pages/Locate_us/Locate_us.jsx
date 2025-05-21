import React from 'react';
import styles from './Locate_us.module.css';

import ContactCard from '../../components/Locate_us/ContactCard/ContactCard';
import MapSection from '../../components/Locate_us/MapSection/MapSection';
import FAQ from '../../components/Locate_us/FAQ/FAQ';
import HeaderSection from '../../components/Locate_us/HeaderSection/HeaderSection';
import Footer from '../../components/Home/Footer/Footer';

const Locate_us = () => {
  return (
    <div className={styles.container}>
       <HeaderSection/>
       <MapSection />
      <ContactCard />
      <FAQ />
      
      <Footer/>
    </div>
  );
};

export default Locate_us;
