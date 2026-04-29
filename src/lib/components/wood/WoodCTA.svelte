<script lang="ts">
    import { Phone } from "@lucide/svelte";
</script>

<section class="bg-neutral-900 py-xl relative overflow-hidden">
    <div class="absolute right-0 top-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-20"></div>
    
    <div class="max-w-360 lg:px-12 mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <h2 class="font-headline-xl text-headline-xl text-white mb-md">READY TO BUILD?</h2>
        <p class="font-body-lg text-body-lg text-neutral-400 mb-xl max-w-2xl">Contact our local experts today for a free on-site consultation and estimate.</p>
        
        <div class="flex flex-col sm:flex-row gap-md w-full justify-center">
            <a href="/contact?from=wood-cta" class="bg-primary px-10 py-5 flex items-center justify-center text-on-primary font-manrope font-bold text-sm tracking-widest uppercase hover:bg-primary/80 transition-all">Request a Quote</a>
            
            <a href="tel:360-784-3128" class="flex items-center justify-center gap-md px-10 py-5 border border-neutral-700 text-white">
                <Phone class="text-primary" />
                <span class="font-headline-md text-headline-md">(360) 784-3128</span>
            </a>
        </div>
    </div>
</section>