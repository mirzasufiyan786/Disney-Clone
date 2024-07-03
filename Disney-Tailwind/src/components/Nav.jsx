import React, { useState } from 'react'
// import toplogo from './../assets/toplogo.png'
import logo from './../assets/Images/logo.png'
import NavItems from './NavItems';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { CiHome } from "react-icons/ci";
export default function Nav() {
    const [toggel, setToggel] = useState(false)
    const handelClick = () => {
        setToggel(!toggel)
    }
    const menu = [
        {
            name: "HOME",
            icon: HiHome

        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass

        },
        {
            name: "WATCH LIST",
            icon: HiPlus

        },
        {
            name: "ORIGNAL",
            icon: HiStar

        },
        {

            name: "MOVIES",
            icon: HiPlayCircle

        },
        {

            name: "SERIES",
            icon: HiTv

        }

    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center gap-8'>

                <img src={logo} className='w-[120px] object-cover mb-3 md:w-[190px]' alt="logo" />
                <div className='hidden md:flex gap-8'>
                    {menu.map((items) => (
                        <NavItems key={items.name}
                            name={items.name}
                            Icons={items.icon}
                        />
                    ))}
                </div>
                <div className='flex md:hidden gap-6'>
                    {menu.map((items, index) => index < 3 && (
                        <NavItems
                            key={index}
                            name={''}
                            Icons={items.icon}
                        />
                    ))}
                    <div className='md:hidden' onClick={handelClick}>
                        <NavItems
                            name={''}
                            Icons={HiDotsVertical}
                        />
                        {toggel ? <div className='absolute  mt-3 border-[1px] bg-[#181616] p-3 border-gray-700 px-5 py-4  '>
                            {menu.map((items, index) => index > 2 && (
                                <NavItems
                                    key={index}
                                    name={items.name}
                                    Icons={items.icon}
                                />
                            ))}
                        </div> : null}
                    </div>

                </div>
            </div>
            <img className=' hidden sm:block rounded-full h-[50px] w-[50px] md:w-[70px] md:h-[70px]' src="https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4" alt="profile" />
        </div>
    )
}
