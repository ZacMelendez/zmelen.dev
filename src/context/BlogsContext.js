import { createContext } from "react";

const BlogContext = createContext({
  blogs: [],
  setBlogs: () => {},
  currentBlog: {},
  setCurrentBlog: () => {}
});

export default BlogContext;