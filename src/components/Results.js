import React from "react";

export default function Results(props) {
  const { results, queryKey } = props;
  console.log(results);
  console.log(queryKey)
  const returnVal = queryKey === "list" ? "name" : "location";
  if (results === undefined) { return <div></div> };
  return results.map(result => {
    return <div>{result[returnVal]}</div>;
  });
}