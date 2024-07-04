import Homepage from "./homepage.twig";

export default {
	title: "Pages/Homepage",
	tags: ['autodocs'],
	render: ({ ...args }) => {
		return Homepage({ ...args })
	}
}

export const Default = {}
Default.args = {
	socialMediaIcons: [
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
