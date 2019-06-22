import React from "react";
import "./style.css";

function Title(props) {

  return (
    <div>
      <h1 className="title">{props.children}</h1>
      <h1 className="title">{props.score}</h1>
    </div>);

}

export default Title;
