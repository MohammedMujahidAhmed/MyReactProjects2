import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [totalPage,setTotalPage] = useState(null);
    const [posts,setPosts] = useState([]); 
    const [tag,setTag] = useState(null);
    const location = useLocation();

    async function fetchData(page = 1,tag,category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`
        }
        try {
            const result = await fetch(url);
            const output = await result.json(); 
            setPosts(output.posts);
            setPage(output.page);
            setTotalPage(output.totalPages);
            console.log(output);
        } catch (error) {
            console.log("No data fetched");
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

    
    function changeHandler(page){
        setPage(page);
        if( location.pathname.includes('tags') ){ 
            const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
            fetchData(Number(page),tag);
          }  
          else if( location.pathname.includes('categories') ){
            const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
            fetchData(Number(page),null,category);
          }else{
            fetchData(Number(page));
          }
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        posts,
        setPosts,
        fetchData,
        changeHandler,
    };
    
    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
}

