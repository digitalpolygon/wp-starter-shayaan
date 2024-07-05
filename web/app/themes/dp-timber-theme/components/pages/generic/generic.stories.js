import generic from "./generic.twig";
import "../../molecules/tiles/tiles.scss";
import "../../molecules/hero/hero.scss";
import "../../organisms/footer/footer.scss";
import "../../atoms/get-started/button.scss";

import { Demo as globalFooter } from '../../organisms/footer/footer.stories';
import { Contact as globalContact } from '../../organisms/contact/contact.stories';
import { Header as globalHeader } from '../../organisms/head/header.stories';
import { Article as articles } from '../../molecules/article/article.stories';

export default {
	title: "Pages/Generic",
	tags: ['autodocs'],
	render: ({ ...args }) => {
		return generic({ ...args })
	}
}

export const Default = {
	args: {
		...globalHeader.args,
		...globalFooter.args,
		...globalContact.args,
		...articles.args
	}
}
