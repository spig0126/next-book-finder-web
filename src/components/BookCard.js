import styled from "styled-components";
import { Square, Flex, Image, Text, Heading } from "@chakra-ui/react";

import { useRouter } from "next/router";
function BookCard({ book }) {
    const router = useRouter();
    const toggleColor = false;

    return (
        <Button
            h="14rem"
            p="0"
            mb="4rem"

            onClick={() => {
                router.push({
                    pathname: `/bookDescriptions/${book.id}`,
                    query: {
                        title: book.volumeInfo.title,
                        thumbnail:
                            (book.volumeInfo &&
                                book.volumeInfo.imageLinks &&
                                book.volumeInfo.imageLinks.thumbnail) ||
                            `https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg`,
                        buyLink: book && book.saleInfo && book.saleInfo.buyLink,
                        description:
                            book.volumeInfo && book.volumeInfo.description,
                        authors: book.volumeInfo && book.volumeInfo.authors,
                        ratings:
                            book.volumeInfo && book.volumeInfo.averageRating,
                        ratingsCount:
                            book.volumeInfo && book.volumeInfo.ratingsCount,
                    },
                });
            }}
        >
            <Flex bgColor="beige" w="100%" minW="100%" h="70%" minH="70%" alignItems="center">
                <Image
                    src={
                        (book.volumeInfo &&
                            book.volumeInfo.imageLinks &&
                            book.volumeInfo.imageLinks.thumbnail) ||
                        `https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg`
                    }
                    h="80%"
                    mihH="80%"
                    w="50"
                    minW="50%"
                    mx="auto"
                    objectFit="cover"
                    boxShadow="base"
                />
            </Flex>
        </Button>
    );
}
export default BookCard;
const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5px;
    word-wrap: break-word;
`;
const Authors = styled.div`
    font-size: medium;
    color: grey;
    margin-bottom: 2rem;
`;
const Publish = styled.div`
    margin-bottom: 5px;
`;
