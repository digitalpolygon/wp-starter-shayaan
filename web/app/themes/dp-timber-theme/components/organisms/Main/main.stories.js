import main from "./main.twig";

export default {
	title: "organisms/Main",
	tags: ['autodocs'],
	render: ({ ...args }) => {
		return main({ ...args })
	}
}

export const Default = {}
