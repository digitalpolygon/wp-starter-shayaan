import header from "./header.twig";
import menuData from "./menus.json";
import "./header.scss"
import "./header.js";
import "../../atoms/get-started/button.stories.js"

export default {
  title: "Organisms/Header",
  argTypes: {
      home: { control: "boolean" },
  },
  render: ({ ...args }) => {
    return header({ ...args });
  },
};

export const Header = {};

Header.args = {
  menuData: menuData.menu,
  home: true,
};
