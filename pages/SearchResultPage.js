import BookFindList from "../src/components/BookFindList";
import SearchForm from "../src/components/SearchForm";

import { Box } from "@chakra-ui/layout";

export default function SearchResultPage() {
    return (
        <Box mt="5rem">
            <SearchForm />
            <BookFindList />
        </Box>
    );
}
