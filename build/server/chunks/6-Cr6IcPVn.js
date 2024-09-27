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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-uUk5OhmK.js')).default;
const server_id = "src/routes/services/+page.server.ts";
const imports = ["_app/immutable/nodes/6.p675E9xR.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.BG_wTg-_.js","_app/immutable/chunks/entry.1i-siE8X.js"];
const stylesheets = ["_app/immutable/assets/6.0W-xdvlj.css","_app/immutable/assets/Toast.B0PVEGsX.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-Cr6IcPVn.js.map
