import React from 'react';
import { BiHomeHeart } from 'react-icons/bi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiNewspaper } from 'react-icons/hi';
import { RiMessage3Fill } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import LeftSidebar from '../Shared/LeftSidebar';
import Navbar from '../Shared/Navbar';



const Main = () => {
    return (
        <div className='w-full bg-gray-200 text-black'>
            <Navbar></Navbar>
            <div className='flex flex-row md:pt-16 w-full justify-between'>

                {/* 1st/left sidebar section  */}
                <LeftSidebar ></LeftSidebar>

                {/* 2nd/middle section  */}
                <div className='bg-gray-200 w-full md:w-3/5 flex justify-center pt-5'>
                    <div className='w-full md:w-3/5 px-5 md:px-0'>
                        <Outlet ></Outlet>
                    </div>
                </div>

                {/* 3rd section  */}
                <div className='w-1/5 bg-gray-200 hidden md:flex'>
                    <h1>.</h1>
                </div>
            </div>
            <div className='fixed bottom-0 w-full '>
                <div className='p-2  md:hidden grid grid-cols-4 justify-center items-center w-full mt-3 mx-0 bg-white shadow-lg '>
                    <Link to='/'>
                        <button className='hover:bg-stone-200 w-full ease-in-out duration-300  px-3 py-1 mb-1 rounded-2xl flex justify-center  items-center  focus:bg-stone-300'>
                            <BiHomeHeart className='text-3xl ' />
                            
                        </button>
                    </Link>

                    <Link to='/message'>
                        <button className='hover:bg-stone-200 w-full ease-in-out duration-300 px-3 py-1 mb-1 rounded-2xl flex items-center  justify-center   '>
                            <RiMessage3Fill className='text-3xl ' />
                            
                        </button>
                    </Link>

                    <Link to='/media'>
                        <button className='hover:bg-stone-200 w-full ease-in-out duration-300 px-3 py-1 mb-1 rounded-2xl flex items-center  justify-center '>
                            <HiNewspaper className='text-3xl ' />
                            
                        </button>
                    </Link>


                    <Link to='/about'>
                        <button className='hover:bg-stone-200 w-full ease-in-out duration-300 px-3 py-1 mb-1 rounded-2xl flex items-center justify-center'>
                            <BsFillPersonLinesFill className='text-3xl ' />
            
                        </button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;