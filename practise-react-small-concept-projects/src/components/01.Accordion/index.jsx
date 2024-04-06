import data from "./data.js";
import "./style.css";
import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    setMultiple([]); // Reset multiple selection when switching to single selection mode
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    let findId = copyMultiple.indexOf(getCurrentId);
    if (findId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findId, 1);
    setMultiple(copyMultiple);
    setSelected(null); // Reset single selection when switching to multiple selection mode
  };

  return (
    <div className="wrapper">
      <h2>Accordion</h2>

      <div className="accordion">
        <button
          className={`btn ${enable ? "active" : ""}`}
          onClick={() => setEnable(!enable)}
        >
          {enable ? "Disable✔️✔️" : "Enable✔️✔️"}
        </button>

        {
          //......................

          data && data.length > 0
            ? data.map((item, index) => (
                <div className="item" key={index}>
                  <div
                    className="title"
                    onClick={() =>
                      enable
                        ? handleMultipleSelection(item.id)
                        : handleSingleSelection(item.id)
                    }
                  >
                    <h3>{item.question}</h3>
                    <span>+</span>
                  </div>
                  {
                    //..............
                    selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                      <div className="content">👉 {item.answer}</div>
                    ) : (
                      ""
                    )
                  }
                </div>
              ))
            : ""
        }
      </div>
    </div>
  );
};

export default Accordion;
