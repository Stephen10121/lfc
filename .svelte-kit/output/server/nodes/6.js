import * as server from '../entries/pages/services/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.CSaWqqse.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.1SLzRd8r.js","_app/immutable/chunks/entry.D_1wFTvR.js"];
export const stylesheets = ["_app/immutable/assets/6.0W-xdvlj.css","_app/immutable/assets/Toast.B0PVEGsX.css"];
export const fonts = [];
