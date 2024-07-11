import form from "./form.twig";
import "./form.scss"
import "../../atoms/input/input.scss"
import { userEvent, within, expect } from '@storybook/test';

export default {
  title: "Molecules/Form",
  render: ({ ...args }) => {
    return form({ ...args });
  },
};

export const Default = {
  play: async ({ canvasElement }) => {
      
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('name'), 'Elon Musk');

    await userEvent.type(canvas.getByTestId('email'), 'email@musk.com');

    await userEvent.type(canvas.getByTestId('message'), 'Hello, my name is Elon Musk I wanted to enquire about the services, contact me back on my given Email Address');

    // await userEvent.click(canvasElement.querySelector('button') );
  }
};

