import React from 'react'
import styles from './Hero.module.css'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section5 from '../Secton5/Section5'
import Section6 from '../Section6/Section6'
import Section7 from '../Section7/Section7'
import Section8 from '../Section8/Section8'
import Section9 from '../Section9/Section9'

const Hero = () => {
    return (
        <>
            <div className={styles.feature}>
                <div className={styles.content}>
                    <h1>ADVERTISE WITH US</h1>
                    <span>Reach Audiences across the fastest growing network of Fandom channels, podcasts and events.

                        As the world’s largest independent streaming network, Cineverse is your partner in unlocking the world’s most dedicated audiences across multiple genres – With deeply integrated experiences that take contextual relevance to new heights.</span>
                    <div>
                        <button>LET'S TALK →</button>
                    </div>
                </div>
                <div className={styles.Img}>
                    <img src="https://www.cineverse.com/wp-content/uploads/2025/12/Rectangle-1-2.png" alt="" />
                </div>
            </div>
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
        </>
    )
}

export default Hero