import { useState, useEffect } from "react";
import styled from "styled-components";
import useAxiosGet from "../library/useAxiosGet";

export default function Form({ APIData, setAPIData }) {
    const [searchKeyword, setsearchKeyword] = useState("");
    const [select, setSelect] = useState("");


    const handleChangeInput = (e) => {
        setsearchKeyword(e.target.value);
        // console.log(searchKeyword);
    };
    const handleChangeSelect = (e) => {
        setSelect(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { totalItems, bookArray } = useAxiosGet(searchKeyword, select);
    }

    return (
        <SearchForm onSubmit={onSubmit}>
            <select name="searchRange" required={true}>
                <option value="all">전체</option>
                <option value="title">제목</option>
                <option value="author">저자</option>
                <option value="publisher">출판사</option>
            </select>
            <Input
                placeholder="작가 또는 제목을 입력하세요"
                value={searchKeyword}
                onChange={handleChangeInput}
            ></Input>
            <Button>Search</Button>
        </SearchForm>
    );
}
const SearchForm = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
