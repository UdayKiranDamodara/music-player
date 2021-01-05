import React, { useState, createContext } from "react";

export const SearchContext = createContext()

const SearchContextProvider = (props) => {
    const [searchField, setSearchField] = useState('')
    return (
        <SearchContext.Provider value={[searchField, setSearchField]}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider