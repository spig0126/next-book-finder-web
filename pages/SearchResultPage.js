import BookFindList from "../src/components/BookFindList";
import SearchForm from "../src/components/SearchForm";
import useSearchBookData from "../src/library/useSearchBookData";
import { BsChevronLeft } from "react-icons/bs";

import { Flex, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function SearchResultPage() {
    const { isLoading, isError } = useSearchBookData();
    const router = useRouter();

    return (
        <Flex flexDir="column" w="100%">
            <Flex align="center" paddingLeft="5rem">
                <IconButton
                    icon={<BsChevronLeft size="l" />}
                    color="blue"
                    _focus={{ outline: "none" }}
                    _hover={{ color: "yellow" }}
                    onClick={() => router.push("/")}
                />
                <Spacer />
                <SearchForm width="20vw" margin="3rem 5rem" />
            </Flex>
            <BookFindList isLoading={isLoading} />
        </Flex>
    );
}
