import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Blog } from './Blog';
import { Spinner } from './Spinner';

export const Blogs = () => {
    
    const {loading,posts} = useContext(AppContext);
    console.log(posts)

    return (
        <div className='w-9/12 max-w-[1100px] overflow-scroll overflow-x-hidden no-scrollbar'>
            { 
                loading? 
                <Spinner/> 
                :
                posts.length === 0 ? <div>postNot fount</div> :
                posts.map((post) => {return (<Blog post={post}/>)})
            }
        </div>
  )
}
