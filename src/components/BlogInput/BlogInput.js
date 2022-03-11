import React, { useRef, useState } from "react";
import styles from './BlogInput.module.scss';
import useLazyFetch from "../../hooks/useLazyFetch";
import { v4 as uuidv4 } from 'uuid';
import { RichTextEditor } from '@mantine/rte';
import TurndownService from 'turndown'

let turndownService = new TurndownService()

turndownService.addRule('codeBlock', {
    filter: ['pre'],
    replacement: function (content) {
      return '```\n' + content + '```'
    }
  })

  turndownService.addRule('code', {
    filter: ['code'],
    replacement: function (content) {
      return '```\n' + content + '\n```'
    }
  })

  turndownService.addRule('codeBlock', {
    filter: ['\\'],
    replacement: function (content) {
      return content
    }
  })


export default function BlogInput() {
    const [submitted, setSubmitted] = useState({ status: false })
    const [val, setVal] = useState('Enter text here!')

    const titleRef = useRef(null);
    const tagsRef = useRef(null);

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
                    resolve(result.url)
                })
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
                    content: turndownService.turndown(val),
                    tag_list: tagsRef.current.value.replace(/\s+/g, '').split(',')
                })
            }
        })
        console.log(turndownService.turndown(val))
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
                    <RichTextEditor
                        controls={[
                            ['bold', 'italic', 'underline', 'link', 'image'],
                            ['code', 'codeBlock'],
                            ['unorderedList', 'h1', 'h2', 'h3'],
                            ['sup', 'sub'],
                            ['alignLeft', 'alignCenter', 'alignRight'],
                        ]}
                        onImageUpload={handleImageUpload}
                        value={val}
                        onChange={setVal}
                        classNames={{
                            root: styles.rte,
                            toolbar: styles.toolbar,
                        }}
                    />
                </div>
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