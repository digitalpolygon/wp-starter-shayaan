import input from "./input.twig";
import "./input.scss";

export default {
    title: "Atoms/Input",
    argTypes: {
        label: { control: 'text' },
        name: { control: 'text' },
        type: { control: 'text' },
    },
    render: ({ ...args }) => {
        return input({ ...args });
    },
};

export const Default = {
    args: {
        name: "text",
        type: "text",
        label: "Storybook Label"
    }
};
