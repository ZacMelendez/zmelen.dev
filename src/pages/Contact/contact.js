import './contact.scss';
import React, { useState, useRef, useEffect } from 'react';
import { Sentence, Paragraph, BashCommand } from '../../components/components'

export default function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();

    var [visible, setInput] = useState(0);

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Enter')  {
                var source_elem = event.target.className;
                console.log(source_elem);
                switch (source_elem) {
                    case 'name_entry':
                        setInput(visible + 1);
                        emailRef.current.focus();
                        break;
                    case 'email_entry':
                        setInput(visible + 1);
                        msgRef.current.focus();
                        event.preventDefault();
                        break;
                    case 'msg_entry':
                        setInput(visible + 1);
                        event.preventDefault();
                        break;
                    default:
                        break;
                }
            } 
        });
      }, [nameRef, emailRef, msgRef, visible]);



    return (
        <div className='content'>
            <BashCommand command={'contact.py'}/>
            <form id='entry_form' autoComplete='off'>
                <div id='name_entry'>
                    <p className='entry_prompt'>Please enter your name: </p>
                    <Sentence initialValue={'Luke Skywalker'} autoFocus={true} refer={nameRef} clsName = {'name_entry'}/>
                </div>
                {(visible >= 1) && <div id='email_entry'>
                    <p className='entry_prompt'>Please enter your e-mail: </p>
                    <Sentence initialValue={'theonlyhope@galaxy.edu'} refer={emailRef} clsName = {'email_entry'}/>
                </div>}
                {(visible >= 2) && <div id='msg_entry'>
                    <p className='entry_prompt'>Please enter your message: </p>
                    <Paragraph refer={msgRef} clsName = {'msg_entry'} initialValue={'I am in desperate need of a website! Ever since the incident with my nephew, nobody has been asking me to train their jedi children. Please, you\'re my only hope!'}/>
                </div>}
                {(visible >= 3) && <p>We will be in contact soon regarding your request!</p>}
            </form>
        </div>
    );
}

