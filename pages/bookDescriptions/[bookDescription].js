import styled from "styled-components";
import { Wrap } from "@chakra-ui/react";
import { withRouter } from "next/router";
import Link from "next/link";
function bookDescription({ router: { query } }) {
    const book = JSON.parse(query.book);
    return (
        <Wrap spacing="0.3rem" align="center">
            <BookImage src={book.smallThumbnail} />
            <Description> {book.description} </Description>
            <Link href={book.buyLink}>
                <a>
                    <Buy>click to buy</Buy>
                </a>
            </Link>
        </Wrap>
    );
}
export default withRouter(bookDescription);
const Description = styled.div``;
const Buy = styled.div``;
const BookImage = styled.img``;
