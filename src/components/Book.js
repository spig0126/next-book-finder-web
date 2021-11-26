import styled from "styled-components";
import { Button, Wrap } from "@chakra-ui/react";
import Link from "next/link";

export default function Book({ book }) {
    return (
        <Link
            href={{
                pathname: `/bookDescriptions/${book.title}`,
                query: { book: JSON.stringify(book) },
                //array 문자화
            }}
            as={`/bookDescriptions/${book.title}`}
            passHref
        >
            <a>
                <Button But width="20rem" height="10rem">
                    <Wrap spacing="0.3rem" align="center">
                        <BookImage
                            src={book.smallThumbnail}
                            height="60rem"
                            width="60rem"
                        />
                        <Title>{book.title}</Title>
                        <Authors>{book.authors}</Authors>
                        <Page>{book.pageCount}</Page>
                        <Publish>
                            {book.publisher} {book.published}
                        </Publish>
                        <Rating>
                            {book.averageRating} {book.ratingsCount}
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
