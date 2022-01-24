import styles from './contact.module.scss';
import React from 'react';
import { useForm } from "react-hook-form";

export default function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {

    }

    return (
        <div className={styles.contact} id="contact">
            <div className={styles.inner}>
                <h1>Contact</h1>
                <form className={styles.entryForm} onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <div className={styles.fnameEntry}>
                            <label id="label" className='entry_prompt' htmlFor="fname">First Name: </label>
                            <div>
                                <input id="input"
                                    name='fname'
                                    type="text"
                                    placeholder='Luke'
                                    autoComplete='name'
                                    {...register('fname')}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.lnameEntry}>
                            <label id="label" className='entry_prompt' htmlFor="lname">Last Name: </label>
                            <div>
                                <input id="input"
                                    name='lname'
                                    type="text"
                                    placeholder='Skywalker'
                                    autoComplete='name'
                                    {...register('lname')}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.emailEntry}>
                            <label id="label" className='entry_prompt' htmlFor="email">E-Mail: </label>
                            <div>
                                <input id="input"
                                    name='email'
                                    type="text"
                                    placeholder='theonlyhope@galaxy.edu'
                                    autoComplete='email'
                                    {...register('email')}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.phoneEntry}>
                            <label id="label" className='entry_prompt' htmlFor="phone">Phone Number: </label>
                            <div>
                                <input id="input"
                                    name='phone'
                                    type="text"
                                    placeholder='(804) 234-1234'
                                    autoComplete='phone'
                                    {...register('phone')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.msgEntry}>
                        <label id="label" className='entry_prompt' htmlFor="msg" >Please enter a description of the services you would like: </label>
                        <div className='caret_input'>
                            <textarea
                                id="textarea"
                                type="text"
                                name='msg'
                                placeholder="I am in desperate need of a website! Ever since the incident with my nephew, nobody has been asking me to train their jedi children. Please, you're my only hope!"
                                autoComplete='off'
                                {...register('msg')}
                            />
                        </div>
                    </div>
                    <div className={styles.submit}>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

