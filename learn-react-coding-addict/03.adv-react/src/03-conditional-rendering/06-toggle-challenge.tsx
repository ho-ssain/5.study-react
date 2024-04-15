import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <button onClick={() => setValue(!value)} className="btn">
        Toggle
      </button>
      {value ? <h3>Hello</h3> : <h3>Bye</h3>}
    </div>
  );
};

export default ToggleChallenge;
