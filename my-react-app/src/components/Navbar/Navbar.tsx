// src/components/Navbar/Navbar.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Wells Fargo </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        ☰
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li className={styles.closeBtn} onClick={toggleSidebar}>
          &times;
        </li>
        <li>
          <Link to="/" className={styles.navLink} onClick={toggleSidebar}>Home</Link>
        </li>
        <li>
          <Link to="/components" className={styles.navLink} onClick={toggleSidebar}>Components</Link>
        </li>
        <li>
          <Link to="/utilities" className={styles.navLink} onClick={toggleSidebar}>Utilities</Link>
        </li>
        <li>
          <Link to="/documentation" className={styles.navLink} onClick={toggleSidebar}>Documentation</Link>
        </li>
        <li>
          <Link to="/examples" className={styles.navLink} onClick={toggleSidebar}>Examples</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
