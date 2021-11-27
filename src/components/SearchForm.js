import { useState, useEffect } from "react";
import useAxiosGet from "../library/useSearchBookData";
import styled from "styled-components"
import { FormControl, Input, Button, Select } from "@chakra-ui/react"

export default function SearchForm() {
    //local input data 
    const [searchKeyword, setSearchKeyword] = useState("");
    const [searchRange, setSearchRange] = useState("all");

    //API request parameters
    const {isLoading, isError, data, setSearchQuery} = useAxiosGet("flower");

    const handleChangeInput = (e) => {
        setSearchKeyword(e.target.value);
    };
    const handleChangeSelect = (e) => {
        setSearchRange(e.target.value);
    };

    const search = (e) => {
        e.preventDefault();
        if (searchRange === "all") {
            setSearchQuery(`${searchKeyword}.replace(" ", "+")}`);
        }
        else if (searchRange === "title") {
            setSearchQuery(`intitle:${searchKeyword}`)
        }
        else if (searchRange === "author") {
            setSearchQuery(`nauthor:${searchKeyword}`)
        }
        else if (searchRange === "publisher") { 
            setSearchQuery(`inpublisher:${searchKeyword}`)
        }

        console.log(data);
        console.log("searchQuery: " + searchRange);
    }

    return (
        <StyledForm onSubmit={search}>
            <Select name="searchRange" onChange={handleChangeSelect} selected required={true}>
                <option value="all">전체</option>
                <option value="title">제목</option>
                <option value="author">저자</option>
                <option value="publisher">출판사</option>
            </Select>
            <Input
                placeholder="작가 또는 제목을 입력하세요"
                value={searchKeyword}
                onChange={handleChangeInput}
                m="100"
            ></Input>
            <Button>Search</Button>
        </StyledForm>
    );
}

const StyledForm = styled.form`
`
