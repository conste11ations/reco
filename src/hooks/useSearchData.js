import { useReducer, useEffect } from "react";
import axios from "axios";

const SET_TERM = "SET_TERM";
const SET_VALUE = "SET_VALUE";
const SET_RESULTS = "SET_RESULTS";
const SET_PLACEHOLDER = "SET_PLACEHOLDER";
const SET_QUERYKEY = "SET_QUERYKEY"

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TERM:
      return {
        ...state,
        term: action.term
      }
    case SET_VALUE:
      return {
        ...state,
        value: action.value
      }
    case SET_RESULTS:
      return {
        ...state,
        results: action.results
      };
    case SET_PLACEHOLDER:
      return {
        ...state,
        placeholder: action.placeholder
      }
    case SET_QUERYKEY:
      return {
        ...state,
        queryKey: action.queryKey
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default function useSearchData(placeholder, queryKey) {

  const [state, dispatch] = useReducer(reducer, {
    term: "",
    value: "",
    results: [],
    placeholder: placeholder,
    queryKey: queryKey
  });

  const setQueryKey = queryKey => dispatch({ type: SET_QUERYKEY, queryKey });
  const setPlaceholder = placeholder => dispatch({ type: SET_PLACEHOLDER, placeholder });
  const setValue = value => dispatch({ type: SET_VALUE, value });
  const setTerm = term => dispatch({ type: SET_TERM, term });

  const setResults = (queryKey, term) => {

    const ENDPOINT = '/api/search';

    const query = `${ENDPOINT}?key=${queryKey}&term=${term}`

    return axios({
      method: 'GET',
      url: query
    }).then(response => {
      dispatch({ type: SET_RESULTS, results: response.data })
    });

  }

  useEffect(() => {
    setResults(state.queryKey, state.term)
  }, [state.queryKey, state.term])



  return { state, setQueryKey, setResults, setPlaceholder, setValue, setTerm };
}