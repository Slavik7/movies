import React from "react";
import styles from "../styles/PersonSlider.module.css";
import { posterURL } from "../api";
import { Link } from "react-router-dom";
const PersonSlider = ({ persons }) => {
  return (
    <section className={styles["person-slider-section"]}>
      <h2 className={styles["person-section-title"]}>Popular Actors</h2>
      <div className={styles["person-slider-container"]}>
        {persons.map((person) => {
          return (
            <Link to={`/person/${person.id}`} key={person.id}>
              <div className={styles["person-card"]}>
                <h3 className={styles["person-name"]}>{person.name}</h3>
                <img
                  className={styles["profile-pic"]}
                  src={posterURL(person.profile_path)}
                  alt={person.name}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PersonSlider;
