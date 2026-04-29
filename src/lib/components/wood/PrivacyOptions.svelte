<script lang="ts">
    import woodOnWood from "@/assets/woodonwood.jpg";
    import sidebyside from "@/assets/sidebyside.jpg";
</script>

<section class="bg-surface-container-low py-xl">
    <div class="max-w-360 px-6 lg:px-12 mx-auto">
        <div class="flex flex-col md:flex-row items-end mb-lg gap-md">
            <div>
                <h2 class="font-headline-lg text-headline-lg text-on-background mb-sm uppercase">Privacy &amp; Style Options</h2>
                <p class="font-body-md text-body-md text-on-surface-variant">We specialize in various configurations to meet your specific needs for airflow, visual privacy, and aesthetic preference.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-xl">
            <div class="flex flex-col">
                <div class="aspect-16/10 overflow-hidden mb-md">
                    <img alt="Board-on-Board" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src={woodOnWood} />
                </div>

                <div class="flex items-center gap-sm mb-sm">
                    <span class="bg-primary/80 px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider">Most Popular</span>
                    <h4 class="font-headline-md text-headline-md">Board-on-Board</h4>
                </div>

                <p class="font-body-md text-body-md text-on-surface-variant">The ultimate for privacy. Overlapping pickets ensure there are no gaps, even as the wood naturally shrinks over time. Provides a heavy, premium look on both sides.</p>
            </div>
            
            <div class="flex flex-col">
                <div class="aspect-16/10 overflow-hidden mb-md">
                    <img alt="Side-by-Side" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src={sidebyside} />
                </div>

                <div class="flex items-center gap-sm mb-sm">
                    <span class="bg-[#cecece] px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider">Classic Choice</span>
                    <h4 class="font-headline-md text-headline-md">Side-by-Side</h4>
                </div>
                
                <p class="font-body-md text-body-md text-on-surface-variant">A clean, traditional style where pickets are placed edge-to-edge. Perfect for defining property lines while allowing subtle airflow and a lighter visual profile.</p>
            </div>
        </div>
    </div>
</section>