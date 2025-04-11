import styles from './FAQ.module.css';
import {faqs} from '../../../content/Locate_us'
export default function FAQ() {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <p className={styles.subtitle}>
        Have questions about our location? Find answers to common questions below.
      </p>
      <div className={styles.grid}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.question}>{faq.question}</h3>
            <p className={styles.answer}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
