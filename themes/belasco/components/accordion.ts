import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import {
    createMultiStyleConfigHelpers,
    defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys);

const baseStyleContainer = defineStyle({
    pt: 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    _focusVisible: {
        outline: 0,
    },
    "&:last-of-type": {
        borderBottomWidth: 0,
    },
});

const baseStyleButton = defineStyle({
    // borderColor: "grey90",
    borderBottomWidth: "1px",
    // color: "grey70",
    // fontFamily: "alternate",
    fontWeight: 400,
    fontSize: "26px",
    textTransform: "uppercase",
    px: 0,
    pb: 1,
    _hover: {
        bg: "inherit",
    },
});

const baseStylePanel = defineStyle({
    px: 0,
});

const baseStyleIcon = defineStyle({
    height: "32px",
    width: "32px",
    // color: "grey50",
});

const baseStyle = definePartsStyle({
    container: baseStyleContainer,
    button: baseStyleButton,
    panel: baseStylePanel,
    icon: baseStyleIcon,
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
