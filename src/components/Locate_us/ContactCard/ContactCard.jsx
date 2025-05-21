import React from 'react';
import styles from './ContactCard.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const ContactCard = () => {

  const nav=useNavigate();
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.contactCard}>
        <div className={styles.left}>
          <h2 className={styles.title}>Smiling Star Day Care</h2>
          <div className={styles.item}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <strong>Address</strong>
              <p>46, First St, New Saram, Naveena Garden, Old Saram, Puducherry, 605013</p>
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
            <strong>Start Your Journey</strong>
            <p>
              Every great adventure begins with a first step. Start your little one’s journey in a space filled with love, learning, and laughter.
            </p>
            <button className={styles.tourButton} onClick={()=>nav("/Enquire_form")}>Enroll</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
