import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { pageState } from "../states";
import {
    AiOutlineDoubleRight,
    AiOutlineDoubleLeft,
    AiOutlineRight,
    AiOutlineLeft,
} from "react-icons/ai";

function Paginator({ total }) {
    const [pageIndex, setPageIndex] = useRecoilState(pageState);
    const maxPageIndex = Math.ceil(total / 20) - 1;

    const moveToNextPage = () => {
        setPageIndex(pageIndex + 1);
    };
    const moveToEarlierPage = () => {
        setPageIndex(pageIndex - 1);
    };
    const moveToFirstPage = () => {
        setPageIndex(0);
    };
    const moveToLastPgae = () => {
        setPageIndex(maxPageIndex);
    };

    return (
        <>
            {total === undefined ? (
                <></>
            ) : (
                <Flex align="center">
                    <IconButton
                        icon={<AiOutlineDoubleLeft />}
                        disabled={pageIndex === 0}
                        onClick={moveToFirstPage}
                        _hover={{ color: "yellow" }}
                        _focus={{ border: "none" }}
                    />
                    <IconButton
                        icon={<AiOutlineLeft />}
                        disabled={pageIndex === 0}
                        onClick={moveToEarlierPage}
                        _hover={{ color: "yellow" }}
                        _focus={{ border: "none" }}
                    />
                    <Text color="blue">Page&ensp;</Text>
                    <Text fontWeight="bold" color="darkYellow">
                        {pageIndex + 1}
                    </Text>
                    <Text> &ensp; out of&ensp;</Text>

                    <Text fontWeight="bold">{maxPageIndex + 1}</Text>
                    <IconButton
                        icon={<AiOutlineRight />}
                        disabled={pageIndex === maxPageIndex}
                        onClick={moveToNextPage}
                        _hover={{ color: "yellow" }}
                        _focus={{ border: "none" }}
                    />
                    <IconButton
                        icon={<AiOutlineDoubleRight />}
                        disabled={pageIndex === maxPageIndex}
                        onClick={moveToLastPgae}
                        _hover={{ color: "yellow" }}
                        _focus={{ border: "none" }}
                    />
                </Flex>
            )}
        </>
    );
}

export default Paginator;
