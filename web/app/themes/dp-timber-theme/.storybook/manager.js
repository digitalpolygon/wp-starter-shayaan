import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",

    brandTitle: "My custom Storybook",
    brandUrl: "https://digitalpolygon.com",
    brandImage: "https://www.digitalpolygon.com/DigitalPolygon-logo.svg",
    brandTarget: "_self",

    //
    colorPrimary: "#3A10E5",
    colorSecondary: "#0a6aff",

    // UI
    appBg: "#ffffff",
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    appBorderColor: "#585C6D",
    appBorderRadius: 4,

    // Text colors
    textColor: "#10162F",
    textInverseColor: "#ffffff",

    // Toolbar default and active colors
    barTextColor: "#9E9E9E",
    barSelectedColor: "#585C6D",
    barHoverColor: "#585C6D",
    barBg: "#ffffff",

    // Form colors
    inputBg: "#ffffff",
    inputBorder: "#10162F",
    inputTextColor: "#10162F",
    inputBorderRadius: 2,
  }),
});