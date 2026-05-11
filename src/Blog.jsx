import React from 'react'
import BlogBody from './BlogBody'
import BlogArchive from './BlogArchive'
import Footer from "./Footer"
import AboutFooter from './AboutFooter'

function Blog() {
  return (
    <>
    <div className='BlogContainer'>
      <BlogBody />
      <BlogArchive />
         </div>
         <AboutFooter />
         </>
  )
}

export default Blog
