import React from 'react'
import BlogReview from '../components/blog/BlogReview'
import styes from '../Asset/styles/layout/container.module.css'
import useBlog from '../hooks/useBlog'
const Blogs = () => {
  const {blog } = useBlog()
  return (
    <div className='styles[]'>
       <BlogReview blog={blog} />
    </div>
  )
}

export default Blogs
