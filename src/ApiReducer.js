const apiReducer = (state, action) => {
    switch (action.type) {
      case "API_CALL":
        return { ...state, loading: true };
      case "API_SUCCESS":
        return { ...state, loading: false, source: action.data };
      case "API_ERROR":
        return { ...state, loading: false, error: action.error };
  
      default:
        throw new Error();
    }
  };
  
  export default apiReducer