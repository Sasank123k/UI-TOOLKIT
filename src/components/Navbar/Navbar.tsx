// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const fight = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="https://www17.wellsfargomedia.com/assets/images/rwd/wf_logo_220x23.png" alt="Wells Fargo Logo" className={styles.logoImage} />
        </Link>
      </div>
      <button className={styles.hamburger} onClick={fight}>
        {isMobileMenuOpen ? <span className={styles.closeIcon}>&times;</span> : <span>&#9776;</span>}
      </button>
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
        <li>
          <Link to="/" className={styles.navLink} onClick={toggleMobileMenu}>Home</Link>
        </li>
        <li>
          <Link to="/components" className={styles.navLink} onClick={toggleMobileMenu}>Components</Link>
        </li>
        <li>
          <Link to="/utilities" className={styles.navLink} onClick={toggleMobileMenu}>Utilities</Link>
        </li>
        <li>
          <Link to="/documentation" className={styles.navLink} onClick={toggleMobileMenu}>Documentation</Link>
        </li>
        <li>
          <Link to="/examples" className={styles.navLink} onClick={toggleMobileMenu}>Examples</Link>
        </li>
        <li className={styles.userActions}>
          {!isLoggedIn ? (
            <Link to="/signup" className={styles.navLink} onClick={toggleMobileMenu}>Sign Up</Link>
          ) : (
            <FaUserCircle className={styles.userIcon} />
          )}
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
