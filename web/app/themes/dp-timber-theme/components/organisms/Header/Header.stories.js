import header from "./header.twig";
// import menuData from "./menus.yml";
import menuData from "./menus.json";

export default {
  title: "Organisms/Header",
  tags: ["autodocs"],
  argTypes: {
    siteTitle: { control: "text" },
    logoImage: {
      control: {
        type: "file",
        accept: ["image/*"],
      },
    },
    darkTheme: { control: "boolean" },
  },
  render: ({ ...args }) => {
    return header({ ...args });
  },
};

export const Default = {};

Default.args = {
  siteTitle: "Bootstrap",
  menuData: menuData.menu,
  logoImage: null,
  darkTheme: false,
};
