import { Container, Flex, Center, Spacer } from "@chakra-ui/layout";

import SearchForm from "../src/components/SearchForm";
import BookFindList from "../src/components/BookFindList";
import BestSellersList from "../src/components/bestSellers/BestSellersList";
export default function Home() {
    return (
        <Flex m="0" p="0" flexDir="column">
            <Flex color="white" bgColor="pink" w="100%" h="fit-content" p="15% 0 1rem" mx="auto">
                <Center fontSize={{base: "4xl", md: "7xl"}} fontWeight="bold" flexGrow={1}>Search Your Next Book</Center>
            </Flex>
            <Flex flexDir="column" color="white" bgColor="grey" w="100%" h="fit-content" p="1rem 0 5rem" mx="auto">
                <Center fontSize={{ base: "2xl", md: "5xl" }} mb="10%">Search Your Next Book</Center>
                <SearchForm />
            </Flex>
            <BestSellersList />
        </Flex>

    );
}
