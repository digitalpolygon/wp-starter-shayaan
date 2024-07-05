import createCTA from "./cta.twig";
import "../../atoms/get-started/button.scss"

export default {
  title: "Molecules/CTA",
  argsTypes: {
    title: { control: "text" },
    subtitle: { control: "text" }
  },
  render: ({ ...args }) => {
    return createCTA({ ...args });
  },
};

export const Default = {};
Default.args = {
  title: "Massa libero",
  subtitle: "Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.",
} 
