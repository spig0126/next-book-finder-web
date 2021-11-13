import { useState } from "react";
import styled from "styled-components";

export default function Form({ APIData, setAPIData }) {
  const [searchKeyword, setsearchKeyword] = useState("");

  const handleChange = (e) => {
    setsearchKeyword(e.target.value);
    console.log(searchKeyword);
  };

  const submitData = (e) => {
    e.preventDefault();
    callRequest();
  };
  const callRequest = () => {
   
  };
  const enterKeyPress = () => {
    if (window.event.keyCode === 13) {
      callRequest();
    }
  };

  return (
    <SearchForm onSubmit={submitData}>
      <select name="searchRange" required>
        <option value="all">전체</option>
        <option value="title">제목</option>
        <option value="author">저자</option>
        <option value="publisher">출판사</option>
      </select>
      <Input
        placeholder="작가 또는 제목을 입력하세요"
        value={searchKeyword}
        onChange={handleChange}
        onKeyPress={enterKeyPress}
      ></Input>
      <Button>Search</Button>
    </SearchForm>
  );
}
const SearchForm = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
