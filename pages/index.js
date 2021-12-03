import { Container, Flex, Heading, Box, Spacer } from "@chakra-ui/layout";

import BestSellersList from "../src/components/bestSellers/BestSellersList";
import MainSection from "../src/mainPageSections/MainSection";

export default function Home() {
    return (
        <Flex w="100%" flexDir="column">
            <MainSection />
            <Flex
                mx="auto"
                my="20rem"
                w={{ base: "100vw", lg: "90vw" }}
                h="95rem"
                bgColor="blue"
                zIndex="-1"
                position="absolute"
                top="13rem"
                left={{ base: "0", lg: "5vw" }}
            ></Flex>
            <Flex
                mx="auto"
                my="25rem"
                w={{ base: "100vw", lg: "90vw" }}
                h="50rem"
                bgColor="yellow"
                zIndex="-1"
                position="absolute"
                top="150rem"
                left={{ base: "0", lg: "5vw" }}
            ></Flex>
            <Flex flexDir="column" w="100%" alignItems="center">
                <BestSellersList genre="Fiction" hlColor="white"/>
                <BestSellersList genre="Nonfiction" hlColor="white"/>
                <BestSellersList genre="Children's" hlColor="blue"/>
                <BestSellersList genre="Advice, How-To & Miscellaneous" hlColor="blue" />



            </Flex>
        </Flex>
    );
}
