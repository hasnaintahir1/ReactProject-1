import styles from "./Section6.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Heading6 from "../Section6-Heading/Section6Heading"
const slides = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8q8CXceba6p_D_e6S1ciW9K9aeE0d-n2NqhB7CmnJsft39-fxkgpk8Qdi&s=10",
  },
  {
    id: 2,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e42e0b218306013.679f927c8530c.jpg",
  },
  {
    id: 3,
    image:
      "https://industryhit.com/t/wp-content/uploads/2024/11/thumbnail-trailer-1-1.jpg",
  },
  {
    id: 4,
    image:
      "https://images.ottplay.com/thumbnails/2024q3/Karthi_in_Kanguva_tr_OTTplay_news_body_image_3_297.jpeg",
  },
  {
    id: 5,
    image:
      "https://i.ytimg.com/vi/n0C6wAeuO7c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBkgsZsSOwb7ZkWHtYkOamS6iEsmg",
  },
];

export default function Carousel() {
  return (
    <section className={styles.featured}>
      <Heading6 />

      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          slidesPerView={3}
          slidesPerGroup={1}
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
              slidesPerView: 3,
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