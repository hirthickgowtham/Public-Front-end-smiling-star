import React from 'react';
import styles from './ContactCard.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.contactCard}>
        <div className={styles.left}>
          <h2 className={styles.title}>Golden Gate KidSpace</h2>
          <div className={styles.item}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <strong>Address</strong>
              <p>321 Golden Gate Ave, San Francisco, CA 94102</p>
            </div>
          </div>

          <div className={styles.item}>
            <FaPhoneAlt className={styles.icon} />
            <div>
              <strong>Phone</strong>
              <p>(415) 555-3456</p>
            </div>
          </div>

          <div className={styles.item}>
            <FaEnvelope className={styles.icon} />
            <div>
              <strong>Email</strong>
              <p>golden.gate.kidspace@kidspace.com</p>
            </div>
          </div>

          <div className={styles.amenities}>
            <strong>Amenities</strong>
            <div className={styles.tags}>
              <span>Multilingual Program</span>
              <span>Dance Studio</span>
              <span>Science Lab</span>
              <span>Cafeteria</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.facilities}>
            <strong>Nearby Facilities</strong>
            <ul>
              <li>Park</li>
              <li>Elementary School</li>
              <li>Fitness Center</li>
              <li>Café</li>
            </ul>
          </div>

          <div className={styles.visit}>
            <strong>Schedule a Visit</strong>
            <p>
              Interested in touring this location? Schedule a visit with our staff.
            </p>
            <button className={styles.tourButton}>Book a Tour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
