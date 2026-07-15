import React from "react";
import styles from "./Section4.module.css";

import TechnologyCard from "./TechnologyCard";
import GiantCard from "./GiantCard";

const Section4 = () => {
  return (
    <section id="technology" className={styles.section}>

      <div className={styles.container}>

        <h1 className={styles.heading}>
          CINEVERSE TECHNOLOGY
        </h1>

        <div className={styles.cards}>

          <TechnologyCard />

          <GiantCard />

        </div>

      </div>

    </section>
  );
};

export default Section4;