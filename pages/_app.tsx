import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import baseTheme from "../themes/base";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={baseTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
