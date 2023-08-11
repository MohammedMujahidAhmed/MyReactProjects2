import React from 'react';
import './Blog.css'
import { Link } from 'react-router-dom';

export const Blog = ({post}) => {
  return (
    <div className='my-6'>
        <Link to={`/blog/${post.id}`} className='font-bold text-xl'>{post.title}</Link>
        <p>By <span className='italic'>{post.author}</span> <Link to={`/categories/${post.category.replace(' ','-')}`} className='font-semibold underline-dashed'>{post.category}</Link></p>
        <p>Posted On <span>{post.date}</span></p>
        <p className='pt-3'>
            {post.content}
        </p>
        <div className='pt-2 flex space-x-3 flex-wrap'>
            {
                post.tags.map((tag,index) => {
                    return <Link key={index} to={`/tags/${tag.replace(' ','-')}`} className='text-blue-500 text-md font-medium underline'>#{tag} </Link>
                })
            }
        </div>
    </div>
  )
}
