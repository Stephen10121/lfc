import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Bvk7W7x_.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.1SLzRd8r.js","_app/immutable/chunks/entry.D_1wFTvR.js"];
export const stylesheets = ["_app/immutable/assets/4.BfNqxoAm.css","_app/immutable/assets/ContactSection1.BqPN5iSl.css","_app/immutable/assets/Toast.B0PVEGsX.css"];
export const fonts = [];
