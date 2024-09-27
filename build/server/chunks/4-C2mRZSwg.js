import { s as sendForm } from './sendForm-D6csFFqo.js';
import 'resend';
import 'dotenv';

const actions = {
  default: async ({ request, url }) => {
    const contactClickOrigin = { "l": "Header", "s1": "Get a Free Quote Button" };
    const originClick = url.searchParams.get("r");
    const data = await request.formData();
    const email = data.get("email");
    const name = data.get("name");
    let desc = data.get("what");
    const whereFrom = data.get("whereFrom");
    if (!email || !name || !desc) {
      return { success: false };
    }
    if (originClick && Object.keys(contactClickOrigin).includes(originClick)) {
      desc += `<br><span>Clicked From: ${contactClickOrigin[originClick]}</span>`;
    } else {
      desc += "<br><span>Clicked From: Unknown</span>";
    }
    await sendForm(email, name, desc, whereFrom);
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CybDvPAq.js')).default;
const server_id = "src/routes/contact/+page.server.ts";
const imports = ["_app/immutable/nodes/4.Bvk7W7x_.js","_app/immutable/chunks/scheduler.BrMbbtoo.js","_app/immutable/chunks/index.POPc9Ok8.js","_app/immutable/chunks/Toast.1SLzRd8r.js","_app/immutable/chunks/entry.D_1wFTvR.js"];
const stylesheets = ["_app/immutable/assets/4.BfNqxoAm.css","_app/immutable/assets/ContactSection1.BqPN5iSl.css","_app/immutable/assets/Toast.B0PVEGsX.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-C2mRZSwg.js.map
