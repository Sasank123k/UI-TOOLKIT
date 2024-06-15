// src/pages/Home.tsx
import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Welcome to the Wells Fargo UI Toolkit</h1>
        <p>This toolkit provides a comprehensive set of UI components to help you build consistent and beautiful web applications.</p>
      </header>
      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>Reusable Components</h3>
            <p>Build your application with a set of reusable components that ensure consistency and ease of use.</p>
          </div>
          <div className={styles.card}>
            <h3>Responsive Design</h3>
            <p>Our components are designed to be fully responsive, ensuring a great experience on any device.</p>
          </div>
          <div className={styles.card}>
            <h3>Accessibility Support</h3>
            <p>We prioritize accessibility to make sure your application is usable by everyone, including those with disabilities.</p>
          </div>
          <div className={styles.card}>
            <h3>Customizable Styles</h3>
            <p>Customize the look and feel of your application with our easy-to-use style options.</p>
          </div>
        </div>
      </section>
      <section className={styles.quickStart}>
        <h2>Quick Start Guide</h2>
        <div className={styles.card}>
          <p>To get started, follow these steps:</p>
          <ol>
            <li>Install the toolkit using npm or yarn.</li>
            <li>Import the desired components into your project.</li>
            <li>Customize the styles as needed.</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Home;
