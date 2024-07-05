import footers from "./footer.twig";
import "./footer.scss"

export default {
	title: "organisms/Footers",
	render: ({ ...args }) => {
		return footers({ ...args })
	}
}

export const Demo = {
	args: {
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
}
