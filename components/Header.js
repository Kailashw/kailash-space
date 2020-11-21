import React, { Component } from 'react';
import Link from 'next/Link'
import styles from "./header.module.css";
class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.mobileView}>
                    <ul>
                        <li><Link href="/" title="Home"><img src='/home.png' alt="home-icon" width="32" height="32" /></Link></li>
                        <li><Link href="/about" title="About"><img src='/about.png' alt="about-icon" width="32" height="32" /></Link> </li>
                        <li><Link href="/blogs" title="Blogs"><img src='/blogs.png' alt="blogs-icon" width="32" height="32" /></Link> </li>
                        <li><Link href="/projects" title="Projects"><img src='/projects.png' alt="projects-icon" width="32" height="32" /></Link> </li>
                        <li><a href="mailto:kailashwall@gmail.com" title="Contact" target="_blank"><img src='/contact.png' alt="contact-icon" width="32" height="32" /></a> </li>
                    </ul>
                </div>
                <div className={styles.webView}>
                    <ul>
                        <li><Link href="/"><a href="#"> Home</a></Link></li>
                        <li><Link href="/about"><a href="#"> About</a></Link></li>
                        <li><Link href="/blogs"><a href="#"> Blogs</a></Link></li>
                        <li><Link href="/projects"><a href="#"> Projects</a></Link></li>
                        <li><a href="mailto:kailashwall@gmail.com" target="_blank"> Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header