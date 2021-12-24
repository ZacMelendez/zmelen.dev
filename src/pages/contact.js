import './contact.css';
import React from 'react';
// import React, { useContext } from 'react';
// import ThemeContext from '../themeContext'

export default function Contact() {
    // const theme = useContext(ThemeContext)


    return (
        <div className="Contact">
            <div className='text_entry'>
                <p id='user'>ztm@zmelendev</p>
                <p id='colon'>:</p>
                <p id='bash_prefix'>~/Contact $ </p>
                <p id='dynamic_text'>cat contact_me.txt</p>
            </div>
            <div id='entry_form'>
                <div id='name_entry'>
                    <p className='entry_prompt'>Please enter your name: </p>
                    <p className='filler_prompt'>Peter Parker</p>
                </div>
                <div id='email_entry'>
                    <p className='entry_prompt'>Please enter your e-mail: </p>
                    <p className='filler_prompt'>peterp@midtown.edu</p>
                </div>
                <div id='msg_entry'>
                    <p className='entry_prompt'>Please enter your message: </p>
                    <p className='filler_prompt'>I am in desperate need of a portfolio website to show off my photography. My current job is barely paying me enough money for me to cover my rent, and my boss thinks I'm a criminal!</p>
                </div>
                <div id='blinker' />
            </div>
        </div>
    );
}

