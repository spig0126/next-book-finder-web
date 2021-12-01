import { Flex, Image } from "@chakra-ui/react"

export default function BestSellerBookCard({book, main}) {
    return (
        <Flex h={() => !main && "80%"} alignItems="center" >
            <Image src={book.book_image} h={() => !main && "80%"} borderRadius="1rem" mx="1rem"/>
        </Flex>
    )
}