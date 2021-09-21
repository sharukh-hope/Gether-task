import React, { useState } from "react";
import MouseMoveObj from "./MouseMoveObj";
import "../stylesheets/grid.css";
import Point from "./Point";
import plus from "../plus.svg";
import cross from "../x-circle.svg";
const Grid = () => {
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
      } else y = (y - 100) * -1;
      points[name].push({
        x: e.nativeEvent.offsetX - 100 - 12.5,
        y,
      });
      console.log(e.nativeEvent.offsetX - 100 - 12.5);
      console.log(y);
      setPoints(points);
      setVis(false);
    }
  };
  //Console log the result on save
  const handleSave = () => {
    alert(JSON.stringify(points));
  };

  return (
    <div>
      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
      <div onClick={toggleCursor}>
        {!vis ? (
          <img className="add-marker-btn" src={plus} alt="add marker"></img>
        ) : (
          <img className="add-marker-btn" src={cross} alt="add marker"></img>
        )}
      </div>
      <div className="container">
        {" "}
        <div className="horizontal-wrapper">
          <MouseMoveObj visible={vis} offsetX={-20} offsetY={-10}>
            <div
              className="main-cursor"
              style={{ border: `2px solid ${color}` }}
            ></div>
          </MouseMoveObj>

          <div
            className="box left"
            onMouseDown={() => setColor("green")}
            onClick={(e) => handleClick(e, "left")}
          >
            <div className="center-pt">
              <Point points={points.left} />
            </div>
            left
          </div>

          <div
            className="box front"
            onMouseDown={() => setColor("green")}
            onClick={(e) => handleClick(e, "front")}
          >
            <div className="center-pt">
              <Point points={points.front} />
            </div>
            front
          </div>
          <div
            className="box top"
            onMouseDown={() => setColor("green")}
            onClick={(e) => handleClick(e, "top")}
          >
            <div className="center-pt">
              <Point points={points.top} />
            </div>
            top
          </div>
          <div
            className="box right"
            onMouseDown={() => setColor("green")}
            onClick={(e) => handleClick(e, "right")}
          >
            <div className="center-pt">
              <Point points={points.right} />
            </div>
            right
          </div>

          <div
            className="box back"
            onMouseDown={() => setColor("green")}
            onClick={(e) => handleClick(e, "back")}
          >
            <div className="center-pt">
              <Point points={points.back} />
            </div>
            back
          </div>
          <div
            className="box down"
            onMouseDown={() => setColor("green")}
            onClick={(e) => handleClick(e, "down")}
          >
            <div className="center-pt">
              <Point points={points.down} />
            </div>
            down
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
