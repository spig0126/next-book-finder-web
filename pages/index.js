import { Container, Flex, Box } from "@chakra-ui/layout";
import {Image} from "@chakra-ui/react"

import SearchForm from "../src/components/SearchForm";
import BookFindList from "../src/components/BookFindList";
import BestSellersList from "../src/components/bestSellers/BestSellersList";
import MainBackground from "../public/images/MainBackground2.jpg"
export default function Home() {
    return (
        <Flex flexDir="column">
            <Image src={MainBackground.src} h="90vh" w="100%" objectFit="cover" mt="5rem" />
            <Box h="90vh" w="100%" mt="5rem" position="absolute" zIndex="1" />
            <BestSellersList />
        </Flex>
    );
}
