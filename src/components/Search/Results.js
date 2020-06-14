import React from "react";
import { useSearchStyle } from '../../constants/searchThemes'

export default function Results(props) {

  const classes = useSearchStyle();
  const { results, queryKey, setValue, setPlaceholder, setResultId } = props;
  const returnVal = queryKey === "list" ? "name" : "name";
  
  if (results === undefined) { return <div></div> };
  return results.map(result => {

    return (
      <div key={result.id}
        className={classes.resultItem}
        onClick={() => { setValue(""); setPlaceholder(result[returnVal]); setResultId(result.id)}}>
        {result[returnVal]}
      </div>
    );
  });
}