/* eslint-disable no-use-before-define */
import React from 'react';
import { useSearchStyle } from '../constants/searchThemes'
import InputBase from "@material-ui/core/InputBase";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from "@material-ui/icons/Search";
import { list, businesses, business_listings, recommendations } from '../fixtures'


export default function Search({ placeholder }) {
  const classes = useSearchStyle();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={placeholder}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}
