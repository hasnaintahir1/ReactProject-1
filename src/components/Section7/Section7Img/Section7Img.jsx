import React from 'react'
import styles from './Section7.module.css'

const Section7Img = () => {
    return (
        <div className={styles.feature}>
            <div className={styles.content}>
                <h1>TCINEVERSE | IT'S ON</h1>
                <span>Fiercely innovative and independent, Cineverse develops and invests in technology and content that drives the future of the industry. <br /> <br />

                    From award-winning technology to the highest-grossing unrated film in U.S. history, Cineverse has created a playbook that marries tech and content to redefine the next era of entertainment.</span>
                <div>
                    <button>LEARN MORE →</button>
                    <button>FOR INVESTORS →</button>
                </div>
            </div>
            <div className={styles.Img}>
                <img src="https://www.cineverse.com/wp-content/uploads/2025/08/Rectangle-1-2.png" alt="" />
            </div>
        </div>
    )
}

export default Section7Img