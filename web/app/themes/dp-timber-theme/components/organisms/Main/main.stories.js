import main from "./main.twig";
import "./main.scss"

export default {
	title: "organisms/Main",
	tags: ['autodocs'],
	render: ({ ...args }) => {
		return main({ ...args })
	}
}

export const Default = {}
