import button from "./button.twig"; // Get HTML TWIG
import "./button.scss"; // Button Scss

export default {
  title: "Atoms/Get Started", // Get Started Name
  render: ({ ...args }) => {
    return button({ ...args });
  },
};

// I am not passing any Args for this Button
export const Default = {};
