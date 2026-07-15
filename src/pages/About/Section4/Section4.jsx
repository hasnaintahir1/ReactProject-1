import React from 'react'
import styles from './Section.module.css'
import Card from './CardSection/Card'

const Section4 = () => {
  return (
    <div className={styles.main}>
        <div className={styles.heading}>
            <h1>Our Team</h1>
        </div>
        <Card />
    </div>
  )
}

export default Section4