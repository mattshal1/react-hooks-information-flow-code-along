import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF")

  const handleColorChange = (newChildColor) => {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color = {childrenColor} onColorChange = {handleColorChange}/>
      <Child color = {childrenColor} onColorChange = {handleColorChange}/>
    </div>
  );
}

export default Parent;