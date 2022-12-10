import { Decorator } from "@storybook/react";
import React, { useEffect } from "react";
import { ChakraProvider, ThemeProvider, useColorMode } from "@chakra-ui/react";
import { themes } from "../themes";

interface ColorModeProps {
    colorMode: "light" | "dark";
    children: JSX.Element;
}

function ColorMode(props: ColorModeProps) {
    const { setColorMode } = useColorMode();
    useEffect(() => {
        setColorMode(props.colorMode);
    }, [props.colorMode]);

    return props.children;
}

const withTheme: Decorator = (StoryFn, context) => {
    const selectedTheme = context.globals.theme ?? "base";
    const theme = themes[selectedTheme];
    return (
        <ChakraProvider theme={theme}>
            <ColorMode colorMode={context.globals.colorMode}>
                <StoryFn />
            </ColorMode>
        </ChakraProvider>
    );
};

export const globalDecorators = [withTheme];
