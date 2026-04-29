<script lang="ts">
    import woodFence from "@/assets/fence3.webp";
</script>

<section class="relative min-h-150 flex items-center overflow-hidden py-10">
    <div class="absolute inset-0 z-0">
        <img alt="Wood Fence Hero" class="w-full h-full object-cover" src={woodFence}/>
        <div class="absolute inset-0 hero-overlay"></div>
    </div>

    <div class="container mx-auto max-w-360 px-6 lg:px-12 relative z-10">
        <div class="max-w-2xl">
            <span class="font-label-md text-label-md text-primary mb-sm block uppercase">Timeless Craftsmanship</span>
            <h1 class="font-headline-xl text-headline-xl text-white mb-md leading-tight">PREMIUM WOOD FENCING FOR SUSTAINABLE BEAUTY</h1>
            <p class="font-body-lg text-body-lg text-neutral-300 mb-lg">Enhance your property's value and security with the natural warmth of hand-selected cedar and redwood. Expertly installed to withstand the elements.</p>
            
            <div class="flex gap-md">
                <a href="/contact?interest=wood&from=wood-hero" class="bg-primary px-8 py-4 text-white font-manrope font-bold text-sm tracking-widest uppercase hover:bg-primary/80 transition-all active:scale-95">Request a Quote</a>
            </div>
        </div>
    </div>
</section>

<style>
    .hero-overlay {
        background: linear-gradient(to right, rgba(27, 27, 27, 0.9) 0%, rgba(27, 27, 27, 0.4) 100%);
    }
</style>