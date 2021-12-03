import Book from "./BookCard";

import { Wrap, Text, Flex } from "@chakra-ui/layout";
import { useResultContext } from "../context/context";
export default function BookFindList() {
    const { bookData } = useResultContext();

    const books =
        bookData.items &&
        bookData.items.map((book, index) => (
            <Book key={book.id} index={index} book={book} />
        ));
    
    return (
        <Flex
            flexDir="column"
            py={{ base: "1rem", md: "3rem" }}
            px={{ base: "5%", md: "5rem" }}
            alignItems="center"
            color="blue"
        >
            <Text ontSize="2xl" mt="2rem" h="1.5rem">Your</Text>
            <Text fontSize="4xl" fontWeight="bold" mb="2rem"> SEARCH RESULTS ({bookData.totalItems})</Text>

            <Wrap name="BookContainer" direction="row" spacing={5}>
                {books}
            </Wrap>
        </Flex>
    );
}
