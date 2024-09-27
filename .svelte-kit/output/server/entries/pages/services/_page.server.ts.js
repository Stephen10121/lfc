import { s as sendForm } from "../../../chunks/sendForm.js";
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
export {
  actions
};
