/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState, useEffect } from "react";

const HooksRule = () => {
  // const [condition, setCondition] = useState(true);

  // if (condition) {
  //   // won't work
  //   // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
  //   // const [state, setState] = useState(false);
  // }

  // if (condition) return <h1>Hello</h1>;

  // this also won't work
  // useEffect(() => {}, []);

  return (
    <div>
      <h3>Hook Rules</h3>
    </div>
  );
};

export default HooksRule;
