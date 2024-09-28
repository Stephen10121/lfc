import { s as sendForm } from './sendForm-D6csFFqo.js';
import 'resend';
import 'dotenv';

const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const name = data.get("name");
    let desc = data.get("what");
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

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ClSH1mBv.js')).default;
const server_id = "src/routes/gallery/+page.server.ts";
const imports = ["_app/immutable/nodes/5.DCXkNXa0.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.BnrSDFg2.js","_app/immutable/chunks/entry.DzBvDcEj.js","_app/immutable/chunks/ServicesCard.BUFn_0aR.js"];
const stylesheets = ["_app/immutable/assets/5.BmaMBdBf.css","_app/immutable/assets/ContactSection1.BqPN5iSl.css","_app/immutable/assets/Toast.B0PVEGsX.css","_app/immutable/assets/ServicesCard.DGJjgqwF.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-BFJTeAqK.js.map
