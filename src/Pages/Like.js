import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";


const Like= () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter flex items-center "> <FaHeart className={`mr-2 text-2xl ${isClicked && 'text-rose-500'}  `}/> { ` ${likes}` }</span>
    </button>
  );
};

export default Like;