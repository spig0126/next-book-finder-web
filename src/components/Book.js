import styled from "styled-components";
import { Button, Wrap } from "@chakra-ui/react";

export default function Book() {
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
      description: "상세설명",
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
      description: "상세설명",
      butLink: "구매링크",
    },
  ];
  return (
    <Button But width="15rem" height="10rem">
      <Wrap spacing="0.3rem" align="center">
        <BookImage src="add image link" />
        <Title>{bookList[0].title}</Title>
        <Authors>{bookList[0].authors}</Authors>
        <Page>{bookList[0].pageCount}</Page>
        <Publish>
          {bookList[0].publisher} {bookList[0].published}
        </Publish>
        <Rating>
          {bookList[0].averageRating} {bookList[0].ratingsCount}
        </Rating>
      </Wrap>
    </Button>
  );
}

const Title = styled.div``;
const Authors = styled.div``;
const Page = styled.div``;
const Publish = styled.div``;
const Rating = styled.div``;
const BookImage = styled.img``;
