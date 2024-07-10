import Homepage from "./homepage.twig";
import "../../molecules/tiles/tiles.scss";
import "../../molecules/hero/hero.scss";
import "../../organisms/main/main.scss";
import "../../organisms/footer/footer.scss";
import "../../atoms/get-started/button.scss";

import { Demo as globalFooter } from '../../organisms/footer/footer.stories';
import { Contact as globalContact } from '../../organisms/contact/contact.stories';
import { Header as globalHeader } from '../../organisms/head/header.stories';

export default {
	title: "Pages/Homepage",
	render: ({ ...args }) => {
		return Homepage({ ...args })
	}
}

export const Default = {
	args: {
		...globalHeader.args,
		...globalFooter.args,
		...globalContact.args
	}
}
