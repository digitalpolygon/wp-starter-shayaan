import card from "./card.twig";
import "./card.scss";

export default {
  title: "Molecule/Card",
  tags: ["autodocs"],
  argsTypes: {
    cardImage: { control: 'text'},
    cardTitle: { control: 'text'},
    cardDescription: { control: 'text'},
    cardDate: { control: 'date' },
  },
  render: ({ ...args }) => {
    return card({ ...args });
  },
};

export const Default = {};

Default.args = {
    cardImage: 'https://picsum.photos/seed/picsum/300/200',
    cardTitle: 'Example Card Title',
    cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cardDate: new Date()
};
