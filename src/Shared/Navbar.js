import React from 'react';
import { BsMailbox2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='z-10 fixed top-0 w-full bg-rose-100 flex items-center justify-center md:justify-between py-1 md:py-0'>
            <h1 className='font-bold text-2xl text-black pl-5'>EOS</h1>
            <div class="  md:flex flex-col justify-center hidden">
                
                    <div class="overflow-hidden z-0 rounded-full relative p-3 ">
                        <form class="relative flex bg-white rounded-full ">
                            <input type="text" placeholder="search here..." class="rounded-2xl flex-1 px-5 py-2 text-gray-700 focus:outline-none" />
                            <button class="bg-black text-white rounded-2xl font-semibold px-5  hover:bg-black/90 ">Search</button>
                        </form>
                       
                    </div>
            </div>
            <div className='hidden md:flex'>
                <button><BsMailbox2 className=' text-2xl'/></button>
                <button><FaUserCircle className=' text-2xl mx-3' /></button>

                <h1>
                
                </h1>
            </div>

        </div>
    );
};

export default Navbar;