import React, { useEffect, useState } from "react";
import styles from "./Popup.module.css";

const Popup = ({ initialDelay = 3000, interval = 10000, imageUrl }) => {
  const [show, setShow] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    let timer;

    if (!show) {
      // Determine which time to use
      const delay = hasAppeared ? interval : initialDelay;

      timer = setTimeout(() => {
        setShow(true);
        if (!hasAppeared) setHasAppeared(true);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [show, interval, initialDelay, hasAppeared]);

  const closePopup = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt="poster" />
          <button className={styles.closeBtn} onClick={closePopup}>✕</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;