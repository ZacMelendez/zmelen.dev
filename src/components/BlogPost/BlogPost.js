import { marked } from "marked";
import React, { useContext, useEffect } from "react";
import BlogContext from "../../context/BlogsContext";
import styles from './BlogPost.module.scss'
import '../../../node_modules/highlight.js/styles/github-dark.css'

marked.setOptions({
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});

const options = { year: 'numeric', month: 'long', day: 'numeric' };

export default function BlogPost(props) {
    const { currentBlog, setCurrentBlog, blogs } = useContext(BlogContext)

    useEffect(() => {
        if (!props.id) {
            setCurrentBlog(blogs[0])
        }
        else if (!currentBlog.id && blogs.length > 0) {
            setCurrentBlog(blogs.filter(blog => blog.title.split(' ').join('-') === props.id)[0])
        }
    }, [blogs])

    return (
        <article className={styles.blogPost}>
            {!currentBlog ? <p>loading...</p>
                :
                <>
                    <div className={styles.blogHeader}>
                        <div>
                            <h1 className={styles.blogTitle}>{currentBlog.title}</h1>
                            <h3 className={styles.blogDate}>{new Date(currentBlog['created_at']).toLocaleDateString("en-US", options)}</h3>
                        </div>
                        <div className={styles.author}>
                            <img alt='profile pic' src={'https://res.cloudinary.com/drmatz1gd/image/upload/v1646436000/IMG_0117_flxain.jpg'} />
                            <p>Zach<br />Melendez</p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <p dangerouslySetInnerHTML={{
                            __html: marked.parse(currentBlog.content ?
                                currentBlog.content.replace('\\`', '')
                                : '')
                        }} />

                    </div>
                </>
            }
        </article>
    )
}