import {
    Grid,
    Flex,
    Image,
    Heading,
    Button,
    Text,
    Divider,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { bookDetailState } from "../../src/states";

export default function bookDescription() {
    const router = useRouter();
    const bookDetail = useRecoilValue(bookDetailState);
    const imageLink = bookDetail.volumeInfo.imageLinks.thumbnail
        ? "https" +
          bookDetail.volumeInfo.imageLinks.thumbnail.slice(
              4,
              bookDetail.volumeInfo.imageLinks.thumbnail.indexOf("&")
          ) +
          "&printsec=frontcover&img=1&zoom=3&source=gbs_api"
        : bookDetail.volumeInfo.imageLinks.smallThumbnail;
    return (
        <Grid
            templateColumns="2fr 3fr"
            w="100vw"
            h="100vh"
            justifyItems="flex-end"
            alignItems="center"
        >
            <Flex bgColor="beige" w="100%" h="100%" alignItems="center">
                <Image
                    src={imageLink}
                    objectFit="cover"
                    boxShadow="base"
                    mx="auto"
                    w="70%"
                />
            </Flex>

            <Flex
                justifySelf="flex-start"
                color="blue"
                flexDir="column"
                w="80%"
                ml="10%"
            >
                <Heading textAlign="left" fontSize="6xl" color="blue">
                    {bookDetail.volumeInfo.title}
                </Heading>
                <Text textAlign="left" as="i" fontSize="2xl">
                    {bookDetail.volumeInfo.subtitle}
                </Text>
                <Divider bgColor="yellow" my="1rem" />
                <Flex color="darkYellow">
                    <Text>
                        {bookDetail.volumeInfo.categories &&
                            bookDetail.volumeInfo.categories.map(
                                (category) => "#" + category
                            )}
                    </Text>
                    {/* <Text>
                        {bookDetail.volumeInfo.authors &&
                            bookDetail.volumeInfo.authors.map(
                                (category, index) =>
                                    index !=
                                    bookDetail.volumeInfo.authors.length - 1
                                        ? category + ","
                                        : category
                            )}
                    </Text> */}
                </Flex>

                <Flex
                    h="30vh"
                    overflowY="scroll"
                    color="black"
                    my="3rem"
                    fontSize="1.5rem"
                >
                    {bookDetail.volumeInfo.description}
                </Flex>
                <Button
                    px="4rem"
                    w="5rem"
                    color="blue"
                    bgColor="yellow"
                    alignSelf="end"
                    onClick={() => {
                        router.push(bookDetail.saleInfo.buyLink);
                    }}
                >
                    Buy
                </Button>
            </Flex>
        </Grid>
    );
}
