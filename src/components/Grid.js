import React, { useState } from "react";
import MouseMoveObj from "./MouseMoveObj";
import "../stylesheets/grid.css";
import Point from "./Point";
import plus from "../plus.svg";
import cross from "../x-circle.svg";
import Tag from "./Tag";
const Grid = () => {
  const boxes = ["left", "front", "top", "right", "back", "down"];
  const [vis, setVis] = useState(false);
  const [color, setColor] = useState("red");
  const [points, setPoints] = useState({
    right: [],
    left: [],
    top: [],
    back: [],
    down: [],
    front: [],
  });
  //Marker following the cursor
  const toggleCursor = () => {
    setColor("red");
    if (!vis) {
      setVis(true);
    } else {
      setVis(false);
    }
  };
  //Handle click on the grid
  const handleClick = (e, name) => {
    if (vis) {
      let y = e.nativeEvent.offsetY;
      if (y > 100) {
        y = -y + 100;
      } else {
        y = (y - 100) * -1;
      }

      points[name].push({
        x: e.nativeEvent.offsetX - 100 - 12,
        y,
      });

      console.log(e.nativeEvent.offsetX - 100 - 12);
      console.log(y);
      setPoints(points);
      setVis(false);
    }
  };
  //Console log the result on save
  const handleSave = () => {
    alert(JSON.stringify(points));
  };
  const GridBox = boxes.map((position) => {
    return (
      <div
        key={position}
        className={`box ${position}`}
        onMouseDown={() => setColor("green")}
        onClick={(e) => handleClick(e, position)}
      >
        <div className="center-pt">
          <Point points={points[position]} />
        </div>
        {position}
      </div>
    );
  });

  return (
    <div>
      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
      {/* <Tag /> */}
      <div onClick={toggleCursor}>
        {!vis ? (
          <img className="add-marker-btn" src={plus} alt="add marker"></img>
        ) : (
          <img className="add-marker-btn" src={cross} alt="add marker"></img>
        )}
      </div>
      <div className="container">
        {" "}
        <div className="wrapper">
          <MouseMoveObj visible={vis} offsetX={-20} offsetY={-10}>
            <div
              className="main-cursor"
              style={{ border: `2px solid ${color}` }}
            ></div>
          </MouseMoveObj>
          {GridBox}
        </div>
      </div>
    </div>
  );
};

export default Grid;
