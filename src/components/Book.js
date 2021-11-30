import styled from "styled-components";
import { Button, Wrap } from "@chakra-ui/react";
import Link from "next/link";
/*
const smallThumbnail = book.volumeInfo.imageLinks.smallThumbnail;
const title = book.volumeInfo.title;
const authors = book.volumeInfo.authors;
const pageCount = book.volumeInfo.pageCount;
const publisher = book.volumeInfo.publisher;
const publishedDate = book.volumeInfo.publishedDate;
const averageRating = book.volumeInfo.averageRating;
const ratingsCount = book.volumeInfo.ratingsCount;
const description = book.volumeInfo.description;
const buyLink = book.saleInfo.buyLink;
*/
export default function Book({ book }) {
    return (
        <Link
            href={{
                pathname: `/bookDescriptions/${book.volumeInfo.title}`,
                query: { book: JSON.stringify(book) },
                //array 문자화
            }}
            as={`/bookDescriptions/${book.volumeInfo.title}`}
            passHref
        >
            <a>
                <Button But width="20rem" height="10rem">
                    <Wrap spacing="0.3rem" align="center">
                        <BookImage
                            src={book.volumeInfo.imageLinks.smallThumbnail}
                            height="60rem"
                            width="60rem"
                        />
                        <Title>{book.volumeInfo.title}</Title>
                        <Authors>{book.volumeInfo.authors}</Authors>
                        <Page>{book.volumeInfo.pageCount}</Page>
                        <Publish>
                            {book.volumeInfo.publisher}{" "}
                            {book.volumeInfo.publishedDate}
                        </Publish>
                        <Rating>
                            {book.volumeInfo.averageRating}{" "}
                            {book.volumeInfo.ratingsCount}
                        </Rating>
                    </Wrap>
                </Button>
            </a>
        </Link>
    );
}

const Title = styled.div``;
const Authors = styled.div``;
const Page = styled.div``;
const Publish = styled.div``;
const Rating = styled.div``;
const BookImage = styled.img``;
