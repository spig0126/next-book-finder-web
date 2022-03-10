import BookCard from "./BookCard";

import { Grid, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useResultContext } from "../context/context";
export default function BookFindList() {
    const { bookData } = useResultContext();
    const breakpoint = useBreakpointValue({ base: 2, lg: 3, xl: 4 });

    const books =
        bookData.items &&
        bookData.items.map((book, index) => (
            <BookCard key={book.id} index={index} book={book} />
        ));
    return (
        <Flex
            flexDir="column"
            py={{ base: "1rem", md: "3rem" }}
            px={{ base: "5%", md: "10rem" }}
            alignItems="center"
            color="blue"
        >
            <Text ontSize="3xl" mt="2rem" h="1.5rem">Your</Text>
            <Text fontSize="5xl" fontWeight="bold" mb="2rem" fontWeight="bold"> SEARCH RESULTS ({bookData.totalItems})</Text>
            <Grid templateColumns={`repeat(${breakpoint}, 1fr)`} gap="3rem">
                {books}
            </Grid>
        </Flex>
    );
}
