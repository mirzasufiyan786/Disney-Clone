import React from 'react'

export default function NavItems({name,Icons}) {
  return (
    <div className='text-white flex items-center gap-3 text-[20px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
      <Icons/>
     <h2 > {name}</h2>
    </div>
  )
}
