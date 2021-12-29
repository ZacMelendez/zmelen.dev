import './contact.scss';
import React from 'react';
import { Sentence, Paragraph } from '../../components/components'

export default function Contact() {
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
                    <Sentence initialValue={'Luke Skywalker'} autoFocus={true}/>
                    {/* <div id='blinker' /> */}
                </div>
                <div id='email_entry'>
                    <p className='entry_prompt'>Please enter your e-mail: </p>
                    <Sentence initialValue={'theonlyhope@galaxy.edu'}/>
                </div>
                <div id='msg_entry'>
                    <p className='entry_prompt'>Please enter your message: </p>
                    <Paragraph initialValue={'I am in desperate need of a website! Ever since the incident with my nephew, nobody has been asking me to train their jedi children. Please, you\'re my only hope!'}/>
                </div>
            </div>
        </div>
    );
}

