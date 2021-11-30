import Book from "./Book";
import styled from "styled-components";
import { useState } from "react";
import { useResultContext } from "../contexts/context";
export default function BookFindList() {
    // 2. Use at the root of your app
    //bookList만 api에서 받아온 걸로 수정하면 됨.
    const { bookList } = useResultContext();
    console.log("items2: ", bookList);
    /*const bookList = [
        {
            id: "id1",
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
            id: "id2",
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
            buyLink:
                "https://play.google.com/store/books/details?id=zyTCAlFPjgYC&rdid=book-zyTCAlFPjgYC&rdot=1&source=gbs_api",
            smallThumbnail:
                "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70BvHGPZAp1cyEUyblB6VTCfBmvoxK8TX35QNO2LIrCPRoc4JTLTTLzDeJvT93gdhkEj4WXiNwNpOyYFXypLZ8q_3bcvLQQVxiPax-kvMmOR7aq9J3IxsaHXXnZVX2djbBRR9I6&source=gbs_api",
        },
    ];*/

    const books =
        bookList &&
        bookList.map((book, index) => (
            <Book key={book.id} index={index} book={book} />
        ));

    return (
        <div>
            <BookContainer>{books}</BookContainer>
        </div>
    );
}
const BookContainer = styled.div``;
