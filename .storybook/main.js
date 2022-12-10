const path = require("path");
module.exports = {
    stories: [
        "../components/**/*.mdx",
        "../pages/**/*.mdx",
        "../components/**/*.stories.@(js|jsx|ts|tsx)",
        "../pages/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    features: {
        emotionAlias: false,
    },
    docs: {
        docsPage: true,
    },
    refs: {
        "@chakra-ui/react": {
            disable: true,
        },
    },
};
