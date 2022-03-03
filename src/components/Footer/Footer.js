import React from 'react';
import styles from './Footer.module.scss';

import { GitHub, LinkedIn, CodePen } from '../Icons'

export default function Footer() {
    return (
        <footer className = {styles.footer}>
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
    )
}
