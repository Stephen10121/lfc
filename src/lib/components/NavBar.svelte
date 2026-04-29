<script lang="ts">
    import * as HoverCard from "$lib/components/ui/hover-card/index.js";
    import { mobileNavOpen, topHeaderStatus } from "@/store";
    import { slide } from "svelte/transition";
    import { ChevronDown, Menu, X } from "@lucide/svelte";
    import logo from "@/assets/logo.png";
    import { page } from "$app/stores";

    let location = $derived($page.url);

    let prevScrollPos = $state(0);

    function scrolling(event: any) {
        let currentScrollPos = event.target.scrollingElement.scrollTop;
        if(currentScrollPos > 80) {
            if (currentScrollPos < prevScrollPos) {
                topHeaderStatus.set("show");
            } else {
                topHeaderStatus.set("hide");
            }
        } else {
            topHeaderStatus.set("show");
        }
        prevScrollPos = currentScrollPos;
    }

    function closeMobileNav() {
        mobileNavOpen.set(false);
    }
</script>

<svelte:window on:scroll={scrolling} />

<header class="fixed top-0 w-full flex flex-col z-50 isolate {$topHeaderStatus}">
    <nav class="w-full border-b bg-white/95 backdrop-blur-md border-zinc-200 shadow-sm font-manrope antialiased tracking-tight transition-colors">
        <div class="flex justify-between items-center h-20 px-6 lg:px-12 max-w-360 mx-auto py-4">
            <a href="/" class="h-full">
                <img src={logo} alt="Local Fence Co Logo" class="h-full" />
            </a>
            <div class="hidden md:flex items-center gap-8">
                <HoverCard.Root>
                    <HoverCard.Trigger
                        href="/services"
                        class="text-zinc-600 flex gap-1 font-medium hover:text-zinc-900 {location.pathname === "/services" ? "selected" : ""}"
                    >
                        Services
                        <ChevronDown />
                    </HoverCard.Trigger>
                    <HoverCard.Content class="w-fit">
                        <div class="flex flex-col justify-between space-x-4">
                            <a class="text-zinc-600 w-fit font-medium hover:text-zinc-900 {location.pathname === "/services/wood" ? "selected" : ""}" href="/services/wood">Wood</a>
                            <a class="text-zinc-600 w-fit font-medium hover:text-zinc-900 {location.pathname === "/services/chain-link" ? "selected" : ""}" href="/services/chain-link">Chain Link</a>
                            <a class="text-zinc-600 w-fit font-medium hover:text-zinc-900 {location.pathname === "/services/vinyl" ? "selected" : ""}" href="/services/vinyl">Vinyl</a>
                        </div>
                    </HoverCard.Content>
                </HoverCard.Root>
                <a class="text-zinc-600 font-medium hover:text-zinc-900 {location.pathname === "/gallery" ? "selected" : ""}" href="/gallery">Gallery</a>
                <a class="text-zinc-600 font-medium hover:text-zinc-900 {location.pathname === "/contact" ? "selected" : ""}" href="/contact">Contact</a>
                <a class="hidden lg:block text-zinc-600 font-medium hover:text-zinc-900 {location.pathname === "/testimonials" ? "selected" : ""}" href="/testimonials">Testimonials</a>
                <a class="text-zinc-600 font-medium hover:text-zinc-900 {location.pathname === "/about" ? "selected" : ""}" href="/about">About</a>
            </div>
            <div class="flex items-center gap-4">
                <a href="tel:360-784-3128" class="hidden lg:block text-zinc-900 font-medium text-label-md px-4 py-2 hover:bg-zinc-50 transition-all duration-200 active:scale-95">CALL NOW</a>
                <a href="/contact?from=navbargaq" class="bg-primary hidden sm:block text-white font-medium text-label-md px-6 py-3 hover:bg-zinc-800 transition-all duration-200 active:scale-95">GET A QUOTE</a>
                <button class="block md:hidden p-2" onclick={() => mobileNavOpen.update((open) => !open)}>
                    {#if $mobileNavOpen}
                        <X class="w-6 h-6" />
                    {:else}
                        <Menu class="w-6 h-6" />
                    {/if}
                </button>
            </div>
        </div>
    </nav>
    
    <div class="py-3 px-2">
        {#if $mobileNavOpen}
            <div class="md:hidden bg-white/95" transition:slide>
                <ul class="flex flex-col py-2 px-3 gap-2">
                    <a onclick={closeMobileNav} class="text-zinc-600 w-fit font-medium hover:text-zinc-900 {location.pathname === "/" ? "selected" : ""}" href="/">Home</a>
                    <a onclick={closeMobileNav} class="text-zinc-600 w-fit font-medium hover:text-zinc-900 {location.pathname === "/services" ? "selected" : ""}" href="/services">Services</a>
                    <a onclick={closeMobileNav} class="text-zinc-600 w-fit font-medium hover:text-zinc-900 ml-5 {location.pathname === "/services/wood" ? "selected" : ""}" href="/services/wood">Wood</a>
                    <a onclick={closeMobileNav} class="text-zinc-600 w-fit font-medium hover:text-zinc-900 ml-5 {location.pathname === "/services/chain-link" ? "selected" : ""}" href="/services/chain-link">Chain Link</a>
                    <a onclick={closeMobileNav} class="text-zinc-600 w-fit font-medium hover:text-zinc-900 ml-5 {location.pathname === "/services/vinyl" ? "selected" : ""}" href="/services/vinyl">Vinyl</a>
                    <a onclick={closeMobileNav} class="text-zinc-600 w-fit font-medium hover:text-zinc-900 {location.pathname === "/gallery" ? "selected" : ""}" href="/gallery">Gallery</a>
                    <a onclick={closeMobileNav} class="text-zinc-600 w-fit font-medium hover:text-zinc-900 {location.pathname === "/contact" ? "selected" : ""}" href="/contact">Contact</a>
                    <a onclick={closeMobileNav} class="text-zinc-600 w-fit font-medium hover:text-zinc-900 {location.pathname === "/testimonials" ? "selected" : ""}" href="/testimonials">Testimonials</a>
                    <a onclick={closeMobileNav} class="text-zinc-600 w-fit font-medium hover:text-zinc-900 {location.pathname === "/about" ? "selected" : ""}" href="/about">About</a>
                </ul>
            </div>
        {/if}
    </div>
</header>

<style>
    header {
        transition: transform 0.25s linear 0.2s;
    }

    header.hide {
        transform: translate(0, -81px);
    }

    header.show {
        transform: translate(0, 0);
    }

    :global(a.selected) {
        color: oklch(55.5% 0.163 48.998);
        box-shadow: 0 1px #d79d40;
    }

    :global(a.selected:hover) {
        color: oklch(50.585% 0.13701 47.219);
    }
</style>