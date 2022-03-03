import React, { useState } from 'react';
import styles from './Header.module.scss'
import { Hamburger } from '../'

import { HashLink as Link } from 'react-router-hash-link'

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
                    <Link to='#home' className={styles.logo}>
                        <Logo />
                    </Link>
                </li>
                <li>
                    <div className={`${styles.navWrapper} ${hamburgerOpen ? styles.navWrapperOpen : ''}`}>
                        <ul className={styles.navList}>
                            <li onClick={toggleHamburger}>
                                <Link to="#home">home</Link>
                            </li>
                            <li onClick={toggleHamburger}>
                                <Link to="#about">about</Link>
                            </li>
                            <li onClick={toggleHamburger}>
                                <Link to="#work">work</Link>
                            </li>
                            <li onClick={toggleHamburger}>
                                <Link to="#contact">contact</Link>
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
