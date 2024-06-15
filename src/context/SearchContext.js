import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({children}) => {
    const [serachQuery, setSearchQuery] = useState("")
    return (
        <SearchContext.Provider value={{serachQuery, setSearchQuery}}>
            {children}
        </SearchContext.Provider>
    )
}
export default SearchContextProvider;