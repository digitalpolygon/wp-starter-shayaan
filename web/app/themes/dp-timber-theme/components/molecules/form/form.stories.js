import form from "./form.twig";
import "./form.scss"
import "../../atoms/input/input.scss"

export default {
  title: "Molecules/Form",
  render: ({ ...args }) => {
    return form({ ...args });
  },
};

export const Default = {};
