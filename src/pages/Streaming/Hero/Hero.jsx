import styles from "./Hero.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
    {
        id: 1,
        image:
            "https://i.ytimg.com/vi/R0Ogu58JQNM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAc4cJi_mcZ0QU0VkLphlamFGUEgQ",
        title: "SCREAMBOX",
        subtitle: "Curated by the best minds in horror, Sreambox invites you into the home of horror icons Art the Clowm, The Toxic Avenger and more.",
        button: "LEARN MORE ->",
    },
    {
        id: 2,
        image:
            "https://m.media-amazon.com/images/S/pv-target-images/56e785d374af2790d1372c5250307bc6ac5296dad60eedfdd912df6726fcc6e7._SX1080_FMjpg_.jpg",
        title: "FANDOR",
        subtitle: "From fresh festival picks to underrated indie classic, Fandor is the ultimate destination for film lovers",
        button: "WATCH NOW ->",
    },
    {
        id: 3,
        image:
            "https://wallpapercat.com/w/full/e/8/6/25770-3840x2160-desktop-4k-attack-on-titan-tv-series-wallpaper-image.jpg",
        title: "MIDNIGHT PULP",
        subtitle:"Stream the strange, cult favoriote across actions, horror, sci-fi, and beyond",
        date: "Coming Soon",
        button: "LEARN MORE",
    },
];

const Hero = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            className={styles.hero}
        >
            {slides.map((item) => (
                <SwiperSlide key={item.id}>
                    <div
                        className={styles.slide}
                        style={{
                            backgroundImage: `url(${item.image})`,
                        }}
                    >
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