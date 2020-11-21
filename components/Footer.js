import React from 'react'
import styles from '../styles/Home.module.css'

const d = new Date(); 
const currentYear = d.getFullYear(); 

function Footer() {
    return (
        <footer className={styles.footer}>
           &copy; Copyright {currentYear}. With Love by {' '} <a href="https://www.linkedin.com/in/kailashw/" target="_blank"><span>Kailas Walldoddi</span> </a>
        </footer>
    )
}

export default Footer
