import { invalid } from "@sveltejs/kit";
import { form } from "$app/server";
import { config } from "dotenv";
import { Resend } from 'resend';
import * as v from "valibot";

config();

interface TurnstileResponse {
    success: boolean;
    "error-codes"?: string[];
    challenge_ts?: string;
    hostname?: string;
    action?: string;
}

async function verifyTurnstileToken(token: string): Promise<TurnstileResponse> {
    const SECRET_KEY = process.env["TURNSTILE_SECRET_KEY"];

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            secret: SECRET_KEY,
            response: token
        })
    });

    if (!response.ok) {
        return {
            success: false
        };
    }

    return (await response.json());
}

const ContactFormSchema = v.object({
    name: v.pipe(v.string(), v.nonEmpty("A name is required.")),
    phone: v.pipe(v.string(), v.nonEmpty("A phone is required.")),
    email: v.pipe(v.string(), v.nonEmpty("An email is required."), v.email()),
    location: v.pipe(v.string(), v.nonEmpty("A approximate location is required.")),
    fenceInterestedIn: v.optional(v.array(v.picklist(["cedar", "ornamental-iron", "vinyl-pvc", "chain-link"])), []),
    approximateFootage: v.pipe(v.string(), v.nonEmpty("Dimensions are required.")),
    message: v.pipe(v.string(), v.nonEmpty("A Project description is required.")),
    turnStileToken: v.string()
});

export const contactForm = form(ContactFormSchema, async (formData, issues) => {
    let verification: TurnstileResponse | undefined;
    try {
        verification = await verifyTurnstileToken(formData.turnStileToken);
    } catch(err) {
        invalid(issues.turnStileToken("Failed to send message. Try again later."));
    }

    if (!verification) invalid(issues.turnStileToken("Failed to send message. Try again later."));

    if (!verification.success) {
        if (verification["error-codes"]) {
            invalid(...verification["error-codes"].map((code) => issues.turnStileToken(code)))
        } else {
            invalid(issues.turnStileToken("Turnstile verification failed. Try again later."));
        }
    }

    const resend = new Resend(process.env["RESEND_KEY"]);

    try {
        await resend.emails.send({
            from: `${formData.name} <contact@mail.thelocalfenceco.com>`,
            to: [ 'stephengrzn@gmail.com' ],
            subject: `Website Contact Form from ${formData.name}`,
            replyTo: formData.email,
            html: `<h1>From: ${formData.email}</h1><h2>Name: ${formData.name}</h2><h2>Phone: ${formData.phone}</h2><h2>Project Location: ${formData.location}</h2><ul><p>Fence type interested in:</p>${formData.fenceInterestedIn.map((interest) => `<li>${interest}</li>`).join("")}</ul><p>Approximate footage: ${formData.approximateFootage}</p><p>Project Description: ${formData.message}</p>`,
        });
    } catch (err) {
        console.log(err);
        invalid(issues.turnStileToken("Failed to send project details. Try again later."));
    }
});