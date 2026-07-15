import React from "react";
import styles from "./Section9.module.css";
import Heading from "./SectionHeading/SectionHeading";

const news = [
  {
    id: 1,
    source: "The Wrap",
    title: "Cineverse Acquires Global Media Services Provider Giant Worldwide",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/cineverse-gian-370x206-1-300x167.jpg",
  },
  {
    id: 2,
    source: "Deadline",
    title: "CCineverse Launches ‘Return to Silent Hill’ Alternate Reality Game Ahead of Film’s Release",
    image:"https://www.cineverse.com/wp-content/uploads/2025/12/cineverse-gamestop-r2sh-370x206-1.jpg",
  },
  {
    id: 3,
    source: "Variety",
    title: "Guillermo del Toro’s ‘Pan’s Labyrinth’ Acquired By Cineverse",
    image:"https://www.cineverse.com/wp-content/uploads/2025/12/pans-370x206-1.jpg",
  },
  {
    id: 4,
    source: "Los Angle Times",
    title: "The traditional indie film system is hurting. This executive says he’s built a winning formula",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/Rectangle-2-2.png",
  },
  {
    id: 5,
    source: "Deadline",
    title: "Air Bud Returns’: 15th Film in Franchise, From Cineverse and Air Bud Entertainment, Eyes 2026 Theatrical Release",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/AIRBUD-RETURNS-300x134.png",
  },
  {
    id: 6,
    source: "Puck",
    title: "Matt is joined by Cineverse C.E.O. Chris McGurk to talk about the rise of independently financed horror movies",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/Rectangle-2-1-300x167.png ",
  },
];

const Section9 = () => {
  return (
    <section className={styles.feature}>
      <Heading />

      <div className={styles.container}>
        {news.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.newsImg}>
              <img src={item.image} alt={item.title} />
            </div>

            <div className={styles.content}>
              <h5>{item.source}</h5>
              <h1>{item.title}</h1>

              <button>READ MORE →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section9;