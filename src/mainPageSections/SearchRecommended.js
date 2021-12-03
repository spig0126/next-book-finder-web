import { Flex, Heading } from "@chakra-ui/react";

import SearchForm from "../components/SearchForm";
import BestSellersList from "../components/bestSellers/BestSellersList";

export default function SearchRecommended() {
    return (
        <Flex w="100%" flexDir="column" alignItems="center" mt="10rem">
            <Heading fontSize="5xl">Ready for another book?</Heading>
            <SearchForm width="50%" margin="1.5rem auto" />
            <BestSellersList />
        </Flex>
    )
}