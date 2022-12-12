import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { Box, Container, HStack } from "@chakra-ui/layout";

import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/modal";
import { chakra, useTheme } from "@chakra-ui/system";
import * as React from "react";
import { ChangeEvent } from "react";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from "@chakra-ui/accordion";

import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "@chakra-ui/react";

const meta: Meta<typeof Accordion> = {
    title: "Example/Accordion",
    component: Accordion,
    parameters: {
        // layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const AllowToggle = () => {
    const theme = useTheme();
    console.log(theme);
    return (
        <Container maxW="container.xl">
            <Flex px={4} py={32} mx="auto">
                <Box
                    mx="auto"
                    w={{
                        lg: 8 / 12,
                        xl: 5 / 12,
                    }}
                >
                    <chakra.p
                        mb={2}
                        fontSize="xs"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        color="gray.400"
                        textTransform="uppercase"
                    >
                        For Developers
                    </chakra.p>
                    <chakra.h1
                        mb={3}
                        fontSize={{
                            base: "3xl",
                            md: "4xl",
                        }}
                        fontWeight="bold"
                        lineHeight="shorter"
                        color="gray.900"
                        _dark={{
                            color: "white",
                        }}
                    >
                        Focus on your apps
                    </chakra.h1>
                    <chakra.p
                        mb={5}
                        color="gray.500"
                        fontSize={{
                            md: "lg",
                        }}
                    >
                        Today every company needs apps to engage their customers
                        and run their businesses. Step up your ability to build,
                        manage, and deploy great apps at scale with us.
                    </chakra.p>
                    <HStack>
                        <Button
                            as="a"
                            w={{
                                base: "full",
                                sm: "auto",
                            }}
                            variant="solid"
                            colorScheme="teal"
                            size="lg"
                            mb={{
                                base: 2,
                                sm: 0,
                            }}
                            cursor="pointer"
                        >
                            Sign up for free
                        </Button>
                        <Button
                            as="a"
                            w={{
                                base: "full",
                                sm: "auto",
                            }}
                            mb={{
                                base: 2,
                                sm: 0,
                            }}
                            size="lg"
                            cursor="pointer"
                        >
                            Read our blog
                        </Button>
                    </HStack>
                </Box>
            </Flex>

            <HStack>
                <Button colorScheme="green">green</Button>
                <Button colorScheme="yellow">yellow</Button>
                <Button colorScheme="red">red</Button>
                <Button colorScheme="gray">gray</Button>
                <Button colorScheme="teal">teal</Button>
                <Button colorScheme="cyan">cyan</Button>
                <Button colorScheme="purple">purple</Button>
                <Button colorScheme="pink">pink</Button>
            </HStack>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <chakra.div flex="1" textAlign="left">
                                Section 1 title
                            </chakra.div>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <chakra.div flex="1" textAlign="left">
                                Section 2 title
                            </chakra.div>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Container>
    );
};
