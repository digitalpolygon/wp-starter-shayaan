import icons from "./icons.twig";


export default {
	title: "Molecules/Icons",
	render: ({ ...args }) => {
		return icons({ ...args })
	}
}

export const Default = {}

Default.args = {
	icons: [
		{
			"iconClass": "bi-twitter-x",
			"label": "Twitter",
			"url": "#"
		},
		{
			"iconClass": "bi-facebook",
			"label": "Facebook",
			"url": "#"
		},
		{
			"iconClass": "bi-instagram",
			"label": "Instagram",
			"url": "#"
		},
		{
			"iconClass": "bi-github",
			"label": "GitHub",
			"url": "#"
		},
		{
			"iconClass": "bi-linkedin",
			"label": "LinkedIn",
			"url": "#"
		}
	]
}
