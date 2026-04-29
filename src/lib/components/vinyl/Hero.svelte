<script lang="ts">
    import white from "@/assets/white.jpg";
</script>

<section class="relative min-h-220 w-full flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img
            alt="High-quality cedar fence"
            class="w-full h-full object-cover"
            src={white}
            fetchpriority="high" loading="eager"
        />
        <div class="absolute inset-0 hero-content-gradient"></div>
    </div>

    <div class="relative z-10 max-w-360 mx-auto px-6 lg:px-12 w-full">
        <div class="max-w-3xl">
            <div class="flex items-center gap-3 mb-6">
                <span class="inline-block bg-primary text-white/80 font-medium px-3 py-1 font-label-md text-label-md mb-4">LIFETIME DURABILITY</span>
            </div>

            <h1 class="text-white max-w-2xl font-headline-xl text-headline-xl mb-6">Premium Vinyl Fencing for a Lifetime of Maintenance-Free Privacy.</h1>
            <p class="text-[18px] font-normal text-zinc-300 text-12 lg:text-xl mb-12 leading-relaxed">Elevate your property with the clean aesthetic of vinyl. No painting, no staining, no rotting, just enduring beauty that stays bright year after year.</p>
            
            <div class="flex flex-wrap gap-5">
                <a href="/contact?from=vinyl-hero" class="bg-primary text-white/90 font-medium font-manrope uppercase tracking-wider px-8 py-4 active:scale-95 transition-transform">FREE ESTIMATE</a>
            </div>
        </div>
    </div>
</section>