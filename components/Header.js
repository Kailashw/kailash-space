import React, { Component } from 'react';
import Image from 'next/image'
import Link from 'next/Link'
import styles from "./header.module.css";
class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className="mobile-view">
                    <button onClick={myFunction}> <img src='/menu.png' alt="menu-icon" width="32" height="32" /> </button>
                </div>
                <div id="myDIV">
                    <ul>
                        <li><Link href="/"><a href="#"> Home</a></Link></li>
                        <li><Link href="/about"><a href="#"> About</a></Link></li>
                        <li><Link href="/blogs"><a href="#"> Blogs</a></Link></li>
                        <li><Link href="/projects"><a href="#"> Projects</a></Link></li>
                        <li><a href="mailto:kailashwall@gmail.com" target="_blank"> Contact</a></li>
                    </ul>
                </div>
                <div className="web-view">
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

function myFunction() {
    var x = document.getElementById("myDIV");
    if (!x.style.display || x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

export default Header