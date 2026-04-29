<script lang="ts">
    import fencepretty from "@/assets/fencepretty.png";
    import fence7 from "@/assets/fence7.webp";
    import fence8 from "@/assets/fence8.webp";
    import white from "@/assets/white.jpg";
</script>

<section class="bg-surface-container-lowest py-xl">
    <div class="max-w-360 mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row justify-between items-end mb-lg gap-4">
            <div>
                <h2 class="font-headline-lg text-headline-lg uppercase text-on-background">Explore Our Work</h2>
                <p class="font-body-md text-on-surface-variant">See the difference professional craftsmanship makes in every detail.</p>
            </div>
            <a href="/gallery" class="border border-outline text-on-surface font-bold px-8 py-3 uppercase tracking-widest hover:bg-on-background hover:text-zinc-600 transition-all">View Gallery</a>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-75">
            <div class="relative group overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="pretty fence." src={fencepretty} />
            </div>
            <div class="relative group overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="a fence." src={white} />
            </div>
            <div class="relative group overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="a fence." src={fence7} />
            </div>
            <div class="relative group overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="a fence." src={fence8} />
            </div>
        </div>
    </div>
</section>