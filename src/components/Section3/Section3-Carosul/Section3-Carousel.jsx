import styles from "./Section3-Carousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Heading3 from "../Section3-Heading/Section3-heading"
const slides = [
  {
    id: 1,
    image:
      "https://preview.redd.it/tried-redesigning-my-thumbnails-on-youtube-to-promote-the-v0-xqmxv056a7de1.jpg?width=640&crop=smart&auto=webp&s=0dcb78924ddccc5abad52e923640227db361629b",
  },
  {
    id: 2,
    image:
      "https://i.redd.it/tried-redesigning-my-thumbnails-on-youtube-to-promote-the-v0-pjhttm56a7de1.jpg?width=1920&format=pjpg&auto=webp&s=b328d7e04c1122d2ff39e922d05b410e07d61187",
  },
  {
    id: 3,
    image:
      "https://i.redd.it/tried-redesigning-my-thumbnails-on-youtube-to-promote-the-v0-7l5hh256a7de1.jpg?width=1920&format=pjpg&auto=webp&s=dae332f4d5723d4dc04a3b3922e3eedbde8207f2",
  },
  {
    id: 4,
    image:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/224740394/original/e0508172a802d7a8e1bf4e596633ae86ad29e2c4/create-professional-video-thumbnails-poster-flyers-banner.jpg",
  },
  {
    id: 5,
    image:
      "https://preview.redd.it/short-film-thumbnail-messing-around-with-an-old-short-film-v0-eea8863xm6oe1.jpg?width=640&crop=smart&auto=webp&s=6f1be35a2ddf7fedab1fc7331bcd1a0e517a2fa7",
  },
];

export default function Carousel() {
  return (
    <section className={styles.featured}>
      <Heading3 />

      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={false}
          spaceBetween={30}
          speed={900}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.movieCard}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt="" />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.Btn}>
        <button className={styles.watchBtn}>
          WATCH NOW →
        </button>
      </div>
    </section>
  );
}