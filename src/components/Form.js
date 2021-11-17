import { useState, useEffect } from "react";
import styled from "styled-components";
import useAxiosGet from "../library/useAxiosGet";

export default function Form({ APIData, setAPIData }) {
    const [searchKeyword, setsearchKeyword] = useState("");
    const [fetchData, refetch] = useAxiosGet();

    const handleChange = (e) => {
        setsearchKeyword(e.target.value);
        // console.log(searchKeyword);
    };

    return (
        <SearchForm onSubmit={refetch("Elizabeth", "title")}>
            <select name="searchRange" required={true}>
                <option value="all">전체</option>
                <option value="title">제목</option>
                <option value="author">저자</option>
                <option value="publisher">출판사</option>
            </select>
            <Input
                placeholder="작가 또는 제목을 입력하세요"
                value={searchKeyword}
                onChange={handleChange}
            ></Input>
            <Button>Search</Button>
        </SearchForm>
    );
}
const SearchForm = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
