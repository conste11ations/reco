import React, { useEffect, useCallback } from 'react';
import InputBase from "@material-ui/core/InputBase";
import useDebounce from '../hooks/useDebounce';
import { useSearchStyle } from '../constants/searchThemes'

export default function SearchBar(props) {
  const { placeholder, value, setValue } = props;
  const term = useDebounce(value, 400);
  const classes = useSearchStyle();
  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <InputBase
          // className="radius"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          spellCheck="false"
          placeholder={placeholder}
          name="search"
          type="text"
          value={value}
          autoComplete="off"
          onChange={event => setValue(event.target.value)}
        />
      </form>
    </section>
  );
}
