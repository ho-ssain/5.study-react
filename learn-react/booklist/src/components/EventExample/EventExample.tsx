import { ChangeEvent, FC } from "react";
import "./EventExample.scss";

interface EventExampleProps {}

const EventExample: FC<EventExampleProps> = () => {
  const handleFormInput = (e: ChangeEvent<HTMLInputElement>) =>
    console.log(e.target.value);

  // const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) =>
  //   console.log(e);

  const handleFormSubmission = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // alert("Form Submitted!!");
    console.log("form submitted.");
  };

  return (
    <div className="EventExample">
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          name="example"
          id="example"
          placeholder="write something!"
          style={{
            margin: "0 auto",
            padding: "5px 10px",
            fontSize: "18px",
            borderRadius: "10px",
            background: "#111",
            color: "white",
          }}
          onChange={(e) => handleFormInput(e)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventExample;
