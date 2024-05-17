import { Resend } from "resend";

export async function sendForm(email: string, name: string, desc: string) {
    console.log({email, name, desc});
    return;
    const resend = new Resend(import.meta.env.VITE_RESEND_KEY);
    const { data, error } = await resend.emails.send({
        from: "contact@mail.thelocalfenceco.com",
        to: import.meta.env.VITE_EMAIL,
        subject: 'Website Contact Form',
        html:  `<h1>From: ${email}</h1><h2>Name: ${name}</h2><p>Description: ${desc}</p>`
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
}