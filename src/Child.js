import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
  return <div onClick = {()=>props.onColorChange(getRandomColor())} className="child" style={{ backgroundColor: props.color }} />;
}

export default Child;