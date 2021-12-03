import { useState } from "react";
import useAxiosGet from "../library/useSearchBookData";
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

export default function SearchForm({ width, margin }) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchRange, setSearchRange] = useState("all");
    const toast = useToast();
    const router = useRouter();

    const { isLoading, isError, setSearchQuery } = useAxiosGet("flower");

    const handleChangeInput = (e) => {
        setSearchKeyword(e.target.value);
    };
    const handleChangeSelect = (e) => {
        setSearchRange(e.target.value);
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") search(e);
    };
    const showToast = () => toast({
        title: "Input Error",
        description: "입력된 검색어가 없습니다. 다시 입력해주십시오.",
        status: "error",
        duration: 6000,
        isClosable: true,
        variant: "solid",
        position: "top"
    });

    const search = (e) => {
        e.preventDefault();
        if (searchKeyword === "") showToast();
        else {
            if (searchRange === "all") {
                setSearchQuery(`${searchKeyword}.replace(" ", "+")}`);
            } else if (searchRange === "title") {
                setSearchQuery(`intitle:${searchKeyword}`);
            } else if (searchRange === "author") {
                setSearchQuery(`nauthor:${searchKeyword}`);
            } else if (searchRange === "publisher") {
                setSearchQuery(`inpublisher:${searchKeyword}`);
            }
            router.push("./SearchResultPage");
        }
    };

    return (
        <FormControl onSubmit={search} w={width} m={margin}>
            <Flex>
                <Select
                    name="searchRange"
                    onChange={handleChangeSelect}
                    required={true}
                    h="3rem"
                    variant="unstyled"
                    w="6rem"
                    focusBorderColor="none"
                >
                    <option value="all" selected>
                        전체
                    </option>
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
                    borderColor="blue"
                    focusBorderColor="yellow"
                    borderRadius="1rem"
                ></Input>
                <InputRightElement>
                    <IconButton
                        icon={<SearchIcon />}
                        onClick={search}
                        h="3rem"
                        variant="ghost"
                        color="grey"
                        mr="1rem"
                    />
                </InputRightElement>
            </Flex>
        </FormControl>
    );
}
