import { Flex, Heading, Spacer } from "@chakra-ui/react"

import SearchForm from "../components/SearchForm";

export default function MainSection() {
    return (
        <Flex w="100%">
            <Heading
                color="blue"
                fontSize="8xl"
                textAlign="left"
                minW="35rem"
                h="20rem" 
                m="7rem 2rem 2rem 5rem"
            >
                SEARCH, <br />DISCOVER, <br />EXPLORE
            </Heading>
            <Flex
                w="90%"
                h="20rem"
                m="7rem 0 10rem 0"
                pl="10rem"
                flexDir="column"
                alignItems="right"
                border="solid 1rem"
                borderColor="yellow"
                borderRightWidth="0"
            >
                <Spacer />
                <Heading fontSize="6xl" color="blue">Ready for another book?</Heading>
                <SearchForm width="40%" margin="1rem 0 0" />
                <Spacer />
            </Flex>
        </Flex>
    );
}