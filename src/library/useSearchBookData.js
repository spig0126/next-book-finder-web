import { useEffect, useState } from "react";
import axios from "axios";

function useSearchBookData(query) {
    const [searchQuery, setSearchQuery] = useState(query)

    const [isLoading, setIsLoading] = useState(null);
    const [isError, setIsError] = useState(null);
    const [data, setData] = useState(null);

    
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery})`);
                setData(response.data);
                setIsLoading(false);
            }
            catch (error) {
                setIsError(true);
            }
        }
        fetchData();
            
    }, [searchQuery]);

    return {isLoading, isError, data, setSearchQuery};
}

export default useSearchBookData;