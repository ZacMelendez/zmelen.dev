import React, { useEffect, useState } from 'react';
import BlogContext from '../context/BlogsContext';
import useLazyFetch from '../hooks/useLazyFetch';

function BlogContextProvider({ children }) {
    const [blogs, setBlogs] = useState([]);
    const [currentBlog, setCurrentBlog] = useState({})

    const [makeFetch] = useLazyFetch({
        onSuccess: (result) => {
            let blogItems = result.Items
            blogItems.sort((a, b) => new Date(b['created_at']) - new Date(a['created_at']));
            setBlogs(blogItems.reverse())
        },
        onError: (err) => {
            console.log(err)
        }
    })

    useEffect(() => {
        makeFetch({
            url: process.env.REACT_APP_AWS_URL
        })
    }, [])

    return (
        <BlogContext.Provider
            value={{
                blogs,
                setBlogs,
                currentBlog,
                setCurrentBlog
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider