import React from 'react'
import styles from './Section2.module.css'

const movies = [
  {
    id: 1,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/channel-screambox-453x255-1.jpg"
  },
  {
    id: 2,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/Fandor_16x9.png"
  },
  {
    id: 3,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/channel-dove-453x255-1.jpg"
  },
  {
    id: 4,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/retrocrush-streaming-1.jpg"
  },
  {
    id: 5,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/MidnightPulp_16x9.png"
  },
  {
    id: 6,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/AsianCrush_PosterHoriz_16x9.png"
  },
  {
    id: 7,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/Docurama_16x9.png"
  },
  {
    id: 8,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/Cineverse-16x9-2.png"
  },
  {
    id: 9,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/Bob-Ross-1920x1080-1.png"
  },
  {
    id: 10,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/Yu-Gi-Oh-©-Yu-Gi-Oh-1996-Kazuki-Takahashi_16x9-1.png"
  },
  {
    id: 11,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/12/SoReal_16x9_ChannelImage.png"
  },
  {
    id: 12,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/JoySauce-16x9-1.png"
  },
  {
    id: 13,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/The-Dog-Whisperer_16x9-300x169.png"
  },
  {
    id: 14,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/HistorianChannel16x9-300x169.png"
  },
  {
    id: 15,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/Garfield-1920x1080-1.png"
  },
  {
    id: 16,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/CrimeHunter_16x9.png"
  },
  {
    id: 17,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/Real-Madrid-16x9-1-300x169.png"
  },
  {
    id: 18,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/BARNEY_16x9_Key_Art-300x169.png"
  },
  {
    id: 19,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/Land-of-the-Lost-1920x1080-1-300x169.png"
  },
  {
    id: 20,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/LoneStar_Thumbnail_1920x1080.png"
  },
  {
    id: 21,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/GoPro_1920x1080-300x169.png"
  },
  {
    id: 22,
    image:
      "https://www.cineverse.com/wp-content/uploads/2025/08/Verse-1920x1080-1-300x169.png"
  }
];

const Section2 = () => {
  return (
    <section className={styles.feature}>

      <div className={styles.mainHeading}>
        <h1>CHANNELS</h1>
      </div>

      <div className={styles.cardSection}>
        {movies.map((movie) => (
          <div className={styles.card} key={movie.id}>

            <div className={styles.Img}>
              <img src={movie.image} alt={movie.title} />
            </div>

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
  )
}

export default Section2