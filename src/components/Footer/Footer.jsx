import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.topContent}>
                <div className={styles.topLeftContent}>
                    <h1 className={styles.topLeftHeading}>Become a CINEVERSE Insider</h1>
                    <div className={styles.topInput}>
                        <input type="email" placeholder='Enter Email Address' />
                        <button className={styles.btn}>Submit →</button>
                    </div>
                    <p className={styles.text}>By submitting your email, you agree to receive marketing communications from Cineverse and our partners. You can unsubscribe at any time. For more information, see our Privacy Policy.</p>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.topRightContent}>
                        <h1 className={styles.topRightHeading}>Follow</h1>
                        <div className={styles.socialIcons}>
                            <div className={styles.icons}><FaInstagram /></div>
                            <div className={styles.icons}><FaFacebookF /></div>
                            <div className={styles.icons}><FaYoutube /></div>

                            <div className={styles.icons}><FaLinkedinIn /></div>
                            <div className={styles.icons}><FaTiktok /></div>
                            <div className={styles.icons}><FaXTwitter /></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.bottomContent}>
                <div className={styles.bottomLeftContent}>
                    <div className={styles.bottomHeading}>
                        <h1>CINEVERSE</h1>
                    </div>
                    <div className={styles.links}>
                        <Link to="/nowplaying">Now Playing</Link>
                        <Link to="/streaming">Streaming</Link>
                        <Link to="/technology">Technology</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/advertise">Advertise with us</Link>
                        <Link to="/investors">Investors</Link>
                    </div>
                </div>
                <div className={styles.endLine}>

                </div>
                <div className={styles.endText}>
                    <span>Cineverse 2026. All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer