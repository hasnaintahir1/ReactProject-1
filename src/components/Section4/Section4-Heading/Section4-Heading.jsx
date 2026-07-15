import React from 'react'
import styles from './Section4-Heading.module.css'
import DataHeading from './Section4-Data/Data4-Heading/DataHeading'
import DataPara from './Section4-Data/Data4-Heading/Data4-Para/DataPara'
import DataBtn from './Data4-Btn/DataBtn'
import LeftHeading from './Section4-LeftData/LeftData-Heading/LeftHeading'
import LeftPara from './Section4-LeftData/LeftData-Heading/LeftData-Para/LeftPara'
import LeftBtn from './Section4-LeftData/LeftData-Heading/LeftData-Btn/LeftBtn'

const Section4Heading = () => {
  return (
    <div id='technology' className={styles.main}>
      <div className={styles.Section4Heading}>
        <h1>CINEVERSE TECHNOLOGY</h1>
      </div>
      <DataHeading />
      <DataPara />
      <DataBtn />
      <LeftHeading />
      <LeftPara />
      <LeftBtn />
    </div>
  )
}

export default Section4Heading
