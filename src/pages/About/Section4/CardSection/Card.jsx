import React from 'react'
import styles from './Card.module.css'

const data = [{
    id:1,
    img: "https://s202.q4cdn.com/484194886/files/doc_person/2025/Aug/Chris-McGurk-067-FINAL-Hero-Website_KEMfda-TU8.jpg",
    name: "Chris McGurk",
    roll: "Chairman of the Board & Chief Executive Officer"
},
{
    id:2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIycoPItK94_Gc5OLWBj7mtZqdE7qR1PCgdSPT5Buh4BjWe4vw2ml2Ass&s=10",
    name: "Erick Opeka",
    roll: "President & Chief Strategy Officer"
},
{
    id:3,
    img: "https://s202.q4cdn.com/484194886/files/doc_person/2025/Aug/Tony-Huidor-B0033-FINAL-Hero-Website_4YHnz0V4oH.jpg",
    name: "Tony Huidor",
    roll: "President of Technology and Chief Product Officer"
},
{
    id:4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLJP_YZTBSOcqWsB8vjME9QCfEjzUb5vCBsJTgREB12DIrftwI8QvJkqx&s=10",
    name: "Yolanda Macias",
    roll: "Chief Motion Pictures Officer"
},
{
    id:5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGOPSWVHimYCVhNRIhcQI1-wYIMPZfMwkJNwY3wf1ah36nz6zU3H02h4Q&s=10",
    name: "Mark Torres",
    roll: "Chief People Officer"
},
{
    id:6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQnp2M_Ti6vY4bxIVY67rTtaklvOD3LpDpoH3A_GLGJvzKew3lDxews6b&s=10",
    name: "Gary S. Loffredo",
    roll: "Chief Legal Officer, Secretary & Senior Advisor"
},
{
    id:7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttTxVDCZqrbK9TmoV8peyI03kYTL6M1T2otkXZfQ0XpqIq9vHhNUA6v7-&s=10",
    name: "Sean McCabe",
    roll: "Chief Financial Officer"
},
{
    id:8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUXnE38nxIMtitMjuSQ04UuPF-XlUk6objqpqYMH3QQxURKWoagb3Ciw&s=10",
    name: "Michele Edelman",
    roll: "EVP, Technology & General Manager, Matchpoint"
},
{
    id:9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxh0dHW93JPvc4J06-J4uGlL_fpMRMQRxFoCt70tDzKY7Rv5G5X5aJAc&s=10",
    name: "Lauren McCarthy",
    roll: "SVP, Marketing"
},
]

const Card = () => {
    return (
        <div className={styles.main}>
            {data.map((elem, idx) => {
                return (
                    <div className={styles.card} key={idx}>
                        <div className={styles.Img}>
                            <img src={elem.img} alt="Chairman-img" />
                        </div>
                        <div className={styles.content}>
                            <h1>{elem.name}</h1>
                            <p>{elem.roll}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card