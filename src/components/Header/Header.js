import React, { useState } from 'react';
import styles from './Header.module.scss'
import { Hamburger } from '../'

import { Logo } from '../Icons';


export default function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    };

    return (
        <header className={styles.header}>
            <ul className={styles.nav}>
                <li>
                    <a href='#home' className={styles.logo}>
                        <Logo />
                    </a>
                </li>
                <li>
                    <div className={`${styles.navWrapper} ${hamburgerOpen ? styles.navWrapperOpen : ''}`}>
                        <ul className={styles.navList}>
                            <li onClick={toggleHamburger}>
                                <a href="#home">home</a>
                            </li>
                            <li onClick={toggleHamburger}>
                                <a href="#about">about</a>
                            </li>
                            <li onClick={toggleHamburger}>
                                <a href="#work">work</a>
                            </li>
                            <li onClick={toggleHamburger}>
                                <a href="#contact">contact</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={styles.hamburgerFlex} onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </li>
            </ul>
        </header>
    )
}
