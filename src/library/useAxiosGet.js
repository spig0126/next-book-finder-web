import { useEffect } from "react";

export default function useAxiosGet(selectValue) {
    const [totalItems, setTotalItems] = useState(0);
    const [bookArray, setBookArray] = useState([]);

    const searchField = (searchRange) => {    //change API request link fields by 'searchRange'
        switch (searchRange) {
            case 'all':
                return `q=${inputData.replace(' ', '+')}`;
            case 'title':
                return `q=''+intitle:${inputData}`;
            case 'author':
                return `q=''+inauthor:${inputData}`;
            case 'publisher':
                return `q=''+inpublisher:${inputData}`;
        }
    }

    useEffect(() => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?${searchField(selectValue)}`
            )
            //add fields request parameter(가져올 데이터 제한하기)
            .then(function (response) {
                setTotalItems(response.data.totalItems);
                setBookArray(response.data.items);

                if (response.data.items.length === 0) {
                    // return (
                    //     <ToastMessage>
                    //         검색된 결과가 없습니다.<br />다시 검색해주세요.
                    //     </ToastMessage>
                    // );
                } else {
                    setAPIData(response.data);
                }
            });
        console.log(APIData);
    }, []);

    return {totalItems, bookArray};
}
