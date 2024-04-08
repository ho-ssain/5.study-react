import { FC } from "react";
import "./Greeting.scss";
import Person from "../Person/Person";
import Message from "../Message/Message";

interface GreetingProps {}

const Greeting: FC<GreetingProps> = () => (
  <div className="Greeting">
    <h1>Hi!!!🙋‍♂️✋🙂</h1>
    <Person />
    <Message />
  </div>
);

export default Greeting;
