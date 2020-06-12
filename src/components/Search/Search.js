import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './Results';
import SearchBar from './SearchBar';
import SearchIcon from "@material-ui/icons/Search";
import { useSearchStyle } from '../../constants/searchThemes'

export default function Search(props) {
  const [term, setTerm] = useState('');
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [placeholder, setPlaceholder] = useState(props.placeholder);
  const { queryKey, setResultId, transitionToShow } = props;
  const classes = useSearchStyle();

  useEffect(() => {
    const BASE_URL = 'http://localhost:3001/api';
    const ENDPOINT = '/search';

    const query = `${BASE_URL}${ENDPOINT}?key=${queryKey}&term=${term}`

    axios({
      method: 'GET',
      url: query
    }).then(response => setResults(response.data))
    .then(transitionToShow())
  }, [queryKey, term]);

  return (
    <>
      {/* <header>
      </header> */}
      <main>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <SearchBar placeholder={placeholder} onSearch={term => setTerm(term)} value={value} setValue={setValue}/>
        </div>
        <div className={classes.results}>        
          <Results results={results} setResultId={setResultId} queryKey={queryKey} setValue={setValue} setPlaceholder={setPlaceholder} />
        </div>
      </main>
    </>
  );
}