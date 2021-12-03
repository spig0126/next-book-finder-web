import { extendTheme, defaultTheme } from "@chakra-ui/react";
import { FaRegBell } from "react-icons/fa";
import { Fonts } from "./fonts";

const theme = extendTheme({
    ...defaultTheme,
    colors: {
        beige: "#f0f0f0",
        pink: "#e6494e",
        grey: "#3b3b3b",
        blue: "#002d4f",
        white: "#ffffff",
        yellow: "#fcdc35"
    },
    fonts: {
        heading: "Raleway",
        body: "Raleway",
    },
});

export default theme;
