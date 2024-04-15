import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <button onClick={() => setValue(!value)} className="btn">
        Toggle Component
      </button>
      {value && <RandomComp />}
    </div>
  );
};

const RandomComp = () => {
  useEffect(() => {
    console.log("hmm! this is interesting!");
  }, []);
  return <h2>Hello There!</h2>;
};

export default CleanupFunction;
