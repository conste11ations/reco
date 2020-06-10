import React from "react";
import { useSearchStyle } from '../constants/searchThemes'

export default function Results(props) {

  const classes = useSearchStyle();
  const { results, queryKey, setValue, setResults } = props;
  const returnVal = queryKey === "list" ? "name" : "location";
  
  if (results === undefined) { return <div></div> };
  return results.map(result => {
    return (
      <div
        className={classes.resultItem}
        onClick={() => { setValue(result[returnVal]); setResults(undefined) }}>
        {result[returnVal]}
      </div>
    );
  });
}