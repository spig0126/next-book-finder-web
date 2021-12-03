import { extendTheme, defaultTheme } from "@chakra-ui/react";
import { FaRegBell } from "react-icons/fa";
import { Fonts } from "./fonts";

const theme = extendTheme({
    ...defaultTheme,
    colors: {
        beige: "#f4ecd5",
        pink: "#e6494e",
        grey: "#3b3b3b",
        blue: "#002d4f",
        white: "#ffffff",
        yellow: "#ffd500"
    },
    fonts: {
        heading: "Raleway",
        body: "Raleway",
    },
});

export default theme;
