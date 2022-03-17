import BookCard from "./BookCard";

import {
    Grid,
    Text,
    Flex,
    useBreakpointValue,
    Spinner,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { bookDataState } from "../states";
import Paginator from "./Paginator";
export default function BookFindList({ isLoading }) {
    const bookData = useRecoilValue(bookDataState);
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
            width="90%"
            mx="auto"
        >
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <Text ontSize="3xl" mt="2rem" h="1.5rem">
                        Your
                    </Text>
                    <Text fontSize="5xl" fontWeight="bold" mb="2rem">
                        SEARCH RESULTS ({bookData.totalItems})
                    </Text>
                    <Grid
                        width="100%"
                        templateColumns={`repeat(${breakpoint}, 1fr)`}
                        gap="3rem"
                        mb="3rem"
                    >
                        {books}
                    </Grid>
                    <Paginator total={bookData.totalItems} />
                </>
            )}
        </Flex>
    );
}
