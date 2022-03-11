import { Flex } from "@chakra-ui/react";
import BestSellersList from "./BestSellersList";
import useFetchBestSellerData from "../../library/useFetchBestSellerData";

function BestSellers() {
    const { bestSellerData, isLoading, isError } = useFetchBestSellerData();

    return (
        <Flex flexDir="column" w="100%" alignItems="center">
            <Flex
                flexDir="column"
                w="100%"
                alignItems="center"
                bgColor="blue"
                py="5rem"
                mb="40rem"
            >
                <BestSellersList
                    genre="Fiction"
                    hlColor="white"
                    hoverColor="yellow"
                    data={bestSellerData.fictionBooks}
                    isLoading={isLoading}
                />
                <BestSellersList
                    genre="Nonfiction"
                    hlColor="white"
                    hoverColor="yellow"
                    data={bestSellerData.nonfictionBooks}
                    isLoading={isLoading}
                />
            </Flex>
            <Flex
                flexDir="column"
                w="100%"
                alignItems="center"
                bgColor="yellow"
                hoverColor="blue"
                h="80rem"
                py="5rem"
                mb="5rem"
            >
                <Flex flexDir="column" position="relative" top="-30rem">
                    <BestSellersList
                        genre="Young Adult's"
                        hlColor="blue"
                        hoverColor="white"
                        data={bestSellerData.youngAdultBooks}
                        isLoading={isLoading}
                    />
                    <BestSellersList
                        genre="Advice, How-To & Miscellaneous"
                        hlColor="blue"
                        hoverColor="white"
                        data={bestSellerData.adviceBooks}
                        isLoading={isLoading}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default BestSellers;
