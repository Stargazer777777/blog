import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
	'/',
	// "/demo/",
	{
		text: '笔记',
		icon: 'note',
		link: '/notebook/',
	},
	{
		text: '文章',
		icon: 'article',
		link: '/articles/',
		// prefix: "/posts/",
		// children: [],
	},
	// {
	//   text: "V2 文档",
	//   icon: "book",
	//   link: "https://theme-hope.vuejs.press/zh/",
	// },
]);
