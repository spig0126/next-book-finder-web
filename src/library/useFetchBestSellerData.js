import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchBestSellerData() {
    const listNameTest = "Hardcover";

    const [bestSellerData, setBestSellerData] = useState({});
    const [bestSellerQuery, setBestSellerQuery] = useState("hardcover-fiction");
    const [isLoading, setIsLoading] = useState(null);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const getBestSellersData = async () => {
            setIsLoading(true);
            setIsError(false); 

            try {
                const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${bestSellerQuery}.json?api-key=tjMAjnSX1uGpTJGgrI5ceHScPxTpQ9WM`);
                setIsLoading(true);
                setBestSellerData(response.data.results.books);
                console.log(bestSellerData);
            }
            catch (error) {
                setIsError(true);
                console.log(error);
            }
        };

        getBestSellersData();

    }, []);
        
    return { setBestSellerQuery, bestSellerData, isLoading, isError };
}