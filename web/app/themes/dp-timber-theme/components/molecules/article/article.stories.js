import article from "./article.twig";

export default {
	title: "Molecules/Article",
	tags: ['autodocs'],
	render: ({ ...args }) => {
		return article({ ...args })
	}
}

export const Article = {
	args: {
		title: "Generic"
	}
}
