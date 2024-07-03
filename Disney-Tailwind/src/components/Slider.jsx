import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronRight,HiChevronLeft } from "react-icons/hi2";
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"; 
const screeWidth=window.innerWidth;
export default function Slider() {
     
const [movieList, setMovieList] = useState([]);
const elementRef=useRef();
const handelLeftArrow=(element)=>{
 element.scrollLeft-=screeWidth-110
}
const handelRightArrow=(element)=>{
    element.scrollLeft+=screeWidth-110
   }
    useEffect(() => {
     getTrendingMovie();
    }, [])
    const getTrendingMovie=async ()=>{
 const resp = await GlobalApi.getTrendingVideos
setMovieList(resp.data.results)
    }
  return (
    <div>
        <HiChevronRight className= 'text-white text-5xl mt-[150px] absolute right-0 mx-6 cursor-pointer hidden md:block' onClick={()=>handelRightArrow(elementRef.current)} />
        <HiChevronLeft className='text-white text-5xl mt-[150px] absolute mx-6 cursor-pointer  hidden md:block 'onClick={()=>handelLeftArrow(elementRef.current)} />
    <div className='flex overflow-x-auto w-ful  px-16 py-4 scrollbar-hide scroll-smooth ' ref={elementRef}>
      {movieList.map((items,index)=>(
        <img key={index} src={IMAGE_BASE_URL+items.backdrop_path
        } alt="slider"
        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-x-gray-400 transition-all duration-100 ease-in  ' />
          
      ))}
    </div>
    </div>
  )
}
