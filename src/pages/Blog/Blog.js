import React from "react";
import { useParams } from "react-router-dom";
import { BlogMenu, BlogPost } from "../../components";

import styles from './Blog.module.scss'

export default function Blog() {

    const params = useParams()

    return (
        <div className={styles.blog}>
            <BlogMenu />
            <BlogPost id={params.id}/>
        </div>
    )
}