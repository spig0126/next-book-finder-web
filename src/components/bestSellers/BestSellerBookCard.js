import { Flex, Image, Text } from "@chakra-ui/react";

export default function BestSellerBookCard({ book, color }) {
    return (
        <Flex flexDir="column" w="100%" h="100%">
            <Image
                src={book.book_image}
                objectFit="fill"
                w="100%"
                maxW="100%"
                h="80%"
                minH="80%"
                borderRadius="0.5rem"
            />
            <Text fontWeight="bold" color={color} mt="1rem">
                {book.title}
            </Text>
            <Text color={color}>{book.author}</Text>
        </Flex>
    );
}
