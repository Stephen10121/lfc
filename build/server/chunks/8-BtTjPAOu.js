import { s as sendForm } from './sendForm-D6csFFqo.js';
import 'resend';
import 'dotenv';

const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const name = data.get("name");
    const desc = data.get("what");
    const whereFrom = data.get("whereFrom");
    if (!email || !name || !desc) {
      return { success: false };
    }
    await sendForm(email, name, desc, whereFrom);
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BW-BNlyG.js')).default;
const server_id = "src/routes/services/chain-link/+page.server.ts";
const imports = ["_app/immutable/nodes/8.DYqVO6n7.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.1SLzRd8r.js","_app/immutable/chunks/entry.D_1wFTvR.js","_app/immutable/chunks/Card.DCXW7vKL.js","_app/immutable/chunks/hammer.BwASxfr9.js","_app/immutable/chunks/dollar.Drm0QJZu.js","_app/immutable/chunks/fences.9ybcA_yr.js"];
const stylesheets = ["_app/immutable/assets/7.BFsmS2wp.css","_app/immutable/assets/Toast.B0PVEGsX.css","_app/immutable/assets/Card.tzZEeOBw.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-BtTjPAOu.js.map