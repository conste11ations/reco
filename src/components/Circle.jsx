import React from "react";

function Circle({website, name, because, upvotes, downvotes}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="none"
      viewBox="200 200">
      <circle cx="84" cy="84" r="84" fill="#6FCF97"></circle>
      <text x="30" y="85" font-family="sans-serif" font-size="14px" fill="black">{name}</text>
    </svg>
  );
}

export default Circle;