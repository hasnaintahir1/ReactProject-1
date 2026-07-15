import React from 'react'
import styles from './Section.module.css'

const Section5 = () => {
    return (
        <div className={styles.feature}>
            <div className={styles.content}>
                <h1>DIRECT ADVERTISING PARTNERSHIP</h1>
                <span>Brand partnerships with Cineverse leverage authentic relationships with, enthusiastic audiences and access to reliable audience data to create high performing, cost efficient but highly effective campaigns.</span>
                <div>
                    <button>LEARN MORE →</button>
                </div>
            </div>
            <div className={styles.Img}>
                <img src="https://www.cineverse.com/wp-content/uploads/2025/12/Rectangle-1-3-300x266.png " alt="" />
            </div>
        </div>
    )
}

export default Section5