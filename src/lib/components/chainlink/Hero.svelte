<script lang="ts">
    import chainPretty from "@/assets/chainPretty.jpg";
</script>

<section class="relative min-h-153.5 flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img class="w-full h-full object-cover" src={chainPretty} alt="Chain link hero"/>
        <div class="absolute inset-0 hero-gradient"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl">
        <h1 class="font-headline-xl text-white text-3xl md:text-7xl mb-6 uppercase">Uncompromising Security.<br/>Ultimate Versatility.</h1>
        <p class="font-body-lg text-neutral-200 mb-8 max-w-2xl mx-auto">Cost-effective chain link solutions for residential boundaries and commercial perimeters. Built to endure with professional craftsmanship.</p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/contact?interest=chainlink&from=chain-hero" class="bg-primary text-white px-8 py-4 font-manrope font-bold text-sm uppercase tracking-widest hover:bg-on-primary-container transition-all">Start Your Project</a>
        </div>
    </div>
</section>

<style>
    .hero-gradient {
        background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    }
</style>