/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getIndex) => {
    setRating(getIndex);
  };
  const handleMouseHover = (getIndex) => {
    setHover(getIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="container">
      <h2>Rating</h2>
      <div className="rating">
        {[...Array(numStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inActive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseHover(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
