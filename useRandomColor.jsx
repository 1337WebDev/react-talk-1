import { useState } from "react";

function useRandomColor() {
  const [color, setColor] = useState("");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor() {
    setColor(getRandomColor());
  }

  return [color, changeColor];
}

export default useRandomColor;
