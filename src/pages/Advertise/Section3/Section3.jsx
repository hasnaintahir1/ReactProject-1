import React from "react";
import styles from "./Section.module.css";
import { useInView } from "react-intersection-observer";
import Counter from "../Section3/Counter";

import img from "../../../assets/AdverticeImg.jpg";

const Section3 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: .4
  });

  return (

    <section className={styles.main} ref={ref}>

     <img className={styles.Img} src={img} alt="" />

      <div className={styles.overlay}></div>

      <div className={styles.content}>

        <div className={styles.left}>

          <h1>
            Reach Millions of Entertainment Fans
          </h1>

          <p>
            Connect your brand with one of the world's fastest growing
            streaming audiences across premium movies, TV and podcasts.
          </p>

          <button>
            LEARN MORE →
          </button>

        </div>

        <div className={styles.right}>

          <div className={styles.counter}>

            <h2>
              <Counter
                start={inView}
                end={66}
                suffix="K"
              />
            </h2>

            <p>Premium Titles</p>

          </div>

          <div className={styles.counter}>

            <h2>
              <Counter
                start={inView}
                end={46.3}
                decimals={1}
                suffix="M"
              />
            </h2>

            <p>Monthly Viewers</p>

          </div>

          <div className={styles.counter3}>

            <h2>
              <Counter
                start={inView}
                end={14.3}
                decimals={1}
                suffix="B"
              />
            </h2>

            <p>Minutes Watched</p>

          </div>
          <div className={styles.counter4}>

            <h2>
              <Counter
                start={inView}
                end={14}
                suffix="M"
              />
            </h2>

            <p>Minutes Watched</p>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Section3;