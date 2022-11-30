// DECLARATIVE
import React from "react";

export const Button = ({ children, color, handleClick }) => {
  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};
