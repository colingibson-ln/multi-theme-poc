import { globalDecorators } from "./decorators";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = globalDecorators;

export const globalTypes = {
    colorMode: {
        name: "Color Mode",
        defaultValue: "light",
        toolbar: {
            items: [
                { title: "Light", value: "light" },
                { title: "Dark", value: "dark" },
            ],
            dynamicTitle: true,
        },
    },
    theme: {
        name: "Theme",
        description: "Global theme for components",
        defaultValue: "base",
        toolbar: {
            icon: "circlehollow",
            items: ["base", "belasco"],
            dynamicTitle: true,
        },
    },
};
