import React from "react";
import styles from "./Section.module.css";
import { useInView } from "react-intersection-observer";
import Counter from "../Section4/Counter";

const Section3 = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .4
    });

    return (

        <div className={styles.main} ref={ref}>
            <div className={styles.content}>

                {/* Left */}
                <div className={styles.left}>

                    <div className={styles.counter}>
                        <h2><Counter start={inView} end={50} suffix="+" /></h2>
                        <p>Premium Titles</p>
                    </div>

                    <div className={styles.counter}>
                        <h2><Counter start={inView} end={10} suffix="M" /></h2>
                        <p>Monthly Viewers</p>
                    </div>

                    <div className={styles.counter}>
                        <h2><Counter start={inView} end={4.5} decimals={1} suffix="B" /></h2>
                        <p>Minutes Watched</p>
                    </div>

                </div>

                {/* Right */}
                <div className={styles.right}>

                    <h1>CINEVERSE PODCAST NETWORK</h1>

                    <p>
                 The largest audio network reaching highly engaged fandoms across the audifiction, true crime, comedy, and pop culture communities.
                    </p>

                    <button>LEARN MORE →</button>

                </div>

            </div>
        </div>
    );
};

export default Section3;