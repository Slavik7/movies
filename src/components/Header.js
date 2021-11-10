import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Movies.</Link>
      </div>
      <div
        className={styles["burger"]}
        onClick={() => {
          setNavOpen((state) => !state);
        }}
      >
        <div
          className={`${styles["burger-line1"]} ${
            navOpen ? styles["open"] : ""
          }`}
        ></div>
        <div
          className={`${styles["burger-line2"]} ${
            navOpen ? styles["open"] : ""
          }`}
        ></div>
        <div
          className={`${styles["burger-line3"]} ${
            navOpen ? styles["open"] : ""
          }`}
        ></div>
      </div>

      <div
        className={`${styles["nav-window"]} ${
          navOpen ? styles["window-open"] : ""
        }`}
      >
        <nav className={styles["nav-main"]}>
          <ul className={styles["nav-options"]}>
            <li className={styles["nav-option"]}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles["nav-option"]}>
              <Link to="/popular-movies">Popular Movies</Link>
            </li>
            <li className={styles["nav-option"]}>
              <Link to="/upcoming-movies">Upcoming Movies</Link>
            </li>
            <li className={styles["nav-option"]}>
              <Link to="/search">Search</Link>
            </li>
            <li className={styles["nav-option"]}>
              <Link to="/filter">Filter</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
