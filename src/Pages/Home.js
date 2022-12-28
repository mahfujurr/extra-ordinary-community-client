import React from 'react';

const Home = () => {
    return (
        <div className='p-2'>
            <div>
                <textarea className="border-2 rounded-xl outline-rose-100 w-4/5 p-2" placeholder="write here..."></textarea>
            </div>
            <div className='flex justify-between mx-10 items-center pt-3'>
                <input type="" />
                <button className=' py-1 px-5 hover:bg-rose-200 rounded-2xl border-2 font-semibold ease-in-out duration-300'>Post</button>
            </div>
        </div>
    );
};

export default Home;