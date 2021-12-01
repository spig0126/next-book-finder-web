import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme"

export default function App({ Component }) {
    return (
        <ChakraProvider theme={theme}>
            <Component />
        </ChakraProvider>
    );
}
