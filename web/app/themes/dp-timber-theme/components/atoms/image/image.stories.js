import imageTemplate from "./image.twig";

export default {
  title: "Atoms/Image",
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    classes: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
};

const Template = ({ ...args }) => {
  return imageTemplate({...args});
};

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
  width: 150,
  height: 150,
};
