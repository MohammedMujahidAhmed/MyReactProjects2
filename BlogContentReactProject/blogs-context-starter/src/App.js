import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import { BlogPage } from "./Pages/BlogPage";
import { TagPage } from "./Pages/TagPage";
import { Category } from "./Pages/Category";
import { Home } from "./Pages/Home";

export default function App() {
  const {fetchData} = useContext(AppContext);
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get('page') ?? 1;
    
    if( location.pathname.includes('tags') ){ 
      const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page),tag);
    }  
    else if( location.pathname.includes('categories') ){
      const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page),null,category);
    }
    else if( location.pathname.includes('blog')){
      fetchData(page,)
    }
    else{
      fetchData(Number(page));
    }
  },[location.pathname , location.search]);

  return (
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/blog/:blogId" element = {<BlogPage/>} />
      <Route path="/tags/:tag" element = {<TagPage/>} />
      <Route path="/categories/:category" element = {<Category/>} />
    </Routes>
  )
}
