<script lang="ts">
    import { PaintbrushVertical, Ruler, RulerDimensionLine } from "@lucide/svelte";
</script>

<section class="bg-[#e5e2e1] py-xl">
    <div class="max-w-360 px-6 lg:px-12 mx-auto">
        <h2 class="font-headline-lg text-center mb-16 uppercase tracking-tight">Technical Specifications</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div class="bg-white p-8 border border-outline-variant">
                <div class="flex justify-between items-center mb-6">
                    <h4 class="font-headline-md text-lg uppercase">Standard Gauge</h4>
                    <Ruler class="text-primary" />
                </div>

                <ul class="space-y-4 font-label-md text-on-surface-variant">
                    <li class="flex justify-between border-b border-neutral-100 pb-2"><span>Residential</span> <span class="text-on-surface">11.5 Gauge</span></li>
                    <li class="flex justify-between border-b border-neutral-100 pb-2"><span>Commercial</span> <span class="text-on-surface">9 Gauge</span></li>
                    <li class="flex justify-between border-b border-neutral-100 pb-2"><span>Industrial</span> <span class="text-on-surface">6 Gauge</span></li>
                </ul>
            </div>
    
            <div class="bg-white p-8 border border-outline-variant">
                <div class="flex justify-between items-center mb-6">
                    <h4 class="font-headline-md text-lg uppercase">Height Options</h4>
                    <RulerDimensionLine class="text-primary rotate-90" />
                </div>

                <ul class="space-y-4 font-label-md text-on-surface-variant">
                    <li class="flex justify-between border-b border-neutral-100 pb-2"><span>Backyard</span> <span class="text-on-surface">4' - 5'</span></li>
                    <li class="flex justify-between border-b border-neutral-100 pb-2"><span>Security</span> <span class="text-on-surface">6' - 8'</span></li>
                    <li class="flex justify-between border-b border-neutral-100 pb-2"><span>Sport Courts</span> <span class="text-on-surface">10' - 12'</span></li>
                </ul>
            </div>
    
            <div class="bg-white p-8 border border-outline-variant">
                <div class="flex justify-between items-center mb-6">
                    <h4 class="font-headline-md text-lg uppercase">Finish Types</h4>
                    <PaintbrushVertical class="text-primary" />
                </div>

                <ul class="space-y-4 font-label-md text-on-surface-variant">
                    <li class="flex justify-between border-b border-neutral-100 pb-2"><span>Silver</span> <span class="text-on-surface">Galvanized</span></li>
                    <li class="flex justify-between border-b border-neutral-100 pb-2"><span>Black</span> <span class="text-on-surface">Vinyl Coated</span></li>
                    <li class="flex justify-between border-b border-neutral-100 pb-2"><span>Green</span> <span class="text-on-surface">Vinyl Coated</span></li>
                </ul>
            </div>
        </div>
    </div>
</section>