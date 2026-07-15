import React from "react";
import styles from "./NowPlaying.module.css";

const movies = [
  {
    id: 1,
    title: "Terrifier 3",
    image:
      "https://www.cineverse.com/wp-content/uploads/2026/03/terrifier-3-600w.jpg",
  },
  {
    id: 2,
    title: "The Toxic Avengers",
    image:
      "https://www.cineverse.com/wp-content/uploads/2026/03/the-toxic-avenger-600w.jpg",
  },
  {
    id: 3,
    title: "Return To Silent Hill",
    image:
      "https://www.cineverse.com/wp-content/uploads/2026/04/retrun-silent-hill-1.jpg",
  },
  {
    id: 4,
    title: "Highlander",
    image:
      "https://www.cineverse.com/wp-content/uploads/2026/03/highlander-600w.jpg",
  },
  {
    id: 5,
    title: "Silent Night Deadly Night",
    image:
      "https://www.cineverse.com/wp-content/uploads/2026/03/sndn-600w.jpg",
  },
  {
    id: 6,
    title: "Lesbian Space Princess",
    image:
      "https://www.cineverse.com/wp-content/uploads/2026/03/lesbian-space-princess-600w.jpg",
  },
  {
    id: 7,
    title: "The Kings You Kill",
    image:
      "https://www.cineverse.com/wp-content/uploads/2026/03/the-things-you-kill-600w.jpg",
  },
  {
    id: 8,
    title: "A Usefull Ghost",
    image:
      "https://www.cineverse.com/wp-content/uploads/2026/03/a-useful-ghost-600w.jpg",
  },
];

const Nowplaying = () => {
  return (
    <section className={styles.feature}>

      <div className={styles.mainHeading}>
        <h1>NOW PLAYING</h1>
      </div>

      <div className={styles.cardSection}>
        {movies.map((movie) => (
          <div className={styles.card} key={movie.id}>

            <div className={styles.Img}>
              <img src={movie.image} alt={movie.title} />
            </div>

            <h2>{movie.title}</h2>

            <button>WATCH NOW →</button>

          </div>
        ))}
      </div>
      <div className={styles.Connect}>
        <div className={styles.connectMain}>
          <div className={styles.connectContent}>
            <h1>LET'S CONNECT</h1>
            <button>CONTACT us →</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Nowplaying;