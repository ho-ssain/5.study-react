import { FC } from "react";
import "./Message.scss";

interface MessageProps {}

const Message: FC<MessageProps> = () => (
  <div className="Message">
    He is a React Developer. He loves to make web applications using JavaScript
    and TypeScript. When he is not coding, you can find him playing poker.
  </div>
);

export default Message;
