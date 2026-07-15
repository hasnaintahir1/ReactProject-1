import styles from "./Carousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image:
      "https://mrwallpaper.com/images/hd/don-t-miss-the-return-of-demon-slayer-in-season-2-b8cgeitp4istvxm4.jpg",
  },
  {
    id: 2,
    image:
      "https://collider.com/wp-content/uploads/inception_movie_poster_banner_01.jpg",
  },
  {
    id: 3,
    image:
      "https://i.redd.it/tried-redesigning-my-thumbnails-on-youtube-to-promote-the-v0-uvo2tp56a7de1.jpg?width=1920&format=pjpg&auto=webp&s=fc825f81de3bf03df0b050f0929a5740f973bc7c",
  },
  {
    id: 4,
    image:
      "https://i.ytimg.com/vi/5RUc0bAZzUA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDdNuM_UiTQWs1cqMxYING2wMGfGw",
  },
  {
    id: 5,
    image:
      "https://dailydead.com/wp-content/uploads/2026/01/Silent-Hill-2.jpg",
  },
];

export default function Carousel() {
  return (
    <section className={styles.featured}>

      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={false}
          slidesPerView={2}
          slidesPerGroup={1}
          spaceBetween={25}
          speed={900}
          autoplay={{
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.movieCard}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt="" />
                </div>

                <button className={styles.watchBtn}>
                  WATCH NOW →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}