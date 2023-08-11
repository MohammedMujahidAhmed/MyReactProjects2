import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export const Pagination = () => {
    const {page,totalPage,changeHandler} = useContext(AppContext);

    return (
    <div className='border shadow-sm w-full absolute bottom-0 bg-white'>
        <div className='flex justify-between p-2 w-9/12 max-w-[1100px] m-auto'>
            <div className='flex space-x-2'>
                {
                    page > 1 && 
                    (
                        <button onClick={()=>{changeHandler(page-1)}} className='border p-1 rounded-md font-medium '>Previous</button>
                    )
                }
                {
                    page < totalPage && 
                    (
                        <button onClick={()=>{changeHandler(page+1)}} className='border p-1 rounded-md font-medium '>Next</button>
                    )
                }
            </div>
            <div>
                <p>Page <span>{page}</span> of <span>{totalPage}</span></p>
            </div>
        </div>
    </div>
  )
}
