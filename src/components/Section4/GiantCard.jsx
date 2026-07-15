import React from "react";
import styles from "./GiantCard.module.css";

const GiantCard = () => {
  return (
    <div className={styles.card}>

      <div className={styles.logo}>
        <img src="https://www.cineverse.com/wp-content/uploads/2026/03/150-giant-300x142.png " alt="Giant Worldwide" />
      </div>

      <p>
        Giant Worldwide provides end-to-end media services that support the
        global distribution of film and television content. Operating across
        facilities in New York, Burbank, Warsaw and Kolkata, Giant combines
        experienced project management with advanced technology to deliver
        content faster, smarter and with the highest quality.
      </p>

      <button>
        GIANT WORLDWIDE →
      </button>

    </div>
  );
};

export default GiantCard;