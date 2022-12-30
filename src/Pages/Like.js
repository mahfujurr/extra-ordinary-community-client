import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";


const Like = () => {
    // const { data: dblike = [], refetch } = useQuery({
    //     queryKey: ['dblike'],
    //     queryFn: () => fetch(`https://eoc-server.vercel.app/postlike`)
    //         .then(res => res.json())
    // })
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    //     const currentLike = likes;
    //     fetch('https://eoc-server.vercel.app/postlike', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(currentLike)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             refetch();
    //             // form.reset();

    //         })
    };

    return (
        <button className={`like-button ${isClicked && 'liked'}`} onClick={handleClick}>
            <span className="likes-counter flex items-center "> <FaHeart className={`mr-2 text-2xl ${isClicked && 'text-rose-500'}  `} /> {` ${likes}`}</span>
        </button>
    );
};

export default Like;