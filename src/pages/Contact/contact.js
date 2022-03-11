import styles from './contact.module.scss';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useLazyFetch from '../../hooks/useLazyFetch';
import useRecaptcha from '../../hooks/useRecaptcha';
import container from '../../styles/container.module.scss';


const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneReg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const randInputs = () => {
    const placeHolders = [
        {
            fname: "Tony",
            lname: "Stark",
            email: "ts@stark.com",
            phone: "(212) 283-6437",
            msg: "Stark Industries' site needs a redesign, can you help out with it?"
        },
        {
            fname: "Peter",
            lname: "Parker",
            email: "petep@midtown.edu",
            phone: "(718) 277-4337",
            msg: "I need a portfolio site to display my photography, current job isnt paying too much."
        },
        {
            fname: "Bruce",
            lname: "Banner",
            email: "hulk@avengers.gov",
            phone: "(212) 845-5646",
            msg: "I have some great scientific research to show off, can you help me advertise it?"
        },
        {
            fname: "Thor",
            lname: "Odinson",
            email: "pointbreak@midgard.gov",
            phone: "(212) 685-3541",
            msg: "Would you be able to make me a site so I can show off my hammer?"
        }
    ]
    return placeHolders[Math.floor(Math.random() * placeHolders.length)]
}

export default function Contact() {
    const { ReCAPTCHA, ref: recaptchaRef, siteKey, validate } = useRecaptcha();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        reValidateMode: 'onChange'
    });

    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [makeFetch, { loading }] = useLazyFetch({
        onSuccess: (result) => {
            setIsSuccessfullySubmitted(true);
            reset();

        },

        onError: (err) => {
            setError(true);
            console.log(`There was an error ${err.errors}`)
        },
    });

    const onSubmit = async (data) => {
        const validated = await validate();

        if (validated) {
            makeFetch({
                url: process.env.REACT_APP_URL,
                options: {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': process.env.REACT_APP_TOKEN,

                    },
                    body: JSON.stringify({
                        "source": 'zmelendez@zmelen.dev',
                        "destination": ['zmelendez@zmelen.dev'],
                        "subject": "Zach M Site Response",
                        "name": `${data.fname} ${data.lname}`,
                        "emailAddress": data.email,
                        "message": `${data.phone}\n ${data.msg}`
                    })
                },
            });
        }
    };

    const [randInfo,] = useState(randInputs());

    return (
        <div className={container.container} id="contact">
            <div className={styles.inner} id="formDiv">
                <h2>Contact</h2>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={siteKey}
                />
                {!error && !isSuccessfullySubmitted ?
                    <form className={styles.entryForm} onSubmit={handleSubmit(onSubmit)} >
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label id="label" className='entry_prompt' htmlFor="fname">First Name: </label>
                                <input id="input"
                                    name='fname'
                                    type="text"
                                    placeholder={randInfo.fname}
                                    autoComplete='given-name'
                                    style={errors.fname && { borderBottom: '5px #d13f3f solid' }}
                                    {...register('fname', { required: true, maxLength: 18 })}
                                />
                                {errors.fname && <p className={styles.error}>First name is required</p>}
                            </div>
                            <div className={styles.formGroup}>
                                <label id="label" className='entry_prompt' htmlFor="lname">Last Name: </label>
                                <input id="input"
                                    name='lname'
                                    type="text"
                                    placeholder={randInfo.lname}
                                    autoComplete='family-name'
                                    style={errors.lname && { borderBottom: '5px #d13f3f solid' }}
                                    {...register('lname', { required: true, maxLength: 18 })}
                                />
                                {errors.lname && <p className={styles.error}>Last name is required</p>}
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label id="label" className='entry_prompt' htmlFor="email">E-Mail: </label>
                                <input id="input"
                                    name='email'
                                    type="text"
                                    placeholder={randInfo.email}
                                    autoComplete='email'
                                    style={errors.email && { borderBottom: '5px #d13f3f solid' }}
                                    {...register('email', { required: true, maxLength: 100, pattern: emailReg })}
                                />
                                {errors.email && <p className={styles.error}>Ensure e-mail is correct</p>}
                            </div>
                            <div className={styles.formGroup}>
                                <label id="label" className='entry_prompt' htmlFor="phone">Phone Number: </label>
                                <input id="input"
                                    name='phone'
                                    type="text"
                                    placeholder={randInfo.phone}
                                    autoComplete='phone'
                                    style={errors.phone && { borderBottom: '5px #d13f3f solid' }}
                                    {...register('phone', { required: true, pattern: phoneReg })}
                                />
                                {errors.phone && <p className={styles.error}>Ensure phone # is correct</p>}
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label id="label" className='entry_prompt' htmlFor="msg" >Enter your desired services: </label>
                            <textarea
                                id="textarea"
                                type="text"
                                name='msg'
                                placeholder={randInfo.msg}
                                autoComplete='off'
                                style={errors.msg && { borderBottom: '5px #d13f3f solid' }}
                                {...register('msg', { required: true, maxLength: 300 })}
                            />
                            {errors.msg && <p className={styles.error}>Please leave a message!</p>}
                        </div>
                        <div className={styles.submit}>
                            <button type="submit"><p>{loading ? "sending" : "submit"}</p></button>
                        </div>
                    </form> :
                    error ?
                        <div className={styles.error}>
                            <h2>There was an error procesing your request</h2>
                            <p>Please send me an e-mail at zmelendez@zmelen.dev</p>
                        </div>
                        :
                        <div className={styles.success}>
                            <h2>Thank you for reaching out, I will be in contact soon!</h2>
                        </div>
                }
            </div>
        </div>
    )
}

