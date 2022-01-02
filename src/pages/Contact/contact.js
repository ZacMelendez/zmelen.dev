import './contact.scss';
import React, { useState, useRef } from 'react';
import { Sentence, Paragraph, BashCommand } from '../../components/components'

function handleEnter(event) {
    if (event.keyCode === 13) {
    //   const form = event.target.form;
    //   const index = Array.prototype.indexOf.call(form, event.target);
    //   form.elements[index + 1].focus();
    //   event.preventDefault();
        event.target.nextSibling.focus();
        event.preventDefault();
    }
  }  

export default function Contact() {

    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();

    const [visible, addInput] = useState(0);

    const makeVisible = (current) => {
        addInput(visible = current + 1);
    }

    return (
        <div className='content'>
            <BashCommand/>
            <form id='entry_form' autoComplete='off'>
                <div id='name_entry'>
                    <p className='entry_prompt'>Please enter your name: </p>
                    <Sentence initialValue={'Luke Skywalker'} autoFocus={true} refer={nameRef}/>
                </div>
                {<div id='email_entry'>
                    <p className='entry_prompt'>Please enter your e-mail: </p>
                    <Sentence initialValue={'theonlyhope@galaxy.edu'} refer={emailRef}/>
                </div>}
                {<div id='msg_entry'>
                    <p className='entry_prompt'>Please enter your message: </p>
                    <Paragraph refer={msgRef} initialValue={'I am in desperate need of a website! Ever since the incident with my nephew, nobody has been asking me to train their jedi children. Please, you\'re my only hope!'}/>
                </div>}
            </form>
        </div>
    );
}

