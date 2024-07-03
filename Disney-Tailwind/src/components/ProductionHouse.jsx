import React from 'react'
import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import nationalG from '../assets/Images/nationalG.png'
import pixar from '../assets/Images/pixar.png'
import starwar from '../assets/Images/starwar.png'
import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import nationalGeograhicV from '../assets/Videos/national-geographic.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import starwarsV from '../assets/Videos/star-wars.mp4'
export default function ProductionHouse() {
    const productionHouseList = [
        {
            id:1,
            image:disney,
            vedio:disneyV
        },
        {
            id:1,
            image:marvel,
            vedio:marvelV
        },
        {
            id:1,
            image:nationalG,
            vedio:nationalGeograhicV
        },
        {
            id:1,
            image:pixar,
            vedio:pixarV
        },
        {
            id:1,
            image:starwar,
            vedio:starwarsV
        }
    ]
  return (
    <div className='flex  gap-2 md:gap-5 p-2 px-8 md:px-16'>
      {productionHouseList.map((items,index)=>(
        <div key={index} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800 relative '>
            <video key={items.index} src={items.vedio} autoPlay playsInline muted loop alt="vedio" className="z-0 
            opacity-60 
            top-0 rounded-md  md:opacity-0 md:hover:opacity-60 absolute " />
            <img key={items.index} src={items.image} alt="img" className='w-full relative z-[-1] opacity-100  '/>
        </div>
      ))}
    </div>
  )
}
