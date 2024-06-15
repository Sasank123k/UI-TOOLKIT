// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.footerLinks}>
          <li><a href="#">Privacy, Cookies, Security & Legal</a></li>
          <li><a href="#">Notice of Data Collection</a></li>
          <li><a href="#">General Terms of Use</a></li>
          <li><a href="#">Online Access Agreement</a></li>
          <li><a href="#">Ad Choices</a></li>
          <li><a href="#">Report Fraud</a></li>
          <li><a href="#">About Wells Fargo</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Diversity and Accessibility</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
