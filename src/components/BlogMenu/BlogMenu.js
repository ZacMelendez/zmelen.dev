import React from "react";
import { Footer } from "..";
import { CodePen, GitHub, LinkedIn, Logo } from "../Icons";

import styles from './BlogMenu.module.scss'

export default function BlogMenu() {
    return (
        <ul className={styles.blogMenu}>
            <header>
                <div className={styles.header}>
                    <Logo />
                    <h2>zach<strong>overflow</strong></h2>
                </div>
            </header>
            <li className={styles.nav}>
                <nav>
                    <ul>
                        <li>
                            <a>this</a>
                        </li>
                        <li>
                            <a>is</a>
                        </li>
                        <li>
                            <a>a</a>
                        </li>
                        <li>
                            <a>test</a>
                        </li>
                    </ul>
                </nav>
            </li>
            <li>
                <footer className={styles.footer}>
                    <ul>
                        <li>
                            <a href="https://github.com/ZacMelendez/" target="_blank" rel="noreferrer">
                                <GitHub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/zachary-melendez-399174a8/" target="_blank" rel="noreferrer">
                                <LinkedIn />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/ZacMelendez" target="_blank" rel="noreferrer">
                                <CodePen />
                            </a>
                        </li>
                    </ul>
                </footer >
            </li>
        </ul>
    )
}