import * as server from '../entries/pages/about/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.DTxHm020.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.BG_wTg-_.js","_app/immutable/chunks/entry.1i-siE8X.js","_app/immutable/chunks/Card.DCXW7vKL.js","_app/immutable/chunks/hammer.BwASxfr9.js","_app/immutable/chunks/dollar.Drm0QJZu.js","_app/immutable/chunks/clock.CTYpk4Xc.js"];
export const stylesheets = ["_app/immutable/assets/3.C7Zlq2LA.css","_app/immutable/assets/Toast.B0PVEGsX.css","_app/immutable/assets/Card.tzZEeOBw.css"];
export const fonts = [];
