import React from 'react';
import { BiHomeHeart } from "react-icons/bi";
import { HiNewspaper } from "react-icons/hi";
import { RiMessage3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        
            <div className='px-2 w-1/5 mt-3'>
                <Link to='/'>
                    <button className='hover:bg-stone-200 w-full px-3 py-1 mb-1 rounded-2xl flex items-center  focus:bg-stone-300'>
                        <BiHomeHeart className='text-3xl ' />
                        <h1 className='font-semibold ml-3'>Home</h1>
                    </button>
                </Link>

                <button className='hover:bg-stone-200 w-full px-3 py-1 mb-1 rounded-2xl flex items-center '>
                    <RiMessage3Fill className='text-3xl ' />
                    <h1 className='font-semibold ml-3'>Message</h1>
                </button>

                <button className='hover:bg-stone-200 w-full px-3 py-1 mb-1 rounded-2xl flex items-center '>
                    <HiNewspaper className='text-3xl ' />
                    <h1 className='font-semibold ml-3'>Media</h1>
                </button>



            </div>
        
    );
};

export default LeftSidebar;