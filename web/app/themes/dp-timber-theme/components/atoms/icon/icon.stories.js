import icons from "./icon.twig"; // Include HTML
import "./icon.scss" // Include SCSS

export default {
	title: "Atoms/Icon",
	render: ({ ...args }) => {
		return icons({ ...args })
	}
}

export const Default = {}

Default.args = {
	iconclass: "bi-facebook",
	iconname: "Storybook",
	url: "#"
}
