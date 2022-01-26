import styles from './contact.module.scss';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useLazyFetch from '../../hooks/useLazyFetch';
import useRecaptcha from '../../hooks/useRecaptcha';

const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
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
    console.log(process.env.SITEKEY)
    const { ReCAPTCHA, ref, siteKey, validate } = useRecaptcha();
    const { register, handleSubmit, reset, formState: { errors, isSubmitted, isSubmitting } } = useForm({
        reValidateMode: 'onSubmit'
    });

    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
    const [alreadySubmitted, setAlreadySubmitted] = useState(false);

    const [makeFetch, { loading, data }] = useLazyFetch({
        onSuccess: (result) => {
            console.log(result)
            if (result.status === 'entry_exists') {
                setIsSuccessfullySubmitted(true)
                setAlreadySubmitted(true)
            } else {
                setIsSuccessfullySubmitted(true)
            }
            reset();

        },
        onError: (err) => {
            console.log('There was an error')
        },
    });

    const onSubmit = async (data) => {
        const validated = await validate();

        if (validated) {
            makeFetch({
                url: "/api/form",
                options: {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                },
            });
        }
    };

    const [randInfo, ] = useState(randInputs());

    return (
        <div className={styles.contact} id="contact">
            <div className={styles.inner} id="formDiv">
                <h1>Contact</h1>
                {/* <ReCAPTCHA
                    size="invisible"
                    sitekey={siteKey}
                /> */}
                <form className={styles.entryForm} onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <div className={styles.fnameEntry}>
                            <label id="label" className='entry_prompt' htmlFor="fname">First Name: </label>
                            <div>
                                <input id="input"
                                    name='fname'
                                    type="text"
                                    placeholder={randInfo.fname}
                                    autoComplete='given-name'
                                    {...register('fname', { required: true, maxLength: 18 })}
                                />
                                {errors.fname && <p className={styles.error}>First name is required</p>}
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
                                    placeholder={randInfo.lname}
                                    autoComplete='family-name'
                                    {...register('lname', { required: true, maxLength: 18 })}
                                />
                                {errors.lname && <p className={styles.error}>Last name is required</p>}
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
                                    placeholder={randInfo.email}
                                    autoComplete='email'
                                    {...register('email', { required: true, maxLength: 100, pattern: emailReg })}
                                />
                                {errors.email && <p className={styles.error}>Ensure e-mail is correct</p>}
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
                                    placeholder={randInfo.phone}
                                    autoComplete='phone'
                                    {...register('phone', { required: true, pattern: phoneReg })}
                                />
                                {errors.phone && <p className={styles.error}>Ensure phone number is correctly formatted</p>}
                            </div>
                        </div>
                    </div>
                    <div className={styles.msgEntry}>
                        <label id="label" className='entry_prompt' htmlFor="msg" >Enter your desired services: </label>
                        <div className='caret_input'>
                            <textarea
                                id="textarea"
                                type="text"
                                name='msg'
                                placeholder={randInfo.msg}
                                autoComplete='off'
                                {...register('msg', { required: true, maxLength: 300 })}
                            />
                            {errors.msg && <p className={styles.error}>Please leave a message!</p>}
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

