import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import HrMovieList from './HrMovieList'
import { IoChevronBackOutline,IoChevronForwardOutline } from "react-icons/io5";

function MovieList({generId,index_}) {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=async ()=>{
       const resp= await GlobalApi.getMovieByGenreId(generId)
       setMovieList(resp.data.results)
    // console.log(resp.data.results)
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[70px] text-white 
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
       ${index_%3===0?'mt-[60px]':' mt-[150px]'}`}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-hide scroll-smooth pt-5 px-3 pb-5'>
        {movieList.map((item)=>(
          <>
          {index_%3 === 0?<HrMovieList movie={item}/>:< MovieCard movie={item}/>}    
          </>
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className= {`text-[70px] text-white hidden md:block 
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
             ${index_%3===0?'mt-[60px]':' mt-[150px]'} `}/> 
    </div>
  )
}

export default MovieList