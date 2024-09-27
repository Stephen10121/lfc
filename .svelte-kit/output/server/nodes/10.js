import * as server from '../entries/pages/services/vinyl/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/vinyl/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/vinyl/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.CsI62x5o.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.1SLzRd8r.js","_app/immutable/chunks/entry.D_1wFTvR.js","_app/immutable/chunks/Card.DCXW7vKL.js","_app/immutable/chunks/fences.9ybcA_yr.js","_app/immutable/chunks/globe.T9GhiWHb.js"];
export const stylesheets = ["_app/immutable/assets/7.BFsmS2wp.css","_app/immutable/assets/Toast.B0PVEGsX.css","_app/immutable/assets/Card.tzZEeOBw.css"];
export const fonts = [];
