<script lang="ts">
    import heroPic from "@/assets/fence8.webp";
</script>

<section class="relative min-h-220 w-full flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img
            alt="High-quality cedar fence"
            class="w-full h-full object-cover"
            data-alt="Close-up of a high-quality vertical cedar wood fence with precision joinery in a sun-drenched suburban backyard during golden hour."
            src={heroPic}
            fetchpriority="high" loading="eager"
        />
        <div class="absolute inset-0 hero-content-gradient"></div>
    </div>

    <div class="relative z-10 max-w-360 mx-auto px-6 lg:px-12 w-full">
        <div class="max-w-3xl">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-0.5 bg-primary"></div>
                <span class="text-white text-[12px] leading-[1.3] font-medium tracking-[0.2em] uppercase">Professional + Trust Building</span>
            </div>

            <h1 class="text-[48px] tracking-[-0.02em] text-white text-5xl lg:text-7xl mb-6 leading-[1.1]">Enduring Craftsmanship <br/>for Your Home.</h1>
            <p class="text-[18px] font-normal text-zinc-300 text-12 lg:text-xl mb-12 leading-relaxed">Defining property boundaries with precision and integrity. Premium fencing solutions installed by local experts to stand the test of time.</p>
            
            <div class="flex flex-wrap gap-5">
                <a href="/contact?from=homeHero" class="bg-primary text-white font-bold px-10 py-5 text-label-md hover:bg-surface-tint transition-all duration-300 uppercase tracking-widest shadow-lg">Start Your Project</a>
                <a href="/gallery" class="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold px-10 py-5 text-label-md hover:bg-white hover:text-zinc-900 transition-all duration-300 uppercase tracking-widest">Our Portfolio</a>
            </div>
        </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div class="flex flex-col items-center gap-2">
            <span class="text-white/60 text-[10px] tracking-widest uppercase">Scroll</span>
            <div class="w-px h-12 bg-linear-to-b from-white/60 to-transparent"></div>
        </div>
    </div>
</section>