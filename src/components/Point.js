import React from "react";

const Point = (props) => {
  if (props.points.length) {
    return props.points.map((point, index) => {
      return (
        <div
          key={index}
          className="marker"
          style={{
            left: `${point.x - 20}px`,
            top: `${point.y - 10}px`,
          }}
        ></div>
      );
    });
  } else return <React.Fragment></React.Fragment>;
};

export default Point;
