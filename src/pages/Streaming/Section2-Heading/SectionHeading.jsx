import React from 'react'
import styles from './Section.module.css'

const SectionHeading = () => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.leftContent}>
                <h1 className={styles.leftHeading}>WHERE FANDOMS LIVE AND STORIES THRIVE</h1>
            </div>
            <div className={styles.rightContent}>
                <span className={styles.rightPara}>Cineverse Channels are where streaming comes to life – with something for everyone. Whether it’s the spine-tingling thrill of Screambox, curated by horror legends Bloody Disgusting, the wholesome comfort of Bob Ross and kid-friendly favorites, or the iconic worlds of anime on RetroCrush and Yu-Gi-Oh!, Cineverse channels are built for fans of every kind. Dive into arthouse gems on Fandor, cult classics on Midnight Pulp, or family-friendly stories on Dove – all part of a lineup designed to entertain, inspire, and connect.

                    With 35.5 million unique viewers and over 1 billion minutes watched monthly, Cineverse delivers unmatched scale across SVOD and FAST. Our library spans 66,000+ premium films, series, and podcasts, giving us one of the most diverse and dynamic content catalogs in the industry.

                    Cineverse isn’t just where audiences stream – it’s where they stay. Our rapidly growing channels continue to expand across platforms, fuel engagement, and power innovation across the entire Cineverse ecosystem.</span>
            </div>
        </div>
    )
}

export default SectionHeading