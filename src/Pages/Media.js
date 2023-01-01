import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Like from './Like';

const Media = () => {
    const { data: postInfos = [], } = useQuery({
        queryKey: ['postInfos'],
        queryFn: () => fetch(`https://eoc-server.vercel.app/posts`)
            .then(res => res.json())
    })
    return (
        <div>
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
                        {postInfo.postsText.length > 100 ? postInfo.postsText.slice(0, 100) + '...' : postInfo.postsText}
                    </h1>
                    {
                        postInfo?.imgURL && <img src={postInfo?.imgURL} alt="" className='my-2 bg-cover bg-center' />
                    }
                    <div className='flex justify-between items-center'>
                        <Like key={postInfo._id}
                            postInfo={postInfo}
                        ></Like>
                        <Link to={`/status/${postInfo._id}`}><button className='text-xs mt-2 hover:bg-black hover:text-white border-2 py-1 px-2 border-black rounded-2xl'>View details</button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Media;