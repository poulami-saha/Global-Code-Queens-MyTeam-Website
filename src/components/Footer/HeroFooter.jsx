import React from 'react'
import styles from './Footer.module.css'
import footerImage from '../../assets/bg-pattern-home-6-about-5.svg'

function HeroFooter() {
    return (
        <div className={styles.footerContent}>
       <img src={footerImage} alt="" className={styles.footerImg} />
            <div className={styles.footerText}>
                <h2>Ready to get started?</h2>

                <div className={styles.btn}>
                    <button>contact us</button>
                </div>
            </div>
            
        </div>
    )
}

export default HeroFooter
