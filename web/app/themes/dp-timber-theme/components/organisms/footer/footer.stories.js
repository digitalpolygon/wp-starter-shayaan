import footers from "./footer.twig";
import "./footer.scss";
import "../../molecules/form/form.scss"
import "../../molecules/contact-info/contact-info.scss"
import "../../atoms/get-started/button.scss"
import { contactInfo } from "../../molecules/contact-info/contact-info.stories"

export default {
	title: "organisms/Footers",
	render: ({ ...args }) => {
		return footers({ ...args })
	}
}

export const Demo = {
	args: {
		...contactInfo.args,
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
