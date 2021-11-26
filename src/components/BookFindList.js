import Book from "./Book";
export default function BookFindList() {
    // 2. Use at the root of your app
    const bookList = [
        {
            title: "어린왕자",
            authors: "작가",
            publisher: "출판사",
            published: "출판 날짜",
            totalCount: "검색된 책 수",
            id: "id",
            etag: "etag",
            pageCount: "쪽수",
            averageRating: "평점",
            ratingsCount: "평가인원",
            description: "어린왕자 상세설명",
            butLink: "구매링크",
        },
        {
            title: "아기돼지삼형제",
            authors: "작가",
            publisher: "출판사",
            published: "출판 날짜",
            totalCount: "검색된 책 수",
            id: "id",
            etag: "etag",
            pageCount: "쪽수",
            averageRating: "평점",
            ratingsCount: "평가인원",
            description: "아기돼지삼형제 상세설명",
            butLink: "구매링크",
        },
    ];
    return (
        <div>
            <Book book={bookList[0]} />
            <Book book={bookList[1]} />
        </div>
    );
}
