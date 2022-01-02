import React from 'react';
import './Footer.scss';

import {Instagram, GitHub, LinkedIn, CodePen} from '../Icons'

export default function Footer() {
    return (
        <footer>
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
                <li>
                    <a href="https://www.instagram.com/zacmelendez/" target="_blank" rel="noreferrer">
                        <Instagram />
                    </a>
                </li>
            </ul>
        </footer >
    )
}
