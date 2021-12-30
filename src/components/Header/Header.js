import { Link } from "react-router-dom";
import React, { useState, useContext } from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import './Header.scss'
import { Hamburger, Darkmode } from '../components'

import { ThemeContext } from "../../ThemeContext";

export default function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [themeButton, setThemeButton] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    };

    const toggleThemeButton = () => {
        setThemeButton(!themeButton)
    }

    const onClick = () => {
        if (darkMode) {
            theme.dispatch({ type: "LIGHTMODE" });
        } else {
            theme.dispatch({ type: "DARKMODE" });
        }
    };

    return (
        <header>
            <ul className='nav'>
                <li>
                    <Link to='/' className='logo'>
                        <Logo />
                    </Link>
                </li>
                <li>
                    <div className={`navWrapper ${hamburgerOpen ? 'open' : ''}`}>
                        <ul className='navList'>
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
                            <li className='themeToggle' onClick={() => { toggleThemeButton(); onClick() }}>
                                <Darkmode themeVal={themeButton} />
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='hamburger-flex' onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </li>
            </ul>
        </header>
    )
}
