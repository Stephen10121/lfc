<script lang="ts">
    import { BadgeCheck, Palette, ShieldBan } from "@lucide/svelte";
</script>

<section class="py-xl max-w-360 px-6 lg:px-12 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="md:col-span-8 bg-[#f0eded] p-sm md:p-lg flex flex-col justify-between">
            <div>
                <span class="font-label-md text-primary uppercase mb-4 block">Engineered for Performance</span>
                <h2 class="font-headline-lg text-on-surface mb-6">Why Chain Link?</h2>
                <p class="font-body-md opacity-70">Our chain link systems aren't just barriers; they are precision-engineered security solutions. From residential yards to high-security industrial sites, we provide materials that resist corrosion and stand the test of time.</p>
            </div>

            <div class="grid grid-cols-2 gap-md mt-lg">
                <div class="flex items-start gap-4 flex-col sm:flex-row">
                    <BadgeCheck class="text-primary" />
                    
                    <div>
                        <h4 class="font-headline-md text-sm uppercase">Galvanized Steel</h4>
                        <p class="text-xs text-on-surface-variant">Hot-dipped for maximum rust resistance.</p>
                    </div>
                </div>

                <div class="flex items-start gap-4 flex-col sm:flex-row">
                    <Palette class="text-primary" />
                    <div>
                        <h4 class="font-headline-md text-sm uppercase">Vinyl Coated</h4>
                        <p class="text-xs text-on-surface-variant">Black and green finishes for aesthetic integration.</p>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="md:col-span-4 bg-primary p-lg text-white flex flex-col justify-center items-center text-center">
            <ShieldBan class="w-11 h-11 mb-2" />

            <h3 class="font-headline-md mb-2">Commercial Grade</h3>
            <p class="font-body-md mb-6">Heavy-duty 9-gauge options for maximum perimeter protection.</p>

            <div class="border-t border-primary-fixed-dim pt-6">
                <p class="font-label-md">TRUSTED BY LOCAL MUNICIPALITIES</p>
            </div>
        </div>
    </div>
</section>