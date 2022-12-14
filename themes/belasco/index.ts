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
    isDark: false, // Overwritten in Object.assign
    // colors: {}, // Overwritten in Object.assign
    ...foundations,
    components,
    config,
    direction,
    semanticTokens,
    styles,
});

export default belascoTheme;

// export const lightTheme = Object.assign(
//     {},
//     theme,
//     { isDark: false },
//     { colors: foundations.colors.lightThemeColors }
// );
// export const darkTheme = Object.assign(
//     {},
//     theme,
//     { isDark: true },
//     { colors: foundations.colors.darkThemeColors }
// );
