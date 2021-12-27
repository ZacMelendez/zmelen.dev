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
                    <p className='filler_prompt'>Luke Skywalker</p>
                </div>
                <div id='email_entry'>
                    <p className='entry_prompt'>Please enter your e-mail: </p>
                    <p className='filler_prompt'>onlyhope@galaxy.edu</p>
                </div>
                <div id='msg_entry'>
                    <p className='entry_prompt'>Please enter your message: </p>
                    <p className='filler_prompt'>I am in desperate need of a website! Ever since I tried to murder my nephew, nobody has been asking me to train their jedi children. Please, you're my only hope!</p>
                </div>
                <div id='blinker' />
            </div>
        </div>
    );
}

