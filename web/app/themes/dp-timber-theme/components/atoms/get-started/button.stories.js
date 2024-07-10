import button from "./button.twig";
import "./button.scss";

export default {
  title: "Atoms/Get Started",
  argTypes: {
    fill: { control: 'boolean' },
    text: { control: 'text' }
  },
  render: ({ ...args }) => {
    return button({ ...args });
  },
};

export const Default = {
  args: {
    fill: true,
    text: "Get Started",
    show_arrow: false,
  }
};
