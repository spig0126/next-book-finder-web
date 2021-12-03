import BookFindList from "../src/components/BookFindList";
import SearchForm from "../src/components/SearchForm";

import { Flex, Spacer, Text } from "@chakra-ui/layout";

export default function SearchResultPage() {
    return (
        <Flex flexDir="column" w="100%">
            <Flex>
                <Spacer />
                <SearchForm width="30vw" margin="3rem 5rem" />
            </Flex>
            <BookFindList />
        </Flex>
    );
}
