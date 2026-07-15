import React from "react";
import styles from "./Section.module.css";
import Heading from "./Section8Heading/SectionHeading";

const news = [
  {
    id: 1,
    title: "Channel Takeovers",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/Channel-Takeover-M3GAN-2.0.png",
  },
  {
    id: 2,
    title: "Social Takeovers",
    image:"https://www.cineverse.com/wp-content/uploads/2025/12/Social-Takeover-Heart-Eyes.png",
  },
  {
    id: 3,
    title: "QR Code Integrations",
    image:"https://www.cineverse.com/wp-content/uploads/2025/12/QR-Code-Integration-Toxic-Avenger.png",
  },
  {
    id: 4,
    title: "Lower Thirds",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/Lower-Third-The-Monkey.png",
  },
  {
    id: 5,
    title: "Unskippable Ads",
    image:
      "https://www.cineverse.com/wp-content/uploads/2026/03/unskippable-ads-1-364x206-1-300x170.jpg",
  },
  {
    id: 6,
    title: "Interstitials",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/Interstitial-A-New-Leaf-300x170.png ",
  },
  {
    id: 7,
    title: "Commercial Spots & Dynamic Pods",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/Commercial-Spots-Unskippable-Ads-T3.png ",
  },
  {
    id: 8,
    title: "Events / Activations",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/Events-Activations-Nosferatu-300x170.png ",
  },
  {
    id: 9,
    title: "Podcasts Custom Host Reads",
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/Podcast-Host-Read-Ads-Rocket-Money-300x170.png",
  },
];

const Section8 = () => {
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
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section8;