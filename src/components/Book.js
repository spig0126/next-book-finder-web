import styled from "styled-components";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function Book() {
  const bookContent = [
    {
      title: "책제목",
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
    <Button But>
      <Title>{bookContent[0].title}</Title>
      <Authors>{bookContent[0].authors}</Authors>
      <Page>{bookContent[0].pageCount}</Page>
      <Publish>
        {bookContent[0].publisher} {bookContent[0].published}
      </Publish>
      <Rating>
        {bookContent[0].averageRating}
        {bookContent[0].ratingsCount}
      </Rating>
    </Button>
  );
}

const Title = styled.div``;
const Authors = styled.div``;
const Page = styled.div``;
const Publish = styled.div``;
const Rating = styled.div``;
