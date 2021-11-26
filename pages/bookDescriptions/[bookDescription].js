import styled from "styled-components";
import { Wrap } from "@chakra-ui/react";
import { withRouter } from "next/router";
function bookDescription({ router: { query } }) {
    const book = JSON.parse(query.book);
    return <div>{book.description}</div>;
}
export default withRouter(bookDescription);
