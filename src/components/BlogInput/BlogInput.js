import React, { useEffect, useRef, useState } from "react";
import { RichTextEditor } from '@mantine/rte';
import styles from './BlogInput.module.scss';
import useLazyFetch from "../../hooks/useLazyFetch";
import { v4 as uuidv4 } from 'uuid';
import TurndownService from "turndown";
import { Prism } from "@mantine/prism";
import { marked } from "marked";


export default function BlogInput() {

    const turndown = TurndownService();

    const [submitted, setSubmitted] = useState({ status: false })
    const [val, setVal] = useState('Enter text here!')
    const [md, setMd] = useState('')

    const titleRef = useRef(null);
    const tagsRef = useRef(null);

    useEffect(() => {
        const text = turndown.turndown(val)
        setMd(text)
        // console.log([...val.split('```')])
    }, [val])

    const [makeFetch, { loading }] = useLazyFetch({
        onSuccess: (result) => {
            console.log(result)
            setSubmitted({
                status: true,
                id: result.id
            })
        },
        onError: (err) => {
            console.log(err)
        }
    }
    )

    const handleImageUpload = (file) => 
        new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'ml_default');

            fetch(process.env.REACT_APP_CLOUD_URL, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    resolve(result.url)})
                .catch(() => reject(new Error('Upload failed')))
            
        })

    const onSubmit = () => {
        makeFetch({
            url: process.env.REACT_APP_AWS_URL,
            options: {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                    "Content-Type": "application/json",
                    "Authorization": process.env.REACT_APP_POST_KEY
                },
                body: JSON.stringify({
                    id: uuidv4(),
                    title: titleRef.current.value,
                    created_at: new Date(),
                    content: val.toString(),
                    tag_list: tagsRef.current.value.replace(/\s+/g, '').split(',')
                })
            }
        })
    }



    return (
        <div className={styles.outer}>
            {!submitted.status ? !loading ? <div className={styles.inner}>
                <div>
                    <p className={styles.label}>Blog Title:</p>
                    <input ref={titleRef} />
                </div>
                <div>
                    <p className={styles.label}>Blog Content:</p>
                    <RichTextEditor classNames={{
                        root: styles.rte,
                        toolbar: styles.toolbar
                    }}
                        value={val}
                        onChange={setVal}
                        onImageUpload={handleImageUpload}
                    />
                </div>
                    <div dangerouslySetInnerHTML={{__html: marked.parse(md)}}/>
                <br/>
                {md.split('\\`\\`\\`').filter(item => item.includes('language='))}
                <div>
                    <p className={styles.label}>Blog Tags:</p>
                    <input ref={tagsRef} />
                </div>
                <div className={styles.buttonDiv}>
                    <button onClick={() => onSubmit()}>Submit</button>
                </div>
            </div> : 'loading' : `submitted id ${submitted.id}`}
        </div>
    )
}