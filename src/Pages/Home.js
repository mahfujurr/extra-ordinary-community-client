import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const postsText = form.postText.value;
        const email = user?.email;
        const name = user?.displayName;
        const photo = user?.photoURL;

        const info = {
            postsText,
            email,
            name,
            photo

        }
        console.log(info);
        fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }

    return (
        <div className='p-2'>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-center items-center'>
                    <div className=" rounded-full mr-5">
                        {
                            user?.photoURL &&
                            <>
                                <div className="avatar">
                                    <div className="w-10 rounded-full border-2 border-green-500">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <textarea name='postText' className="border-2 rounded-xl outline-rose-100 w-4/5 p-2" placeholder="write here..."></textarea>


                </div>
                <div className='flex justify-center'>
                    <div className='flex justify-end  items-center pt-3 w-1/2'>
                        <input className="block w-full p-1 mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />

                    </div>
                </div>
                <div className='flex justify-end'>
                    <button type='submit' className=' py-1 px-5 hover:bg-rose-200 rounded-2xl border-2 font-semibold ease-in-out duration-300'>Post</button>
                </div>
            </form>

            <div>
                
            </div>
        </div>
    );
};

export default Home;