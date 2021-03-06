import { createContext, useContext, useState } from "react";

export const ResultContext = createContext(undefined);

export function ResultContextProvider({ children }) {
    const [bookData, setBookData] = useState([]);
    const [initialQuery, setInitialQuery] = useState([]);
    const value = {
        bookData,
        setBookData,
        initialQuery,
        setInitialQuery,
    };

    return (
        <ResultContext.Provider value={value}>
            {children}
        </ResultContext.Provider>
    );
}

export function useResultContext() {
    return useContext(ResultContext);
}
