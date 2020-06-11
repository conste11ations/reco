import React from "react";
import Typography from '@material-ui/core/Typography';
import Search from './Search/Search';

const Circle = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="800"
    height="800"
    fill="none"
    viewBox="800 1000"
    style={{ border: "none" }}
  >
    <circle {...props}></circle>
    <text x="500" y="500" font-family="sans-serif" font-size="14px" fill="black"></text>
  </svg>
);

export default Circle;