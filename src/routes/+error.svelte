<script lang="ts">
    import fenceprison from "@/assets/fenceprison.png";
    import { ShieldCheck } from "@lucide/svelte";
    import fence404 from "@/assets/fence404.png";
    import { page } from '$app/state';
</script>

<svelte:head>
    <title>An error occured.</title>
</svelte:head>

<main class="min-h-[100] flex items-center justify-center py-xl px-margin">
    <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mt-[80px]">
        <!-- Visual Element (Bento-style layout) -->
        <div class="lg:col-span-6 grid grid-cols-2 gap-4 h-full min-h-100">
            <div class="relative overflow-hidden group">
                <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="404 pict" src={fence404}/>
                <div class="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div class="grid grid-rows-2 gap-4">
                <div class="bg-surface-container overflow-hidden">
                    <img class="w-full h-full object-cover" alt="404 pict" src={fenceprison}/>
                </div>
                <div class="bg-primary p-md flex flex-col justify-end">
                    <span class="text-white font-headline-xl opacity-20 select-none leading-none -mb-4">{page.status}</span>
                    <div class="w-12 h-1 bg-white mb-2"></div>
                    <p class="text-on-primary font-label-sm uppercase text-white tracking-widest">Uncharted Territory</p>
                </div>
            </div>
        </div>

        <!-- Content Section -->
        <div class="lg:col-span-6 flex flex-col items-start lg:pl-lg">
            <div class="flex items-center space-x-4 mb-sm">
                <span class="w-12 h-0.5 bg-primary"></span>
                <span class="font-label-md text-primary uppercase tracking-widest">Boundary Warning</span>
            </div>

            <h1 class="font-headline-xl text-on-background mb-md">
                {page.status} - {#if page.error}{page.error.message}{:else}Page Not Found{/if}
            </h1>

            <p class="font-body-lg text-zinc-500 mb-lg ">
                It looks like the fence you're looking for hasn't been built yet, or this page has moved beyond our boundaries.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a class="inline-block bg-primary text-white font-manrope font-bold text-sm uppercase tracking-widest px-8 py-4 text-center hover:opacity-90 transition-opacity border border-primary" href="/">
                    Return Home
                </a>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a class="inline-block border border-on-background text-black font-manrope font-bold text-sm uppercase tracking-widest px-8 py-4 text-center hover:bg-on-background" href="/services">
                        Our Services
                    </a>
                    <a class="inline-block border border-outline text-black font-manrope font-bold text-sm uppercase tracking-widest px-8 py-4 text-center hover:border-on-background" href="/gallery">
                        Project Gallery
                    </a>
                </div>
            </div>

            <div class="mt-xl pt-lg border-t border-outline-variant w-full">
                <div class="flex items-center space-x-6">
                    <div class="flex items-center space-x-2 text-secondary">
                        <ShieldCheck class="text-primary" />
                        <span class="font-label-sm text-zinc-500 uppercase">Certified Installers</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>