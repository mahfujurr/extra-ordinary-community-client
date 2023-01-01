import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";


const Like = ({postInfo}) => {
    // const { data: postl = [], refetch } = useQuery({
    //     queryKey: ['postl'],
    //     queryFn: () => fetch(`https://eoc-server.vercel.app/status/${postInfo._id}`)
    //         .then(res => res.json())
    // })

    const [likes, setLikes] = useState(postInfo.like);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
        
        const like = likes;

        const currentLike = {
            like,
        };
        console.log(currentLike.like);
        fetch(`https://eoc-server.vercel.app/status/${postInfo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentLike)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                // refetch();
                // form.reset();

            })
            
    };

    return (
        <button className={`like-button ${isClicked && 'liked'}`} onClick={handleClick}>
            <span className="likes-counter flex items-center "> <FaHeart className={`mr-2 text-2xl ${isClicked && 'text-rose-500'}  `} /> {` ${likes}`}</span>
        </button>
    );
};

export default Like;