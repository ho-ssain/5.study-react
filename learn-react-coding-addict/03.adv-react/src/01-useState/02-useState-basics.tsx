import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h4>you clicked {count} times</h4>
      <button className="btn" onClick={handleIncrease}>
        + Me
      </button>
      <button
        className="btn btn-hipster"
        onClick={handleDecrease}
        disabled={count === 0}
      >
        - Me
      </button>
    </div>
  );
};

export default UseStateBasics;
