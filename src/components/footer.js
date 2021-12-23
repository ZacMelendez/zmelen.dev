import React from 'react';
import './footer.css';

import { ReactComponent as Instagram } from '../graphics/instagram.svg'
import { ReactComponent as CodePen } from '../graphics/codepen.svg'
import { ReactComponent as GitHub } from '../graphics/github.svg'
import { ReactComponent as LinkedIn } from '../graphics/linkedin.svg'

export default function Footer() {
    return (
        <div id='footer'>
            <div id='list'>
                <a href="https://github.com/ZacMelendez/" target="_blank" rel="noreferrer">
                    <GitHub className='icon'/>
                </a>
                <a href="https://www.linkedin.com/in/zachary-melendez-399174a8/" target="_blank" rel="noreferrer">
                    <LinkedIn className='icon'/>
                </a>
                <a href="https://codepen.io/ZacMelendez" target="_blank" rel="noreferrer">
                    <CodePen className='icon'/>
                </a>
                <a href="https://www.instagram.com/zacmelendez/" target="_blank" rel="noreferrer">
                    <Instagram className='icon'/>
                </a>
            </div>
        </div >
    )
}
