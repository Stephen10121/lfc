import { writable } from "svelte/store";

export const mobileNavOpen = writable(false);
export const topHeaderStatus = writable<"show" | "hide">("show");
export const turnstileWidgetId = writable("");