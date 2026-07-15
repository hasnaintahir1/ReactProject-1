import React from 'react'
import styles from './Section.module.css'

const cardData = [{
    id:1,
    heading: 'DEEP TARGETING',
    para: 'Using data from trusted data collectors (e.g. Comscore, Experian, LiveRamp) we can target users deeply by their habits.'
},
{
    id:2,
    heading: 'PRIORITY PLACEMENT',
    para: 'Catch your audience’s attention as they “tune in” – with premium placement on the biggest billboards in their homes.'
},
{
    id:3,
    heading: 'AUDIENCE SEGMENT',
    para: 'Contextual relevance reaching the right audience at the right time across our portfolio of CTV Channels, Podcasts, Social handles.'
}
]

const Section6 = () => {
    return (
        <div className={styles.main}>
            {cardData.map((elem, idx) => {
                return (
                    <div className={styles.card} key={idx}>
                        <div className={styles.content}>
                            <h1>{elem.heading}</h1>
                            <span>{elem.para}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Section6