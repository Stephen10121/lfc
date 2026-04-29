<script lang="ts">
    import { Award, ShieldCheck, Timer } from "@lucide/svelte";
</script>

<section class="bg-surface-container-lowest py-20">
    <div class="max-w-360 mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row gap-12 items-end mb-12">
            <div class="md:w-1/2">
                <h2 class="text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-headline-xl text-on-surface mb-4">The <span class="text-primary">Gold</span> Standard</h2>
                <p class="text-12 text-on-surface-variant">We don't just build fences; we build landmarks of quality in our community. Every project is handled with surgical precision.</p>
            </div>

            <div class="md:w-1/2 flex md:justify-end">
                <div class="flex gap-6">
                    <div class="text-center">
                        <p class="text-12 text-[32px] leading-tight font-bold text-primary">10+</p>
                        <p class="text-label-sm uppercase tracking-widest text-secondary-foreground/50">Years Experience</p>
                    </div>

                    <div class="text-center">
                        <p class="text-12 text-[32px] leading-tight font-bold text-primary">5/5</p>
                        <p class="text-label-sm uppercase tracking-widest text-secondary-foreground/50">Google Rating</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-md bg-white border border-outline-variant">
                <div class="w-12 h-12 bg-primary flex items-center justify-center mb-6">
                    <Award class="text-black/50" />
                </div>

                <h3 class="text-[24px] leading-[1.3] font-semibold text-headline-md text-on-surface mb-4">Premium Materials</h3>
                <p class="text-body-md text-on-surface-variant">We source only the highest grade lumber and commercial-strength vinyl to ensure your investment stands the test of time.</p>
            </div>

            <div class="p-md bg-white border border-outline-variant">
                <div class="w-12 h-12 bg-primary flex items-center justify-center mb-6">
                    <ShieldCheck class="text-black/50" />
                </div>

                <h3 class="text-[24px] leading-[1.3] font-semibold text-headline-md text-on-surface mb-4">Licensed &amp; Insured</h3>
                <p class="text-body-md text-on-surface-variant">Total peace of mind with full liability coverage and expert installers who respect your property like their own.</p>
            </div>

            <div class="p-md bg-white border border-outline-variant">
                <div class="w-12 h-12 bg-primary flex items-center justify-center mb-6">
                    <Timer class="text-black/50" />
                </div>

                <h3 class="text-[24px] leading-[1.3] font-semibold text-headline-md text-on-surface mb-4">Swift Craftsmanship</h3>
                <p class="text-body-md text-on-surface-variant">We stand behind our craftsmanship. Expert fence installation delivered with unmatched efficiency and craftsmanship.</p>
            </div>
        </div>
    </div>
</section>