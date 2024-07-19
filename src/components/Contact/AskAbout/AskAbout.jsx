import React from 'react'
import Typography from '../../utility/Typography/Typography'
import styles from './AskAbout.module.css'

const AskAbout = () => {
  return (
    <section>
        <header className={styles.headings}>
        <Typography elType="h1Small" className={styles.header}>
        Contact
        </Typography>
        <Typography elType="h3" className={styles.title}>
        Ask us about
        </Typography>
        </header>
    </section>
  )
}

export default AskAbout