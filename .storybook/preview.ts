import { globalDecorators } from "./decorators";
import { themes } from "../themes";

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
            items: Object.keys(themes),
            showName: true,
            dynamicTitle: true,
        },
    },
};
