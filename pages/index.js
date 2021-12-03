import { Container, Flex, Heading, Box, Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import SearchForm from "../src/components/SearchForm";
import BestSellersList from "../src/components/bestSellers/BestSellersList";
import MainSection from "../src/mainPageSections/MainSection";
import SearchRecommended from "../src/mainPageSections/SearchSection";

export default function Home() {
    return (
        <Flex w="100%" flexDir="column">
            <MainSection />
            <SearchRecommended />
            <Flex
                mx="auto"
                my="20rem"
                w={{ base: "100vw", lg: "90vw" }}
                h="120rem"
                bgColor="blue"
                zIndex="-1"
                position="absolute"
                top="40rem"
                left={{ base: "0", lg: "5vw" }}
            ></Flex>
            <Flex
                mx="auto"
                my="20rem"
                w={{ base: "100vw", lg: "90vw" }}
                h="100rem"
                bgColor="yellow"
                zIndex="-1"
                position="absolute"
                top="160rem"
                left={{ base: "0", lg: "5vw" }}
            ></Flex>
            <Flex flexDir="column" w="100%" alignItems="center">
                <BestSellersList genre="Fiction" button="true" hlColor="white"/>
                <BestSellersList genre="Nonfiction" button="true" hlColor="white"/>
                <BestSellersList genre="Children's" button="true" hlColor="blue"/>
                <BestSellersList genre="Advice, How-To & Miscellaneous" button="true" hlColor="blue" />



            </Flex>
        </Flex>
    );
}
