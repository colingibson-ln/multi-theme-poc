export const fonts = {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
};

export const fontSizes = {
    // based on typical browser default font size of 16px
    xs: "0.75rem", // 12px
    s: "0.875rem", // 14px
    m: "1rem", // 16px
    r: "1.125rem", // 18px
    l: "1.5rem", // 24px
    xl: "2rem", // 32px
};

export const lineHeights = {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
};

export const letterSpacings = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
};

export const fontWeights = {
    normal: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800,
};

const bodyStyles = {
    "body-xl": {
        fontFamily: fonts.body,
        fontSize: { base: "18px", lg: "20px" },
        fontWeight: "normal",
        lineHeight: "150%",
    },
    "body-lg": {
        fontFamily: fonts.body,
        fontSize: { base: "16px", lg: "18px" },
        fontWeight: "normal",
        lineHeight: "150%",
    },
    "body-md": {
        fontFamily: fonts.body,
        fontSize: { base: "14px", lg: "16px" },
        fontWeight: "normal",
        lineHeight: "150%",
    },
    "body-sm": {
        fontFamily: fonts.body,
        fontSize: { base: "12px", lg: "14px" },
        fontWeight: "normal",
        lineHeight: "150%",
    },
};

const headingStyles = {
    "heading-xl": {
        fontFamily: fonts.heading,
        fontSize: { base: "20px", md: "24px", lg: "32px" },
        lineHeight: "120%",
    },
    "heading-lg": {
        fontFamily: fonts.heading,
        fontSize: { base: "18px", md: "20px", lg: "24px" },

        lineHeight: "120%",
    },
    "heading-md": {
        fontFamily: fonts.heading,
        fontSize: { base: "16px", md: "18px", lg: "20px" },

        lineHeight: "120%",
    },
    "heading-sm": {
        fontFamily: fonts.heading,
        fontSize: { base: "14px", md: "16px", lg: "18px" },

        lineHeight: "120%",
    },
    "heading-xs": {
        fontFamily: fonts.heading,
        fontSize: { base: "12px", md: "14px", lg: "16px" },

        lineHeight: "120%",
    },
};

export const textStyles = {
    ...bodyStyles,
    ...headingStyles,
};
