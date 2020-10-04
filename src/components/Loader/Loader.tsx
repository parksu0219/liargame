import React from "react";
import "./style.css";

function Loader() {
  return (
    <div className="wrapper-load">
      <div className="load">
        <p>Loading</p>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Loader;
