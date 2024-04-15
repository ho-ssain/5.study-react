/**
useEffect is a hook that allows you to perform side effects in your components. means basically any work outside of rhe component.
Example-: subscription, fetching data, directly updating the DOM, event listeners, timers etc.

- useEffect Hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [] runs only on initial render
*/

import { useEffect, useState } from "react";

const useEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
  }, []);

  return (
    <div>
      <h3>
        Value <span>{value}</span>
      </h3>

      <button className="btn" onClick={() => setValue(value + 1)}>
        Click
      </button>
    </div>
  );
};

export default useEffectBasics;
