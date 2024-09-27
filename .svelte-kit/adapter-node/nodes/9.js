import * as server from '../entries/pages/services/custom/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/custom/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/custom/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.L2y0hOwc.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.BG_wTg-_.js","_app/immutable/chunks/entry.1i-siE8X.js","_app/immutable/chunks/Card.DCXW7vKL.js","_app/immutable/chunks/fences.9ybcA_yr.js","_app/immutable/chunks/globe.T9GhiWHb.js","_app/immutable/chunks/dollar.Drm0QJZu.js"];
export const stylesheets = ["_app/immutable/assets/7.BFsmS2wp.css","_app/immutable/assets/Toast.B0PVEGsX.css","_app/immutable/assets/Card.tzZEeOBw.css"];
export const fonts = [];
