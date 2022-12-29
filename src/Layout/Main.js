import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../Shared/LeftSidebar';
import Navbar from '../Shared/Navbar';



const Main = () => {
    return (
        <div className='w-full bg-gray-200'>
            <Navbar></Navbar>
            <div className='flex flex-row mt-16 w-full justify-between'>

                {/* 1st/left sidebar section  */}
                <LeftSidebar></LeftSidebar>

                {/* 2nd/middle section  */}
                <div className='bg-gray-200 w-3/5 flex justify-center pt-5'>
                    <div className='w-3/5 '>
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