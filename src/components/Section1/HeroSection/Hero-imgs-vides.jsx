import styles from "./Hero.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'

const slides = [
    {
        id: 1,
        type: "img",
        media: img3,
        title: "Return To Silent Hill",
        subtitle: "You live here now",
        button: "LEARN MORE ->",
    },
    {
        id: 2,
        type: "img",
        media: img1,
        title: "Avatar",
        subtitle: "Live here now!!",
        button: "LEARN MORE ->",
    },
    {
        id: 3,
        type: "img",
        media: img2,
        title: "Brave",
        subtitle: "Comming Soon",
        button: "LEARN MORE",
    },
];

const Hero = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            className={styles.hero}
        >
            {slides.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className={styles.slide}>
                        <img
                            className={styles.media}
                            src={item.media}
                            alt={item.title}
                        />
                        <div className={styles.overlay}></div>

                        <div className={styles.content}>
                            <h1>{item.title}</h1>
                            <h3>{item.subtitle}</h3>
                            <button>{item.button}</button>
                        </div>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Hero;