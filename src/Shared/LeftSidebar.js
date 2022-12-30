import React from 'react';
import { BiHomeHeart } from "react-icons/bi";
import { HiNewspaper } from "react-icons/hi";
import { RiMessage3Fill } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (

        <div className='p-2 hidden md:flex md:flex-col w-1/5 mt-3 mx-1 bg-white rounded-2xl shadow-lg h-48'>
            <Link to='/'>
                <button className='hover:bg-stone-200 w-full px-3 py-1 mb-1 rounded-2xl flex items-center  focus:bg-stone-300'>
                    <BiHomeHeart className='text-3xl ' />
                    <h1 className='font-semibold ml-3 hidden lg:flex'>Home</h1>
                </button>
            </Link>

             <Link to='/message'>
                <button className='hover:bg-stone-200 w-full px-3 py-1 mb-1 rounded-2xl flex items-center '>
                    <RiMessage3Fill className='text-3xl ' />
                    <h1 className='font-semibold ml-3 hidden lg:flex'>Message</h1>
                </button>
            </Link>

            <Link to='/media'>
                <button className='hover:bg-stone-200 w-full px-3 py-1 mb-1 rounded-2xl flex items-center '>
                    <HiNewspaper className='text-3xl ' />
                    <h1 className='font-semibold ml-3 hidden lg:flex'>Media</h1>
                </button>
            </Link>
           

            <Link to='/about'>
                <button className='hover:bg-stone-200 w-full px-3 py-1 mb-1 rounded-2xl flex items-center '>
                    <BsFillPersonLinesFill className='text-3xl ' />
                    <h1 className='font-semibold ml-3 hidden lg:flex'>About</h1>
                </button>
            </Link> 
        </div>

    );
};

export default LeftSidebar;