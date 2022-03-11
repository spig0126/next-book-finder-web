import { extendTheme, defaultTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    ...defaultTheme,
    initialColorMode: "light",
    useSystemColorMode: false,
    colors: {
        beige: "#f0f0f0",
        pink: "#e6494e",
        grey: "#3b3b3b",
        blue: "#002d4f",
        white: "#ffffff",
        yellow: "#fcdc35",
        darkYellow: "#ffa600",
    },
    fonts: {
        heading: "Raleway",
        body: "Raleway",
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode("white", "white"),
            },
        }),
    },
});

export default theme;
