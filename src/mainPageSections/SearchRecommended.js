import { Flex, Heading } from "@chakra-ui/react";

import SearchForm from "../components/SearchForm";
import BestSellersList from "../components/bestSellers/BestSellersList";

export default function SearchRecommended() {
    return (
        <Flex w="100%" flexDir="column" alignItems="center" mt="10rem">
            <Heading fontSize="5xl" color="blue">Ready for another book?</Heading>
            <SearchForm width="50%" margin="1rem auto" />
            <BestSellersList genre="all" button={false}/>
        </Flex>
    )
}