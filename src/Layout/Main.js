import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../Shared/LeftSidebar';
import Navbar from '../Shared/Navbar';



const Main = () => {
    return (
        <div className='w-full bg-gray-200 text-black'>
            <Navbar></Navbar>
            <div className='flex flex-row pt-16 w-full justify-between'>

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
                    <h1></h1>
                </div>
            </div>


        </div>
    );
};

export default Main;