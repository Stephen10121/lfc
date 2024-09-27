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
		client: {"start":"_app/immutable/entry/start.DmmsFxd0.js","app":"_app/immutable/entry/app.AliDit0q.js","imports":["_app/immutable/entry/start.DmmsFxd0.js","_app/immutable/chunks/entry.1i-siE8X.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/entry/app.AliDit0q.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BkFgnHWK.js')),
			__memo(() => import('./chunks/1-D2sHW1eW.js')),
			__memo(() => import('./chunks/2-8e-AIReV.js')),
			__memo(() => import('./chunks/3-DJSb3Ha-.js')),
			__memo(() => import('./chunks/4-Ce9Pe7k2.js')),
			__memo(() => import('./chunks/5-DraTsxH7.js')),
			__memo(() => import('./chunks/6-Cr6IcPVn.js')),
			__memo(() => import('./chunks/7-CUTfyv5t.js')),
			__memo(() => import('./chunks/8-BqNXDncd.js')),
			__memo(() => import('./chunks/9-BIqru6aU.js')),
			__memo(() => import('./chunks/10-BId7TcgR.js'))
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
