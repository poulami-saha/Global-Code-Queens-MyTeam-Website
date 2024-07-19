import React from 'react'
import Typography from '../../utility/Typography/Typography'
// import styles from './AskAbout.module.css'

const AskAbout = () => {
  return (
    <section>
        <header>
        <Typography elType="h2" className={styles}>
        Contact
        </Typography>
        <Typography elType="body4" className={styles}>
        Ask us about
        </Typography>
        </header>
    </section>
  )
}

export default AskAbout