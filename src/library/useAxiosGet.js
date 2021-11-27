import { useEffect, useState } from "react";
import axios from "axios";

function useAxiosGet(inputData, searchRange) {
    const [totalItems, setTotalItems] = useState(0);
    const [bookArray, setBookArray] = useState([]);

    function searchField(inputData, selectValue) {
        //change API request link fields by 'searchRange'
        switch (selectValue) {
            case "all":
                return `q=${inputData.replace(" ", "+")}`;
            case "title":
                return `q=''+intitle:${inputData}`;
            case "author":
                return `q=''+inauthor:${inputData}`;
            case "publisher":
                return `q=''+inpublisher:${inputData}`;
        }
    }

    
    useEffect(() => {
        const response = axios.get(`https://www.googleapis.com/books/v1/volumes?${searchField(
            inputData,
            searchRange
        )}`);
        setTotalItems(response.data.totalItems);
        setBookArray(response.data.items);
            
    }, []);

    // useEffect(() => {
        console.log({ totalItems, bookArray });
        console.log(searchField(inputData, searchRange));
    // }, []);

    return { totalItems, bookArray };
}

export default useAxiosGet;