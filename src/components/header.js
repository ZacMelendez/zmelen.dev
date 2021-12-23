import { Link } from "react-router-dom";
import React, { useState, useContext } from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import './header.css'
import Hamburger from './hamburger'
import Darkmode from './darkmode'

import ThemeContext from "../themeContext";

export default function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [themeButton, setThemeButton] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    };


    const toggleThemeButton = () => {
        setThemeButton(!themeButton)
    }

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div id='nav'>
            <Link to='/' className='logo'>
                <Logo />
            </Link>
            <div id='navWrapper' className={hamburgerOpen ? 'open' : ''}>
                <ul id='navList'>
                    <li onClick={toggleHamburger}>
                        <Link to="/">home</Link>
                    </li>
                    <li onClick={toggleHamburger}>
                        <Link to="/about">about</Link>
                    </li>
                    <li onClick={toggleHamburger}>
                        <Link to="/projects">projects</Link>
                    </li>
                    <li onClick={toggleHamburger}>
                        <Link to="/contact">contact</Link>
                    </li>

                    <li id='themeToggle' onClick={toggleThemeButton}>
                        <Darkmode themeVal={themeButton}/>
                    </li>
                </ul>
            </div>
            <div id='hamburger' onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div>
        </div >
    )
}
