import { Flex, Image, Text, Heading } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { bookDetailState } from "../states";
function BookCard({ book }) {
    const router = useRouter();
    const [bookDetail, setBookDetail] = useRecoilState(bookDetailState);

    return (
        <Flex
            flexDir="column"
            alignItems="center"
            h="100%"
            w="100%"
            p="0"
            mb="4rem"
            onClick={() => {
                setBookDetail(book);
                router.push({
                    pathname: `/bookDescriptions/${book.id}`,
                });
            }}
        >
            <Flex
                bgColor="beige"
                w="100%"
                minW="100%"
                h="70%"
                minH="70%"
                alignItems="center"
            >
                <Image
                    src={
                        book.volumeInfo &&
                        book.volumeInfo.imageLinks &&
                        book.volumeInfo.imageLinks.thumbnail
                    }
                    h="80%"
                    mihH="80%"
                    w="50"
                    minW="50%"
                    mx="auto"
                    objectFit="cover"
                    boxShadow="base"
                />
            </Flex>
            <Heading fontSize="xl" mt="1rem">
                {book.volumeInfo && book.volumeInfo.title}
            </Heading>
            <Flex
                flexDir="column"
                color="white"
                _hover={{ color: "blue", transitionDuration: "0.3s" }}
                w="100%"
                alignItems="left"
                pt="1rem"
            >
                <Text className="authors">
                    {book.volumeInfo && "by " + book.volumeInfo.authors}
                </Text>
                <Text className="publish">
                    {book.volumeInfo && book.volumeInfo.publisher}
                </Text>
                <Text className="publish">
                    {book.volumeInfo && book.volumeInfo.publishedDate}
                </Text>
            </Flex>
        </Flex>
    );
}
export default BookCard;
