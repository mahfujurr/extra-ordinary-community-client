import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='p-2'>
            <div className='flex'>
                <div className="w-10 rounded-full mr-5">
                    <img src={user?.photoURL} className='rounded-full border-2 border-green-500' alt="" />
                </div>
                <textarea className="border-2 rounded-xl outline-rose-100 w-4/5 p-2" placeholder="write here..."></textarea>
            </div>
            <div className='flex justify-between mx-10 items-center pt-3'>
                <input class="block w-full p-1 mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />

            </div>
            <button className=' py-1 px-5 hover:bg-rose-200 rounded-2xl border-2 font-semibold ease-in-out duration-300'>Post</button>
        </div>
    );
};

export default Home;