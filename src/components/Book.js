import styled from "styled-components";
import { Button, Wrap } from "@chakra-ui/react";
import Link from "next/link";

export default function Book({ book }) {
    return (
        <Link href={`/bookDescriptions/${book.title}`} passHref>
            <a>
                <Button But width="15rem" height="10rem">
                    <Wrap spacing="0.3rem" align="center">
                        <BookImage src="add image link" />
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
