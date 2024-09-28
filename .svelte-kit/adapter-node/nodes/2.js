import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CjQV1C5F.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.BnrSDFg2.js","_app/immutable/chunks/entry.DzBvDcEj.js","_app/immutable/chunks/ServicesCard.BUFn_0aR.js","_app/immutable/chunks/Card.DCXW7vKL.js"];
export const stylesheets = ["_app/immutable/assets/2.iyFfZpoU.css","_app/immutable/assets/Toast.B0PVEGsX.css","_app/immutable/assets/ServicesCard.DGJjgqwF.css","_app/immutable/assets/Card.tzZEeOBw.css"];
export const fonts = [];
