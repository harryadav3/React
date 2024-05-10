import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Question15 = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="p-4 flex items-center">
      <button
        onClick={handleLike}
        className="text-2xl mr-2 hover:text-red-500 focus:outline-none"
      >
        {isLiked ? <FaHeart /> : <FaRegHeart />}
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </button>
      <span className="text-xl">{likes}</span>
    </div>
  );
};

export default Question15;
