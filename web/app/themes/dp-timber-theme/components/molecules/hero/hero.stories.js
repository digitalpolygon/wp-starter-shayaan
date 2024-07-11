import hero from "./hero.twig";
import "./hero.scss";

export default {
  title: "Molecules/Hero",
  tags: ["autodocs"],
  argsTypes: {
    bgImage: { control: "text" },
    h1: { control: "text" },
    subtitle: { control: "text" },
  },
  render: ({ ...args }) => {
    return hero({ ...args });
  },
};

export const Default = {};
Default.args = {
  bgImage: "https://html5up.net/uploads/demos/forty/images/banner.jpg",
  title: "Hi, my name is Forty",
  subtitle: "A RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP <br> AND RELEASED UNDER THE CREATIVE COMMONS."
};
