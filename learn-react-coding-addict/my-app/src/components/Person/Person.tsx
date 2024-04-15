import { FC } from "react";
import "./Person.scss";

interface PersonProps {}

const Person: FC<PersonProps> = () => (
  <div className="Person">It's Hossain Kabir here</div>
);

export default Person;
