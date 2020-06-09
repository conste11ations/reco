import React from "react";
import Typography from '@material-ui/core/Typography';
import Search from './Search';

function Circle(height, width, name) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="800 1000"
      style={{ border: "none" }}
    >
      <circle cx="400" cy="400" r="400" fill="#ABD3BA"></circle>
        <text x="500" y="500" font-family="sans-serif" font-size="14px" fill="black">{name}</text>
    </svg>
  );
}

export default Circle;