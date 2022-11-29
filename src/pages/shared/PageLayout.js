import React from "react";
import "../../style/Content.css";

const Content = (props) => {
  return (
    <div className="content-container">
      <div className="content-wrapper">{props.children}</div>
    </div>
  );
};

export default Content;
