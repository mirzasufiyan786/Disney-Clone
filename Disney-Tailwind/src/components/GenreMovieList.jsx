import React from 'react'
import GeneralList from '../constant/GeneralList'
import MovieList from './MovieList'
export default function GenreMovieList() {
  return (
    <div>
      {GeneralList.genere.map((items,index)=>index<9&&(
    <div key={index} className='mx-2 md:mx-9 p-8'>
         <h2 className='text-white  text-[20px] font-bold'>
            {items.name} 
        </h2>
        <MovieList generId={items.id} index_={index}/>
        </div>
      ))}
    </div>
  )
}
