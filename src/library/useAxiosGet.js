import { useEffect, useState } from "react";
import axios from "axios";

function useAxiosGet(selectValue, inputData) {
    const [totalItems, setTotalItems] = useState(null);
    const [bookArray, setBookArray] = useState([]);

    function searchField(inputData, searchRange) {
        //change API request link fields by 'searchRange'
        switch (searchRange) {
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

    async function refetch(inputData, searchRange) {
        useEffect(() => {
            axios
                .get(
                    `https://www.googleapis.com/books/v1/volumes?${searchField(
                        inputData,
                        searchRange
                    )}`
                )
                //add fields request parameter(가져올 데이터 제한하기)
                .then(function (response) {
                    setTotalItems(response.data.totalItems);
                    setBookArray(response.data.items);

                    // if (response.data.items.length === 0) {
                    //     // return (
                    //     //     <ToastMessage>
                    //     //         검색된 결과가 없습니다.<br />다시 검색해주세요.
                    //     //     </ToastMessage>
                    //     // );
                    // } else {

                    // }
                });
            console.log({ totalItems, bookArray });
            console.log(searchField(inputData, searchRange));
        }, []);
    }

    return [{ totalItems, bookArray }, refetch];
}

export default useAxiosGet;
