import styled from "styled-components";
import { Wrap } from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function bookDescription() {
    const router = useRouter();
    const {
        title,
        thumbnail,
        buyLink,
        description,
        authors,
        ratings,
        ratingsCount,
    } = router.query;
    console.log(authors);
    console.log(ratings);
    console.log(ratingsCount);
    return (
        <Grid templateColumns="2fr 3fr" w="100vw" h="100vh" justifyItems="flex-end" alignItems="center">
            <Flex bgColor="beige" w="50%" minW="50%" h="40%" minH="40%" alignItems="center" mr="10%">
                <Image
                    src={thumbnail}
                    h="80%"
                    mihH="80%"
                    w="50"
                    minW="50%"
                    mx="auto"
                    objectFit="cover"
                    boxShadow="base"
                />
                
            </Flex>
            <Flex justifySelf="flex-start" flexDir="column" w="80%">
                <Heading textAlign="left" fontSize="7xl" color="blue" >{title}</Heading>
                <Box w="40%" h="2px" bgColor="yellow" my="5%" />
                <Flex h="30vh" overflowY="scroll">{description}</Flex>
                <Button
                    mt="3rem"
                    w="5rem"
                    onClick={() => {
                        router.push(buyLink);
                    }}
                >
                    Buy
                </Button>
            </Flex>  
        </Grid>
    );
}