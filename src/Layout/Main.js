import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { BiHomeHeart } from "react-icons/bi";
import { HiNewspaper } from "react-icons/hi";
import { RiMessage3Fill } from "react-icons/ri";


const Main = () => {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
            <div className='flex flex-row mt-16 w-full justify-between'>

                {/* 1st/left sidebar section  */}
                <div className='pl-2 w-1/5 mt-3'>
                    <Link to='/'>
                        <button className='hover:bg-stone-200 w-full pl-3 py-1 mb-1 rounded-2xl flex items-center  focus:bg-stone-300'>
                            <BiHomeHeart className='text-3xl ' />
                            <h1 className='font-semibold ml-3'>Home</h1>
                        </button>
                    </Link>

                    <button className='hover:bg-stone-200 w-full pl-3 py-1 mb-1 rounded-2xl flex items-center '>
                        <RiMessage3Fill className='text-3xl ' />
                        <h1 className='font-semibold ml-3'>Message</h1>
                    </button>

                    <button className='hover:bg-stone-200 w-full pl-3 py-1 mb-1 rounded-2xl flex items-center '>
                        <HiNewspaper className='text-3xl ' />
                        <h1 className='font-semibold ml-3'>Media</h1>
                    </button>



                </div>

                {/* 2nd/middle section  */}
                <div className='bg-gray-200 w-3/5 flex justify-center pt-5'>
                    <div className='w-3/5 bg-white shadow-lg rounded-xl'>
                        <Outlet ></Outlet>
                    </div>
                </div>

                {/* 3rd section  */}
                <div className='w-1/5 bg-blue-100'>
                    <h1>sideber</h1>
                </div>
            </div>


        </div>
    );
};

export default Main;