import {extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    //initial color theme chakra UI dark theme
    initialColorMode: 'dark'
}

const theme = extendTheme({config});

export default theme;