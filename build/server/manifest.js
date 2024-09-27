const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon4.png","logo.png","reset.css","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.COpCzUwJ.js","app":"_app/immutable/entry/app.CqYMacNL.js","imports":["_app/immutable/entry/start.COpCzUwJ.js","_app/immutable/chunks/entry.D_1wFTvR.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/entry/app.CqYMacNL.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Cm-N7UdQ.js')),
			__memo(() => import('./chunks/1-BoW5aUYK.js')),
			__memo(() => import('./chunks/2-CJQVkSV8.js')),
			__memo(() => import('./chunks/3-KrxeznHA.js')),
			__memo(() => import('./chunks/4-C2mRZSwg.js')),
			__memo(() => import('./chunks/5-BsclYm07.js')),
			__memo(() => import('./chunks/6-Bd5XTcVp.js')),
			__memo(() => import('./chunks/7-B8AaLgXJ.js')),
			__memo(() => import('./chunks/8-BtTjPAOu.js')),
			__memo(() => import('./chunks/9-Co9hhQQl.js')),
			__memo(() => import('./chunks/10-eaaPbyS1.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/services/cedar",
				pattern: /^\/services\/cedar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/services/chain-link",
				pattern: /^\/services\/chain-link\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/services/custom",
				pattern: /^\/services\/custom\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/services/vinyl",
				pattern: /^\/services\/vinyl\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
