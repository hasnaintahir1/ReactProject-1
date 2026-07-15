import React from 'react'
import styles from './Section2.module.css'

const Section2 = () => {
    return (
        <div className={styles.main}>
            <div className={styles.leftHeading}>
                <h1>ABOUT CINEVERSE</h1>
            </div>

            <div className={styles.rightContent}>
                <span>
                    <h4>A next-gen Entertainment studio.</h4>

                    As fierce champions of storytellers and fans, we believe that trusting and empowering creators to tell their unique stories is good for business – keeping fans engaged with access to entertainment they can’t find anywhere else.</span>
            </div>
        </div>
        
    )
}

export default Section2