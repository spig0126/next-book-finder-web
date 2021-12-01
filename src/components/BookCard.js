import styled from "styled-components";
import { Button, Flex, Image, Box, Text, Wrap, Center} from "@chakra-ui/react";
import Link from "next/link";

export default function BookCard({ book }) {
    // const authors = book.authors.map((author, index) => (
    //     ", " + author
    // ));
    return (
        <Link
            href={{
                pathname: `/bookDescriptions/${book.volumeInfo.title}`,
                query: { book: JSON.stringify(book) },
                //array 문자화
            }}
            as={`/bookDescriptions/${book.volumeInfo.title}`}
            w="30%"
            passHref
        >
            <a>
                <Button h="14rem" p="0" mb="1rem" variant="filled" bgColor="white">
                    <Flex  w="100%" spacing="0.3rem" align="center">
                        <Image
                            src={book.volumeInfo.imageLinks.thumbnail}
                            h="14rem"
                            w="10rem"
                            objectFit="fill"
                        />
                        <Flex flexDir="column" alignItems="flex-start" ml="2rem">
                            <Text fontSize="xl">{book.volumeInfo.title}</Text>
                            <Authors>by {book.volumeInfo.authors}</Authors>
                            <Publish>
                                {book.volumeInfo.publisher} 
                            </Publish>
                            <Text>{book.volumeInfo.publishedDate}</Text>
                        </Flex>
                    </Flex>
                </Button>
            </a>
        </Link>
    );
}

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



