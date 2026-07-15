import React from "react";
import styles from "./Section2.module.css";
import Counter from "../../Advertise/Section2/Counter";
import { useInView } from "react-intersection-observer";

const Section2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className={styles.main} ref={ref}>
      <div className={styles.top}>
        <h1>FAST FAN AUDIENCE REACH</h1>
      </div>

      <div className={styles.bottom}>
        <div className={styles.card}>
          <h2>
            <Counter
              start={inView}
              end={66}
              duration={2000}
              separator={true}
              suffix="K"
            />
          </h2>
          <p>Premium films, series, and podcasts</p>
        </div>

        <div className={styles.card}>
          <h2>
            <Counter
              start={inView}
              end={46.3}
              duration={2000}
              decimals={1}
              suffix="M"
            />
          </h2>
          <p>Unique viewers monthly</p>
        </div>

        <div className={styles.card}>
          <h2>
            <Counter
              start={inView}
              end={14.3}
              duration={2000}
              decimals={1}
              suffix="B"
            />
          </h2>
          <p>Minutes Watched in 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Section2;