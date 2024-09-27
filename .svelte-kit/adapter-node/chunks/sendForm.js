import { Resend } from "resend";
import { config } from "dotenv";
config();
async function sendForm(email, name, desc, whereFrom) {
  const resend = new Resend(process.env.RESEND_KEY);
  const { data, error } = await resend.emails.send({
    from: "contact@mail.thelocalfenceco.com",
    to: process.env.EMAIL,
    subject: "Website Contact Form",
    html: `<h1>From: ${email}</h1><h2>Name: ${name}</h2><p>Description: ${desc}</p><p>From: ${whereFrom ? whereFrom : "unknown"}</p>`
  });
  if (error) {
    return console.error({ error });
  }
  console.log({ data });
}
export {
  sendForm as s
};
