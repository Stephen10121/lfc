import { s as sendForm } from "../../../chunks/sendForm.js";
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
export {
  actions
};
