import { Flex, Heading, Image } from "@chakra-ui/react"

import MainBackground from "../../public/images/MainBackground2.jpg";

export default function MainSection() {
    return (
        <Flex w="100%">
            <Heading
                fontColor="blue"
                fontSize="8xl"
                textAlign="left"
                minW="35rem"
                h="20rem" 
                m="7rem 2rem 2rem 5rem"
            >
                SEARCH, <br />DISCOVER, <br />EXPLORE
            </Heading>
            <Image
                src={MainBackground.src}
                h="25rem"
                minH="inherit"
                w="100%"
                objectFit="cover"
                mt="20"
            />
        </Flex>
    );
}