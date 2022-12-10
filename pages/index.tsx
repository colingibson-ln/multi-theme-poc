import { Button, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <header>
            <Button
                variant="outline"
                colorScheme="blue"
                onClick={toggleColorMode}
            >
                Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </header>
    );
}
