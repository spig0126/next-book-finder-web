import { useEffect, useState } from "react";
import axios from "axios";
import { useResultContext } from "../context/context";

function useSearchBookData(query) {
    const [searchQuery, setSearchQuery] = useState(query);

    const [isLoading, setIsLoading] = useState(null);
    const [isError, setIsError] = useState(null);

    const { setBookData } = useResultContext();
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
                );

                setBookData(response.data);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
            }
        };
        fetchData();
    }, [searchQuery]);

    return { isLoading, isError, setSearchQuery };
}

export default useSearchBookData;
