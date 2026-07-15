import React from 'react'
import styles from './Section.module.css'

const Section7 = () => {
    return (
        <div className={styles.feature}>
            <div className={styles.Img}>
                <img src=" https://www.cineverse.com/wp-content/uploads/2025/12/Rectangle-1-4-300x266.png  " alt="" />
            </div>
            <div className={styles.content}>
                <h1>PROGRAMMATIC</h1>
                <span>Looking for a highly targeted programmatic offering? Check out C360!

                    Launch and grow your streaming business.

                    All-in-one place.

                    All the tools you need to scale — from content delivery, to development to tracking. Developed and battle tested streaming our own content portfolio for over a decade.</span>
                <div>
                    <button>LEARN MORE →</button>
                </div>
            </div>
        </div>
    )
}

export default Section7