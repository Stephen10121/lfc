<script lang="ts">
    import { Hammer, Shield, Trees } from "@lucide/svelte";
    import woodback from "@/assets/woodback.png";
</script>

<section class="py-xl max-w-360 px-6 lg:px-12 mx-auto">
    <div class="text-center mb-xl">
        <h2 class="font-headline-lg text-headline-lg text-on-background mb-sm">WHY CHOOSE WOOD?</h2>
        <div class="h-1 w-20 bg-primary mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="md:col-span-7 bg-white p-lg border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
                <Trees class="text-primary w-11 h-11 mb-md" />
                <h3 class="font-headline-md text-headline-md mb-md">Natural Durability</h3>
                <p class="font-body-md text-body-md text-on-surface-variant mb-md">Our Western Red Cedar and Redwood selections contain natural tannins and oils that resist rot, decay, and insect damage without the need for heavy chemical treatments.</p>
            </div>

            <div class="grid grid-cols-2 gap-md mt-lg">
                <div class="border-l-2 border-primary-container pl-md">
                    <span class="block font-headline-md text-headline-md text-primary">25+</span>
                    <span class="text-label-sm font-label-sm opacity-50 uppercase tracking-widest">Year Lifespan</span>
                </div>

                <div class="border-l-2 border-primary-container pl-md">
                    <span class="block font-headline-md text-headline-md text-primary">100%</span>
                    <span class="text-label-sm font-label-sm opacity-50 uppercase tracking-widest">Sustainably Sourced</span>
                </div>
            </div>
        </div>
        
        <div class="md:col-span-5 bg-[#f0eded] p-lg flex flex-col justify-center">
            <Hammer class="text-primary w-11 h-11 mb-md" />
            <h3 class="font-headline-md text-headline-md mb-sm text-on-background">Expert Installation</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">Precision post-setting and professional-grade fasteners ensure your fence remains straight and sturdy for decades.</p>
        </div>
        
        <div class="md:col-span-5 bg-primary p-lg text-white">
            <Shield class="w-11 h-11 mb-md" />
            <h3 class="font-headline-md text-headline-md mb-sm">Complete Privacy</h3>
            <p class="font-body-md text-body-md opacity-90">Choose between board-on-board or side-by-side configurations to create a secluded sanctuary in your backyard.</p>
        </div>
        
        <div class="md:col-span-7 h-75 relative">
            <img alt="Craftsmanship detail" class="w-full h-full object-cover" src={woodback} />
            
            <div class="absolute bottom-0 left-0 right-0 bg-white/90 p-md backdrop-blur-sm">
                <p class="font-label-md text-label-md text-on-background uppercase">Attention to every detail</p>
            </div>
        </div>
    </div>
</section>