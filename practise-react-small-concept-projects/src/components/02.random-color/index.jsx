/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./style.css";

const RandomColorGenerator = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateRandomColor = (length) => Math.floor(Math.random() * length);

  const handleGenerateHEXColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let newColor = "#";
    for (let i = 0; i < 6; i++)
      newColor += hex[generateRandomColor(hex.length)];

    setColor(newColor);
  };

  const handleGenerateRGBColor = () => {
    const r = generateRandomColor(256);
    const g = generateRandomColor(256);
    const b = generateRandomColor(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (colorType === "hex") handleGenerateHEXColor();
    else handleGenerateRGBColor();
  }, [colorType]);

  return (
    <div className="container" style={{ background: color }}>
      <h2 className="color-text">Generate Random Color</h2>

      <div className="buttons-container">
        <button className="btn btn2" onClick={() => setColorType("hex")}>
          Create Hex
        </button>

        <button className="btn btn2" onClick={() => setColorType("rgb")}>
          Create RGB
        </button>

        <button
          className="btn btn2"
          onClick={
            colorType === "hex"
              ? handleGenerateHEXColor
              : handleGenerateRGBColor
          }
        >
          Generate Color
        </button>
      </div>

      <div className="color-content">
        <p>{colorType.toUpperCase()} </p>
        <p>{color} </p>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
