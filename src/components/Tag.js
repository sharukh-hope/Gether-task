import React from "react";
import "../stylesheets/tag.css";
const Tag = () => {
  return (
    <div className="tag">
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Target"></input>
      <button className="update-btn">Update</button>
    </div>
  );
};

export default Tag;
