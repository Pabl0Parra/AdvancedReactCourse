// DECLARATIVE
import React from "react";

export const Button = ({ text, color, handleClick }) => {
  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};
