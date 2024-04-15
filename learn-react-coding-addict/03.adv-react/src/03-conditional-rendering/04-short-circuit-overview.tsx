/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

const Short_circuit_overview = () => {
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("susan");

  return (
    <div>
      <h4>Falsy OR: {state1 || "Hello World!"}</h4>
      <h4>Falsy AND: {state1 && "Hello World!"}</h4>

      <h4>Truthy OR: {state2 || "Hello World!"}</h4>
      <h4>Truthy AND: {state2 && "Hello World!"}</h4>
    </div>
  );
};

export default Short_circuit_overview;
