import { sendForm } from '$lib/sendForm';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request, url }) => {
        const contactClickOrigin = {"l": "Header", "s1": "Get a Free Quote Button"}
        const originClick = url.searchParams.get('r');
        const data = await request.formData();
        const email = data.get("email") as string | null;
        const name = data.get("name") as string | null;
        let desc = data.get("what") as string | null;
        const whereFrom = data.get("whereFrom") as string | null;

        if (!email || !name || !desc) {
            return { success: false }
        }

        if (originClick && Object.keys(contactClickOrigin).includes(originClick)) {
            desc += `<br><span>Clicked From: ${contactClickOrigin[originClick as keyof typeof contactClickOrigin]}</span>`;
        } else {
            desc += "<br><span>Clicked From: Unknown</span>";
        }

        await sendForm(email, name, desc, whereFrom);

        return { success: true }
	},
} satisfies Actions;