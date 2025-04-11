import styles from './StillHaveQuestions.module.css';
import { Phone, Mail } from 'lucide-react'; // optional: for icons

export default function StillHaveQuestions() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Still Have Questions?</h2>
      <p className={styles.subtext}>
        Our team is ready to help you find the perfect KidSpace center for your child.
        Contact us today to learn more about our programs and enrollment process.
      </p>
      <div className={styles.buttonGroup}>
        <a href="tel:+1234567890" className={styles.callButton}>
          <Phone size={18} className={styles.icon} />
          Call Us
        </a>
        <a href="mailto:info@kidspace.com" className={styles.emailButton}>
          <Mail size={18} className={styles.icon} />
          Email Us
        </a>
      </div>
    </section>
  );
}
