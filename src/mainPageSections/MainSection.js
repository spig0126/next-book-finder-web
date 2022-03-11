import { Flex, Heading, Spacer } from "@chakra-ui/react";

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
                m="7rem 2rem 2rem 1rem"
            >
                SEARCH, <br />
                DISCOVER, <br />
                EXPLORE
            </Heading>
            <Flex
                w="100%"
                h="20rem"
                m="7rem 0 10rem 0"
                flexDir="column"
                border="solid 1rem"
                borderColor="yellow"
                borderRightWidth="0"
                align="center"
                justify="center"
            >
                <Heading fontSize="6xl" color="blue">
                    Ready for your next book?
                </Heading>
                <SearchForm
                    width={{ base: "45%", md: "50%" }}
                    margin="2rem 0 0"
                />
            </Flex>
        </Flex>
    );
}
