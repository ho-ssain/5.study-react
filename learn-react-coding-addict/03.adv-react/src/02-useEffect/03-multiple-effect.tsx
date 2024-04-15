import { useEffect, useState } from "react";

const MultipleEffect = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    console.log("effect-1");
  }, [value1]);

  useEffect(() => {
    console.log("effect-2");
  }, []);

  return (
    <div>
      <h2>
        1st Value <span>{value1}</span>
      </h2>
      <button className="btn" onClick={() => setValue1(value1 + 1)}>
        Click
      </button>
      <h2>
        2nd Value <span>{value2}</span>
      </h2>
      <button className="btn" onClick={() => setValue2(value2 + 1)}>
        Click
      </button>
    </div>
  );
};

export default MultipleEffect;
