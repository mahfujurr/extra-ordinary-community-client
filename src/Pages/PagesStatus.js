import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Like from './Like';

const PagesStatus = () => {
    const postInfo = useLoaderData([]);
    const { user } = useContext(AuthContext);
    const { data: commentInfo = [], refetch } = useQuery({
        queryKey: ['commentInfo'],
        queryFn: () => fetch(`http://localhost:5000/comments/${postInfo._id}`)
            .then(res => res.json())
    })
    const handleSubmit = e => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const userPhoto = user.photoURL;
        const userName = user.displayName;
        const postId = postInfo._id;
        const info = {
            time: Date.now(),
            comment,
            userPhoto,
            userName,
            postId
        }

        fetch('http://localhost:5000/comments', {
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

    return (
        <div className='mb-16'>
            <div key={postInfo._id} className='mt-2 bg-white shadow-lg rounded-xl p-3'>
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
                {
                            postInfo?.imgURL && <img src={postInfo?.imgURL} alt="" className='my-2 bg-cover bg-center' />
                        }
                <div className='mt-2'>
                    <Like postInfo={postInfo} 
                    key={postInfo._id} 
                    refetch={refetch}></Like>
                </div>
                <hr className='border mt-3' />
                <div>
                    <form onSubmit={handleSubmit}>
                        <h1>Comments</h1>
                        <input type="text" name='comment' className='py-1 mt-1 rounded-2xl outline-none px-4 border' placeholder='write here...' />
                        <button type='submit' className='px-2 py-1 border-black border-2 rounded-2xl ml-5 font-bold text-sm '>Post comment</button>
                    </form>
                </div>
            </div>
            {
                commentInfo.map(c => <div key={c._id} className='bg-white p-3 rounded-2xl mt-3'>
                    <div className='flex  items-center '>
                        <div className=" rounded-full mr-3">
                            {
                                c &&
                                <>
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src={c?.userPhoto} alt="" />
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <h1 className='font-semibold text-xs mb-2'>
                            {c?.userName}
                        </h1>

                    </div>
                    <h1>
                        {c.comment}
                    </h1>
                </div>)
            }
        </div>
    );
};

export default PagesStatus;