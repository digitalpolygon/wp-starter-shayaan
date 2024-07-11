import card from "./card.twig";
import "./card.storybook.scss";

export default {
  title: "Molecules/Card",
  tags: ["autodocs"],
  argsTypes: {
    cardHeader: { control: "text" },
    cardImage: { control: "text" },
    cardTitle: { control: "text" },
    cardDescription: { control: "text" },
    cardDate: { control: "date" },
  },
  render: ({ ...args }) => {
    return card({ ...args });
  },
};

export const Default = {};

Default.args = {
  cardHeader: "StoryBook Header",
  cardImage: "https://picsum.photos/seed/picsum/300/200",
  cardTitle: "Example Card Title",
  cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cardDate: new Date(),
};
