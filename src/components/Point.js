import React from "react";
import "../stylesheets/grid.css";
const Point = (props) => {
  if (props.points.length) {
    return props.points.map((point, index) => {
      return (
        <div
          key={index}
          className="marker"
          style={{
            left: `${point.x - 8}px`,
            bottom: `${point.y - 9}px`,
          }}
        ></div>
      );
    });
  } else return <React.Fragment></React.Fragment>;
};

export default Point;
