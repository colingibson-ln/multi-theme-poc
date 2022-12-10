import {
    extendTheme,
    type ThemeConfig,
    type ThemeDirection,
} from "@chakra-ui/react";
import { components } from "./components";
import { foundations } from "./foundations";
import { semanticTokens } from "./semantic-tokens";
import { styles } from "./styles";

const direction: ThemeDirection = "ltr";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    cssVarPrefix: "base",
};

const belascoTheme = extendTheme({
    ...foundations,
    components,
    config,
    direction,
    semanticTokens,
    styles,
});

export default belascoTheme;
