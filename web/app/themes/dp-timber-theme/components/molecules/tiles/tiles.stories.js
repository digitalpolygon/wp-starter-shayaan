import tiles from "./tiles.twig";
import "./tiles.scss";

export default {
  title: "Molecules/Tiles",
  tags: ["autodocs"],
  argTypes: {},
  render: ({ articles = defaultArgs.articles }) => {
    return tiles({ articles });
  },
};

export const Default = {
  args: {
    articles: [
      {
        imageUrl: 'https://html5up.net/uploads/demos/forty/images/pic01.jpg',
        title: 'Aliquam',
        link: '#',
        description: 'Ipsum dolor sit amet',
      },
      {
        imageUrl: 'https://html5up.net/uploads/demos/forty/images/pic02.jpg',
        title: 'Tempus',
        link: '#',
        description: 'Feugiat amet tempus',
      },
      {
        imageUrl: 'https://html5up.net/uploads/demos/forty/images/pic03.jpg',
        title: 'Magna',
        link: '#',
        description: 'Lorem etiam nullam',
      },
      {
        imageUrl: 'https://html5up.net/uploads/demos/forty/images/pic04.jpg',
        title: 'Ipsum',
        link: '#',
        description: 'Nisl sed aliquam',
      },
      {
        imageUrl: 'https://html5up.net/uploads/demos/forty/images/pic05.jpg',
        title: 'Consequat',
        link: '#',
        description: 'Ipsum dolor sit amet',
      },
      {
        imageUrl: 'https://html5up.net/uploads/demos/forty/images/pic06.jpg',
        title: 'Etiam',
        link: '#',
        description: 'Feugiat amet tempus',
      },
    ],
  },
};
