import styled from "styled-components";
import { Wrap } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { Button } from "@chakra-ui/button";
export default function bookDescription() {
    const router = useRouter();
    const { title, thumbnail, buyLink, description } = router.query;

    return (
        <Wrap spacing="0.3rem" align="center">
            <BookImage src={thumbnail} />
            <Description>{description}</Description>

            <Button
                onClick={() => {
                    router.push(buyLink);
                }}
            >
                Buy
            </Button>
        </Wrap>
    );
}

const Description = styled.div``;
const BookImage = styled.img``;
