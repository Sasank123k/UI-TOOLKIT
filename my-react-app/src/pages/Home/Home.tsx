// src/pages/Home/Home.tsx
import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <img src="https://via.placeholder.com/100" alt="Toolkit Logo" className={styles.logo} />
        <h1>Build fast, responsive sites with Wells Fargo UI Toolkit</h1>
        <p>
          Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.
        </p>
      </header>
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.icon}>
            <img src="https://via.placeholder.com/50" alt="Feature Icon 1" />
          </div>
          <h3>Responsive Design</h3>
          <p>Create responsive designs that look great on all devices, from smartphones to desktops.</p>
          <a href="#" className={styles.learnMore}>Learn more &gt;</a>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.icon}>
            <img src="https://via.placeholder.com/50" alt="Feature Icon 2" />
          </div>
          <h3>Reusable Components</h3>
          <p>Utilize a library of reusable components to maintain consistency across projects.</p>
          <a href="#" className={styles.learnMore}>Learn more &gt;</a>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.icon}>
            <img src="https://via.placeholder.com/50" alt="Feature Icon 3" />
          </div>
          <h3>Customization</h3>
          <p>Easily customize components to match your branding and design requirements.</p>
          <a href="#" className={styles.learnMore}>Learn more &gt;</a>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.icon}>
            <img src="https://via.placeholder.com/50" alt="Feature Icon 4" />
          </div>
          <h3>Accessibility</h3>
          <p>Ensure your applications are accessible to all users with built-in accessibility features.</p>
          <a href="#" className={styles.learnMore}>Learn more &gt;</a>
        </div>
      </div>
      <div className={styles.getStarted}>
        <div className={styles.getStartedIcon}>
          <img src="https://via.placeholder.com/50" alt="Get Started Icon" />
        </div>
        <h2>Get started any way you want</h2>
        <p>
          Jump right into building with the Wells Fargo UI Toolkit—use the CDN, install it via package manager, or download the source code.
        </p>
        <a href="#" className={styles.getStartedLink}>Read installation docs &gt;</a>
      </div>
    </div>
  );
};

export default Home;
