import styles from "./Hero.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img from '../../../assets/img1.png'
import video1 from '../../../assets/video1.mp4'
import video2 from '../../../assets/video2.mp4'

const slides = [
    {
        id: 1,
        type: "video",
        media: video1,
        title: "Return To Silent Hill",
        subtitle: "You live here now",
        button: "LEARN MORE ->",
    },
    {
        id: 2,
        type: "img",
        media: img,
        title: "PAN'S LABYRINTH",
        subtitle: "20th Aniversy in 3D",
        button: "LEARN MORE ->",
    },
    {
        id: 3,
        type: "video",
        media: video2,
        title: "Air Buds Return ",
        subtitle: "Anything is possible",
        date: "Coming Soon",
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

                        {item.type === "video" ? (
                            <video
                                className={styles.media}
                                src={item.media}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        ) : (
                            <img
                                className={styles.media}
                                src={item.media}
                                alt={item.title}
                            />
                        )}

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