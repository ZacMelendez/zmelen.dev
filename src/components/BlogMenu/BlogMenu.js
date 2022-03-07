import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../../context/BlogsContext";
import useLazyFetch from "../../hooks/useLazyFetch";
import { CodePen, GitHub, LinkedIn, Logo } from "../Icons";

import styles from './BlogMenu.module.scss'

export default function BlogMenu() {

    const {blogs, setCurrentBlog} = useContext(BlogContext)

    const setBlog = (post) => {
        setCurrentBlog(blogs.filter(blog => blog.id === post.id)[0])
    }

    return (
        <ul className={styles.blogMenu}>
            <header>
                <div className={styles.header}>
                    <Logo />
                    <h2>zach<strong>overflow</strong></h2>
                </div>
            </header>
            <li className={styles.nav}>
                <nav>
                    <ul>
                        {!blogs ? <li>loading posts...</li> :
                            blogs.map((post, index) => {
                                return (
                                    <Link key={index} className={styles.link} onClick={() => setBlog(post)} to={`/blog/${post.title.split(' ').join('-')}`}>
                                        {post.title}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </nav>
            </li>
            <li>
                <footer className={styles.footer}>
                    <ul>
                        <li>
                            <a href="https://github.com/ZacMelendez/" target="_blank" rel="noreferrer">
                                <GitHub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/zachary-melendez-399174a8/" target="_blank" rel="noreferrer">
                                <LinkedIn />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/ZacMelendez" target="_blank" rel="noreferrer">
                                <CodePen />
                            </a>
                        </li>
                    </ul>
                </footer >
            </li>
        </ul>
    )
}