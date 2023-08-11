import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../Components/Header'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { Blog } from '../Components/Blog';
import { baseUrl } from '../baseUrl';
import { Spinner } from '../Components/Spinner';
import { Blogs } from '../Components/Blogs';

export const BlogPage = () => {
    const location = useLocation(); 
    const blogId = location.pathname.split('/').at(-1);
    const navigation = useNavigate();
    const [post,setpost] = useState([]);
    const {setLoading} = useContext(AppContext);

    async function fetchDataByBlogId(){
        setLoading(true);
        let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
        try{
            const result = await fetch(url);
            setpost(await result.json());
            console.log(post);
        }
        catch{
            <div>Problem in fetching data</div>
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchDataByBlogId();
        }
    },[location.pathname]);

  return (
    <div className='flex flex-col w-full h-screen overflow-hidden relative'>
        <Header/>
        <div className='w-9/12 max-w-[1100px] mt-[65px] mb-[60px] m-auto overflow-scroll no-scrollbar'>
            <div className='flex w-full justify-between'>
                <button onClick={()=>navigation(-1)} to='/' className='border p-1 rounded-md font-medium px-2' >Back</button>
                <Link to='/' className='border p-1 rounded-md font-medium px-2' >Home</Link>
            </div>
            {
                post.length === 0 ? <Spinner/> :
                <Blog post={post.blog}/>
            }
            <p className='font-bold text-2xl mt-[50px]'>Related Blogs</p>
            <div className='w-9/12 max-w-[1100px] no-scrollbar'>
                { 
                    // loading ? 
                    // <Spinner/> 
                    // :
                    post.length === 0 ? <div>post Not fount</div> :
                    post.relatedBlogs.map((post) => {return (<Blog post={post}/>)})
                }
            </div>
        </div>
        
    </div>
  )
}

