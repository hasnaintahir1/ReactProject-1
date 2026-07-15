import React from "react";
import styles from "./TechnologyCard.module.css";

const TechnologyCard = () => {
  return (
    <div className={styles.card}>

      <div className={styles.logo}>
        <img src="https://www.cineverse.com/wp-content/uploads/2026/03/150h-matchpoint-768x124.png" alt="Matchpoint" />
      </div>

      <p>
        Cineverse develops proprietary technology that powers the future of
        entertainment. Driven by its development team in India, Cineverse has
        built and refined technology solutions that have pioneered streaming
        content management, packaging and distribution while leaning into
        advances in AI to set the company apart from the competition.
      </p>

      <button>
        MATCHPOINT →
      </button>

    </div>
  );
};

export default TechnologyCard;