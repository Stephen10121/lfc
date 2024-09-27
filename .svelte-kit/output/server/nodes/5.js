import * as server from '../entries/pages/gallery/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/gallery/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CdhXf0r2.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.BG_wTg-_.js","_app/immutable/chunks/entry.1i-siE8X.js","_app/immutable/chunks/ServicesCard.BUFn_0aR.js"];
export const stylesheets = ["_app/immutable/assets/5.BmaMBdBf.css","_app/immutable/assets/ContactSection1.BqPN5iSl.css","_app/immutable/assets/Toast.B0PVEGsX.css","_app/immutable/assets/ServicesCard.DGJjgqwF.css"];
export const fonts = [];
