import React from 'react'
import styles from './Hero.module.css'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section6 from '../Section6/Section6'
import Section7 from '../Section7/Section7'

const Hero = () => {
  return (
    <div className={styles.feature}>
        <div className={styles.main}>
            <div className={styles.heroImg}>
                <img src="https://www.cineverse.com/wp-content/uploads/2025/12/Rectangle-1-1-1024x402.png" alt="" />
            </div>
        </div>

        <Section2 />
        <Section3 />
        <Section4 />
        <Section6 />
        <Section7 />
    </div>
  )
}

export default Hero