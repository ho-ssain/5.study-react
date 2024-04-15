/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { data } from "../data.ts";
import "./index.scss";

const useStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleDelete = (id: number) =>
    setPeople(people.filter((p) => p.id !== id));

  const handleClear = () => setPeople([]);
  return (
    <div>
      {
        //.......................
        people.map((p) => {
          return (
            <div key={p.id} className="card">
              <h4>Name: {p.name}</h4>
              <button className="delete" onClick={() => handleDelete(p.id)}>
                Delete
              </button>
            </div>
          );
        })
        //.......................
      }
      <br />
      <button className="btn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default useStateArray;
