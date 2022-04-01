import React from 'react'

export const SearchContext = React.createContext();

export function useSearchContext() {
    return React.useContext(SearchContext)
}

export default SearchContext