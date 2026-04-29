<script lang="ts">
    import woodback from "@/assets/woodback.png";
    import { ArrowRight } from "@lucide/svelte";
    import fence5 from "@/assets/fence5.webp";
    import fence8 from "@/assets/fence8.webp";
    import fence7 from "@/assets/fence7.webp";
</script>

<section class="py-xl max-w-360 px-6 lg:px-12 mx-auto">
    <div class="flex justify-between md:items-center mb-xl flex-col gap-2 md:flex-row">
        <h2 class="font-headline-lg text-headline-lg text-on-background uppercase">Wood Project Gallery</h2>
        <a class="text-primary font-manrope font-bold text-sm tracking-widest uppercase flex items-center gap-xs" href="/gallery">
            View Full Gallery
            <ArrowRight />
        </a>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-md">
        <div class="aspect-square overflow-hidden bg-neutral-200">
            <img alt="Horizontal Slat" class="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" src={fence5} />
        </div>

        <div class="aspect-square overflow-hidden bg-neutral-200">
            <img alt="Cedar Gate" class="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" src={fence8} />
        </div>

        <div class="aspect-square overflow-hidden bg-neutral-200">
            <img alt="Shadowbox Fence" class="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" src={fence7} />
        </div>

        <div class="aspect-square overflow-hidden bg-neutral-200">
            <img alt="Lattice Top" class="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" src={woodback} />
        </div>
    </div>
</section>