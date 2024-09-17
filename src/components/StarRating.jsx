import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="h-24 flex justify-center items-center border-b border-neutral-700 pb-4">
      <div className="flex space-x-1">
        {Array.from({ length: totalStars }, (_, index) => {
          const starValue = index + 1;

          return (
            <FaStar
              key={index}
              className={`w-10 h-10 cursor-pointer transition-colors duration-200 ${
                starValue <= (hover || rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
