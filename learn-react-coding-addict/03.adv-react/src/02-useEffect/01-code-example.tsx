import { useState } from "react";

const ErrorCodeExample = () => {
  const [value, setValue] = useState(0);

  const hello = () => {
    setValue(value + 1); // error---infinite loop
  };
  hello();

  return (
    <div>
      <h2>
        Value: <span>{value}</span>
      </h2>

      <button className="btn" onClick={() => setValue(value + 1)}>
        Click
      </button>
    </div>
  );
};

export default ErrorCodeExample;
