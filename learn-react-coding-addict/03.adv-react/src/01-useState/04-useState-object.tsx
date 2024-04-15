import { useState } from "react";

const useStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "coding",
  });

  const handleChange = () => {
    // setPerson({
    //   name: "John",
    //   age: 32,
    //   hobby: "gaming",
    // });

    setPerson({ ...person, name: "John" });
  };

  return (
    <div className="card">
      <h2>useState Object</h2>
      <h4>{person.name} </h4>
      <h4>{person.age} </h4>
      <h4>{person.hobby} </h4>
      <button className="btn" onClick={handleChange}>
        Change
      </button>
    </div>
  );
};

export default useStateObject;
