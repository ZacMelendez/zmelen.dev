import './contact.scss';
import React from 'react';
import { Sentence, Paragraph, BashCommand } from '../../components/components'


export default function Contact() {

    return (
        <div className='content'>
            <BashCommand/>
            <form id='entry_form' autoComplete='off'>
                <div id='name_entry'>
                    <p className='entry_prompt'>Please enter your name: </p>
                    <Sentence initialValue={'Luke Skywalker'} autoFocus={true} />
                </div>
                <div id='email_entry'>
                    <p className='entry_prompt'>Please enter your e-mail: </p>
                    <Sentence initialValue={'theonlyhope@galaxy.edu'}/>
                </div>
                <div id='msg_entry'>
                    <p className='entry_prompt'>Please enter your message: </p>
                    <Paragraph initialValue={'I am in desperate need of a website! Ever since the incident with my nephew, nobody has been asking me to train their jedi children. Please, you\'re my only hope!'}/>
                </div>
            </form>
        </div>
    );
}

