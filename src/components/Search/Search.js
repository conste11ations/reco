import React from 'react';
import Results from './Results';
import SearchBar from './SearchBar';
import SearchIcon from "@material-ui/icons/Search";
import { useSearchStyle } from '../../constants/searchThemes'
import useSearchData from "../../hooks/useSearchData.js";

export default function Search(props) {
  const { queryKey, setResultId, placeholder } = props;
  const classes = useSearchStyle();

  const {
    state,
    setPlaceholder,
    setValue,
    setTerm
  } = useSearchData(placeholder, queryKey);

  return (
    <>
      <main>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <SearchBar placeholder={state.placeholder} onSearch={term => setTerm(term)} value={state.value} setValue={setValue} />
        </div>
        <div className={classes.results}>
          <Results results={state.results} setResultId={setResultId} queryKey={state.queryKey} setValue={setValue} setPlaceholder={setPlaceholder} />
        </div>
      </main>
    </>
  );
}