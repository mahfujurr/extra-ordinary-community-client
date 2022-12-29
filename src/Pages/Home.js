import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const [imageData, setImageData] = useState([]);
    const { user } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { data: postInfos = [], refetch } = useQuery({
        queryKey: ['postInfos'],
        queryFn: () => fetch(`http://localhost:5000/posts`)
            .then(res => res.json())
    })

    const handleAddPhoto = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                setImageData(imgData.data.url)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleAddPost = (data) => {
        const postsText = data.postText;
        const email = user?.email;
        const name = user?.displayName;
        const photo = user?.photoURL;
        const imgURL = imageData;
        const info = {
            postsText,
            email,
            name,
            photo,
            imgURL
        }
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
                refetch();

            })
    }

    // console.log(postInfos.name);

    return (
        <div>

            {/* posting section  start*/}

            <div className='p-2 bg-white shadow-lg rounded-xl'>
                <form onSubmit={handleSubmit(handleAddPost)}
                    onChange={handleSubmit(handleAddPhoto)}>
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
                        <textarea {...register("postText", {
                            required: "Name is Required"
                        })} className="border-2 rounded-xl outline-rose-100 w-4/5 p-2" placeholder="write here..."></textarea>


                    </div>
                    <div className='flex justify-center'>
                        <div className='flex justify-end  items-center pt-3 w-1/2'>
                            <input {...register("image", {
                                required: "Name is Required"
                            })} className="block w-full p-1 mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />

                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button type='submit' className='active:translate-y-0.5 py-1 px-5 hover:bg-rose-200 rounded-2xl border-2 font-semibold ease-in-out duration-300'>Post</button>
                    </div>
                </form>


            </div>
            {/* posting section  end*/}

            <div className=''>
                {
                    postInfos.map(postInfo => <div key={postInfo._id} className='mt-2 bg-white shadow-lg rounded-xl p-3'>
                        <div className='flex  items-center'>
                            <div className=" rounded-full mr-3">
                                {
                                    postInfo &&
                                    <>
                                        <div className="avatar">
                                            <div className="w-8 rounded-full">
                                                <img src={postInfo?.photo} alt="" />
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                            <h1 className='font-semibold text-xs mb-2'>
                                {postInfo.name} • <button className='text-blue-500 font-semibold'>Follow</button>
                            </h1>
                        </div>

                        <h1>
                            {postInfo.postsText}
                        </h1>
                        <Link to={`/status/${postInfo._id}`}><button className='text-xs mt-2 hover:bg-black hover:text-white border-2 py-1 px-2 border-black rounded-2xl'>View details</button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;