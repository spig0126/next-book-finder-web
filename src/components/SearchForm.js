import { useState } from "react";
import useSearchBookData from "../library/useSearchBookData";
import {
    Input,
    Select,
    InputRightElement,
    IconButton,
    FormControl,
    Flex,
    useToast,
} from "@chakra-ui/react";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { useRouter } from "next/dist/client/router";
import { useResultContext } from "../context/context";
import { searchKeywordState, searchQueryState, pageState } from "../states";
import { useRecoilState } from "recoil";

export default function SearchForm({ width, margin }) {
    const [searchKeyword, setSearchKeyword] =
        useRecoilState(searchKeywordState);
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
    const [pageIndex, setPageIndex] = useRecoilState(pageState);
    const [searchRange, setSearchRange] = useState("all");
    const toast = useToast();
    const router = useRouter();

    const { initialQuery, setInitialQuery } = useResultContext();

    const handleChangeInput = (e) => {
        setSearchKeyword(e.target.value);
    };
    const handleChangeSelect = (e) => {
        setSearchRange(e.target.value);
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") search(e);
    };
    const showToast = () =>
        toast({
            title: "Input Error",
            description: "입력된 검색어가 없습니다. 다시 입력해주십시오.",
            status: "error",
            duration: 3000,
            isClosable: true,
            variant: "solid",
            position: "top",
        });

    const search = (e) => {
        e.preventDefault();
        if (searchKeyword === "") showToast();
        else {
            if (searchRange === "all") {
                setSearchQuery(`${searchKeyword}.replace(" ", "+")`);
            } else if (searchRange === "title") {
                setSearchQuery(`intitle:${searchKeyword}`);
            } else if (searchRange === "author") {
                setSearchQuery(`nauthor:${searchKeyword}`);
            } else if (searchRange === "publisher") {
                setSearchQuery(`inpublisher:${searchKeyword}`);
            }
            router.push("./SearchResultPage");
        }
        setPageIndex(0);
        router.push("./SearchResultPage");
    };
    setInitialQuery(searchKeyword);
    return (
        <FormControl onSubmit={search} w={width} margin={margin}>
            <Flex>
                <Select
                    name="searchRange"
                    onChange={handleChangeSelect}
                    required={true}
                    h="2.5rem"
                    variant="unstyled"
                    w="7rem"
                    focusBorderColor="none"
                    color="black"
                >
                    <option value="all" selected>
                        all
                    </option>
                    <option value="title">title</option>
                    <option value="author">author</option>
                    <option value="publisher">publisher</option>
                </Select>
                <Input
                    placeholder="search keywords, titles, authors, and publishers"
                    value={searchKeyword}
                    onChange={handleChangeInput}
                    onKeyPress={handleKeyPress}
                    h="2.5rem"
                    variant="outline"
                    color="black"
                    bgColor="white"
                    borderColor="blue"
                    _hover={{ borderColor: "darkYellow" }}
                    _focus={{ borderColor: "yellow" }}
                    borderRadius="1rem"
                ></Input>
                <InputRightElement>
                    <IconButton
                        icon={<SearchIcon />}
                        onClick={search}
                        h="2.5rem"
                        variant="ghost"
                        color="grey"
                        mr="1rem"
                    />
                </InputRightElement>
            </Flex>
        </FormControl>
    );
}
