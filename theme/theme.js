import {
    extendTheme,
    defaultTheme,
  } from "@chakra-ui/react";
  
  const theme = extendTheme({
    ...defaultTheme,
    colors: {
      beige: "#f4ecd5",
      pink: "#e6494e",
      grey: "#3b3b3b"
    },
  });
  
  export default theme;
  