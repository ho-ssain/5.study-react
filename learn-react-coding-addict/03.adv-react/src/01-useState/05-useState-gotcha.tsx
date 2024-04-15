import { useState } from "react";

const useStateGotcha = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>useStateGotcha</h1>
      <h4>Value: {value}</h4>
      <button
        onClick={() => {
          setTimeout(() => {
            setValue((currentState) => currentState + 1);
          }, 2000);
        }}
        className="btn"
      >
        Increment
      </button>
    </div>
  );
};

export default useStateGotcha;
