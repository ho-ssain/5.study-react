import { FC, SetStateAction, useState } from "react";
import "./Ratings.scss";
import { FaStar } from "react-icons/fa";

interface RatingsProps {
  stars: number;
}

const Ratings: FC<RatingsProps> = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getIndex: SetStateAction<number>) => {
    setRating(getIndex);
  };

  const handleMouseMove = (getIndex: SetStateAction<number>) => {
    setHover(getIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="Ratings">
      {[...Array(stars)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave}
            size={18}
            className={index <= (hover || rating) ? "active" : "inActive"}
          />
        );
      })}
    </div>
  );
};

export default Ratings;
