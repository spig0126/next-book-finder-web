import Book from "./Book";
export default function BookFindList() {
    // 2. Use at the root of your app
    //bookList만 api에서 받아온 걸로 수정하면 됨.
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
            buyLink: "구매링크",
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
            buyLink: "구매링크",
            smallThumbnail:
                "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70BvHGPZAp1cyEUyblB6VTCfBmvoxK8TX35QNO2LIrCPRoc4JTLTTLzDeJvT93gdhkEj4WXiNwNpOyYFXypLZ8q_3bcvLQQVxiPax-kvMmOR7aq9J3IxsaHXXnZVX2djbBRR9I6&source=gbs_api",
        },
    ];
    return (
        <div>
            <Book book={bookList[0]} />
            <Book book={bookList[1]} />
        </div>
    );
}
