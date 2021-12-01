import { useState, useEffect } from "react";
import useAxiosGet from "../library/useSearchBookData";
import { Input, Select, InputRightElement, IconButton, FormControl, Flex } from "@chakra-ui/react";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { useRouter } from "next/dist/client/router";

export default function SearchForm() {
    //local input data
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchRange, setSearchRange] = useState("all");
    const router = useRouter();

    //API request parameters
    const { isLoading, isError, data, setSearchQuery } = useAxiosGet("flower");

    const handleChangeInput = (e) => {
        setSearchKeyword(e.target.value);
    };
    const handleChangeSelect = (e) => {
        setSearchRange(e.target.value);
    };
    const handleKeyPress = (e) => {
        if(e.key === "Enter") search(e);
    }

    const search = (e) => {
        e.preventDefault();
        if (searchRange === "all") {
            setSearchQuery(`${searchKeyword}.replace(" ", "+")}`);
        } else if (searchRange === "title") {
            setSearchQuery(`intitle:${searchKeyword}`);
        } else if (searchRange === "author") {
            setSearchQuery(`nauthor:${searchKeyword}`);
        } else if (searchRange === "publisher") {
            setSearchQuery(`inpublisher:${searchKeyword}`);
        }

        console.log(data);
        console.log("items: ", data.items);
        console.log("searchQuery: " + searchRange);

        router.push("./SearchResultPage")
    }

    return (
        <FormControl onSubmit={search} w={{ base: "70%", md: "50%"}} mx="auto">
            <Flex>
                <Select name="searchRange" onChange={handleChangeSelect} required={true} h="3rem" variant="unstyled" w="6rem" focusBorderColor="none">
                    <option value="all" selected>전체</option>
                    <option value="title">제목</option>
                    <option value="author">저자</option>
                    <option value="publisher">출판사</option>
                </Select>
                <Input
                    placeholder="작가 또는 제목을 입력하세요"
                    value={searchKeyword}
                    onChange={handleChangeInput}
                    onKeyPress={handleKeyPress}
                    h="3rem" 
                    variant="outline"
                    color="black"
                    bgColor="white"
                    borderColor="grey"
                    focusBorderColor="pink"
                    borderRadius="3rem"
                ></Input>
                <InputRightElement>
                    <IconButton icon={<SearchIcon />} onClick={search}  h="3rem" variant="ghost" color="grey" mr="1rem"/>
                </InputRightElement>
            </Flex>
        </FormControl>
    );
}
