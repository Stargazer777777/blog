import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';

export default hopeTheme({
	hostname: '/blog',

	iconAssets: 'iconfont',

	logo: '/avatar.jpg',
	favicon: '/favicon.svg',

	repo: 'Stargazer777777/blog',

	docsDir: 'src',

	blog: {
		name: 'Stargazer',
		avatar: '/avatar.jpg',
		medias: {
			// Baidu: 'https://example.com',
			// BiliBili: 'https://example.com',
			// Bitbucket: 'https://example.com',
			// Dingding: 'https://example.com',
			// Discord: 'https://example.com',
			// Dribbble: 'https://example.com',
			Email: '1601778118@qq.com',
			// Evernote: 'https://example.com',
			// Facebook: 'https://example.com',
			// Flipboard: 'https://example.com',
			Gitee: 'https://gitee.com/stargazer777',
			GitHub: 'https://github.com/Stargazer777777',
			// Gitlab: 'https://example.com',
			// Gmail: 'mailto:info@example.com',
			// Instagram: 'https://example.com',
			// Lark: 'https://example.com',
			// Lines: 'https://example.com',
			// Linkedin: 'https://example.com',
			// Pinterest: 'https://example.com',
			// Pocket: 'https://example.com',
			// QQ: 'https://example.com',
			// Qzone: 'https://example.com',
			// Reddit: 'https://example.com',
			// Rss: 'https://example.com',
			// Steam: 'https://example.com',
			// Twitter: 'https://example.com',
			// Wechat: 'https://example.com',
			// Weibo: 'https://example.com',
			// Whatsapp: 'https://example.com',
			// Youtube: 'https://example.com',
			// Zhihu: 'https://example.com',
			// MrHope: ['https://mister-hope.com', MR_HOPE_AVATAR],
		},
	},

	locales: {
		/**
		 * Chinese locale config
		 */
		'/': {
			// navbar
			navbar: zhNavbar,

			// sidebar
			sidebar: zhSidebar,

			footer: 'Never think you have known everything.',

			displayFooter: true,

			blog: {
				description: '星空下的coder',
				intro: '/intro.html',
			},

			// page meta
			metaLocales: {
				editLink: '在 GitHub 上编辑此页',
			},
		},
		'/en/': {
			// navbar
			navbar: enNavbar,

			// sidebar
			sidebar: enSidebar,

			footer: 'Default footer',

			displayFooter: true,

			blog: {
				description: 'Coder beneath the starry sky',
				intro: '/en/intro.html',
			},

			metaLocales: {
				editLink: 'Edit this page on GitHub',
			},
		},
	},

	encrypt: {
		config: {
			// '/demo/encrypt.html': ['1234'],
			// '/en/demo/encrypt.html': ['1234'],
		},
	},

	plugins: {
		blog: true,

		// comment: {
		// 	// You should generate and use your own comment service
		// 	provider: 'Waline',
		// 	serverURL: 'https://waline-comment.vuejs.press',
		// },

		// all features are enabled for demo, only preserve features you need here
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			demo: true,
			echarts: true,
			figure: true,
			flowchart: true,
			gfm: true,
			imgLazyload: true,
			imgSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			playground: {
				presets: ['ts', 'vue'],
			},
			presentation: ['highlight', 'math', 'search', 'notes', 'zoom'],
			stylize: [
				{
					matcher: 'Recommended',
					replacer: ({ tag }) => {
						if (tag === 'em')
							return {
								tag: 'Badge',
								attrs: { type: 'tip' },
								content: 'Recommended',
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true,
		},

		// uncomment these if you want a PWA
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cachePic: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },
	},
});
