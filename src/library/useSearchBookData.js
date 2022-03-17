import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { useResultContext } from "../context/context";
import { pageState, searchQueryState, bookDataState } from "../states";

function useSearchBookData() {
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
    const [bookData, setBookData] = useRecoilState(bookDataState);
    const [pageIndex, setPageIndex] = useRecoilState(pageState);
    const [isLoading, setIsLoading] = useState(null);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        console.log(searchQuery);
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${(
                        pageIndex * 20
                    ).toString()}&maxResults=20`
                );

                setBookData(response.data);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
            }
        };
        fetchData();
    }, [searchQuery, pageIndex]);

    return { isLoading, isError };
}

export default useSearchBookData;
