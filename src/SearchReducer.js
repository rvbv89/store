 const searchReducer = (state, action) => {
  switch (action.type) {
    case "CLEAN_QUERY":
      return { ...state, loading: false, results: [], value: "" };
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "FINISH_FILTERED_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };
    case "SOURCE_UNLOADED":
      return { ...state, loading: true, results: action.results };
    case "API_CALL":
      return { ...state, loading: true };
    case "API_SUCCESS":
      return { ...state, loading: false, source: action.data };
    case "API_ERROR":
      return { ...state, loading: false, error: action.error };
    case "FILTER_SELECT":
      return { ...state, filteredSource: action.filteredSource, filterValue: action.filterValue };

    default:
      throw new Error();
  }
};

export default searchReducer