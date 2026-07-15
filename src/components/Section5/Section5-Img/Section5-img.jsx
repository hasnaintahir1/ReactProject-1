import React from 'react'
import styles from './Section5.module.css'

const Section5img = () => {
    return (
            <div className={styles.feature}>
                <div className={styles.Img}>
                    <img src="https://www.cineverse.com/wp-content/uploads/2025/08/Rectangle-1-3.png" alt="" />
                </div>
                <div className={styles.content}>
                    <h1>THE #1 VOICE IN HORROR</h1>
                    <span>Founded in 2001, Bloody Disgusting is the internet’s leading destination for horror  news — quoted by box office hits, cited by prestigious publications, and recognized by filmmakers and talent across Hollywood. A viral marketing machine — Bloody Disgusting fuels jaw-shattering growth across every lucrative lane in media.</span>
                    <button>LEARN MORE →</button>
                </div>
            </div>
    )
}

export default Section5img