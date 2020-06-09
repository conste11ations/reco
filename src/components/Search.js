import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Results from './Results';
import SearchBar from './SearchBar';
import SearchIcon from "@material-ui/icons/Search";
import { useSearchStyle } from '../constants/searchThemes'

export default function Search(props) {
  const [term, setTerm] = useState('');
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const { placeholder, queryKey } = props;
  const classes = useSearchStyle();

  useEffect(() => {
    const BASE_URL = 'http://localhost:3001/api';
    const ENDPOINT = '/search';

    const query = `${BASE_URL}${ENDPOINT}?key=${queryKey}&term=${term}`

    axios({
      method: 'GET',
      url: query
    }).then(response => setResults(response.data) && console.log("response", response.data))
  }, [queryKey, term]);

  return (
    <>
      <header>
      </header>
      <main>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <SearchBar placeholder={placeholder} onSearch={term => setTerm(term)} value={value} setValue={setValue}/>
          {/* <Autocomplete
            id="combo-box-demo"
            options={results}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          /> */}
        </div>
        <div className={classes.results}>        
          <Results results={results} setResults={setResults} queryKey={queryKey} setValue={setValue}/>
        </div>
      </main>
    </>
  );
}