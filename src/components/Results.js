import React from "react";

export default function Results(props) {
  const { results } = props;
  console.log(results);
  if (results === undefined) { return <div></div> };
  return results.map(result => {
    return <div>{"success"}</div>;
  });
}