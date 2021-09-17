import React, { useEffect, useState } from "react";

const MouseMoveObj = (props) => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [mouseMoved, setMouseMoved] = useState(false);
  const [lisActive, setLisActive] = useState(false);

  useEffect(() => {
    updateListener();
  });
  const getCursorPos = ({ clientX: xPos, clientY: yPos }) => {
    setXPos(xPos);
    setYPos(yPos);
    setMouseMoved(true);
  };
  const addListener = () => {
    window.addEventListener("mousemove", getCursorPos);
    setLisActive(true);
  };
  const removeListener = () => {
    window.removeEventListener("mousemove", getCursorPos);
    setLisActive(false);
  };
  const updateListener = () => {
    if (!lisActive && props.visible) {
      addListener();
    }

    if (lisActive && !props.visible) {
      removeListener();
    }
  };
  return (
    <div
      style={{
        display: props.visible && mouseMoved ? "block" : "none",
        position: "fixed",
        top: yPos + props.offsetY,
        left: xPos + props.offsetX,
      }}
    >
      {props.children}
    </div>
  );
};

export default MouseMoveObj;
