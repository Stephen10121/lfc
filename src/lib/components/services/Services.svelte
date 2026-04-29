<script lang="ts">
    import { ArrowRight, CircleCheck, Hammer, PencilRuler } from "@lucide/svelte";
</script>

<section class="py-20 px-6 lg:px-12 max-w-360 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Wood Fencing - Large Featured Card -->
        <div class="md:col-span-8 group relative overflow-hidden bg-white border border-primary/50 shadow-sm flex flex-col md:flex-row">
            <div class="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img alt="Wood Fence" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="close-up of vertical cedar wood fence panels showing natural grain and warm rustic textures in a sunny garden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKbA-jNWPnMlq54MCqn6-dKPU4Z5b1KqwuWiu0UH89fw6weq10J2bpw4WnXM3GSUxIntQkFA0udWXQI7EBNgczSgAZnl21dgQYNdnqzu3yYeMIQhw1VqYHLG-qUQTyQS6oxZ-nTZ4x5mSK4z9HvN2r_8QTdJLc2bbrhiLWLErwnXRcjjTafw7YDfQrQ7h9hNiRRvu9BE_VcvvARt-RXIHBhNLejwenVARMs7Pxr2tG-2ye1MVuYMWftfPwz4MlaH1gwpbfQLlnYnaJ"/>
            </div>
        
            <div class="md:w-1/2 p-12 flex flex-col justify-center">
                <span class="text-primary text-[14px] leading-[1.4] font-semibold uppercase tracking-widest mb-2">Traditional Craft</span>
                <h2 class="text-[32px] leading-tight font-bold text-12 text-on-surface mb-4">Wood Fencing</h2>
                <p class="text-body-md text-on-surface-variant mb-6">Timeless beauty meets structural integrity. Our wood fences are crafted from premium cedar and pressure-treated pine, offering a natural aesthetic that ages gracefully.</p>
                
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center gap-2 text-body-md text-on-surface">
                        <CircleCheck class="text-primary" />
                        Classic Privacy &amp; Picket Styles
                    </li>

                    <li class="flex items-center gap-2 text-body-md text-on-surface">
                        <CircleCheck class="text-primary" />
                        Sustainably Sourced Timber
                    </li>
                    
                    <li class="flex items-center gap-2 text-body-md text-on-surface">
                        <CircleCheck class="text-primary" />
                        Custom Decorative Post Caps
                    </li>
                </ul>

                <a href="/services/wood" class="w-fit px-8 py-4 bg-zinc-900 text-white font-bold text-label-md uppercase tracking-widest hover:bg-primary transition-colors">EXPLORE WOOD OPTIONS</a>
            </div>
        </div>

        <!-- Vinyl Fencing - Side Card -->
        <div class="md:col-span-4 group bg-white border border-primary/50 shadow-sm flex flex-col">
            <div class="h-48 overflow-hidden">
                <img alt="Vinyl Fence" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="modern clean white vinyl privacy fence along a manicured green lawn under bright blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDevfrF3-fWDtRiW0HNA7NyDGNWz9o2Rw1hNioXOmNwjsXmo4iLyDrLV7PUo4aL-Ci4TdaN-JT4Lj7R_JT-LlIG37PuwDR49ZHmdcArSZykHp7PoqhUzmY7TntqkLA7usc7ru0Uo7hUw0-bOWoCH1nS3qdbX-auz_u8Y7Bb0FRPjWxu_4gbEOtiz1brNj0dK_fEBfkxGB3rymgdWov4KpQpEFTo8OJH0MDfhcnn5bBtd9AzO_yI-9ZC3RXLsQetNjjS76OAQ8ikDUJ0"/>
            </div>

            <div class="p-md grow">
                <span class="text-primary text-[14px] leading-[1.4] font-semibold uppercase tracking-widest mb-2 block">Modern &amp; Durable</span>
                <h2 class="text-[24px] leading-[1.3] font-semibold text-headline-md text-on-surface mb-2">Vinyl Fencing</h2>
                <p class="text-body-md text-on-surface-variant mb-4">Virtually maintenance-free protection. Perfect for busy homeowners seeking a clean, contemporary look that never needs staining or painting.</p>
        
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="px-3 py-1 bg-[#f6f3f2] text-label-sm rounded-full">NO ROT</span>
                    <span class="px-3 py-1 bg-[#f6f3f2] text-label-sm rounded-full">UV RESISTANT</span>
                    <span class="px-3 py-1 bg-[#f6f3f2] text-label-sm rounded-full">LIFETIME</span>
                </div>
            </div>

            <div class="p-md border-t border-primary/50">
                <a class="flex items-center justify-between text-primary font-bold text-label-md uppercase tracking-widest group-hover:gap-4 transition-all" href="/services/vinyl">
                    VIEW VINYL STYLES
                    <ArrowRight />
                </a>
            </div>
        </div>

        <!-- Chain Link - Vertical Card -->
        <div class="md:col-span-4 group bg-white border border-primary/50 shadow-sm flex flex-col">
            <div class="h-48 overflow-hidden">
                <img alt="Chain Link" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="black vinyl coated chain link fence securing a professional sports court or commercial property" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1GA1eS6nDWqmzCqWqgQ_31O21JhBYCvll2AAtAvumd6tr4F9GP11SXCoASqSk5ScEImSYdz1x9ivgO94fe-fvx7U2AfCc5PqPBG-IjBUi3s-9CerYbpBPgffWno6oDAs45rr6ifWAb08WHsrvuA0QkcoyesC7nafcL7-gXWvb8WboMIx63ullxL1iI5-LTUealLI31sG3qZ4zdVykvLNRriFUwIQdQad7GA7KVbDtUSfHTMDbuuQHW-W8ruXKCOlaoWxMm1dtTsBF"/>
            </div>

            <div class="p-md grow">
                <span class="text-primary text-[14px] leading-[1.4] font-semibold uppercase tracking-widest mb-2 block">Security &amp; Value</span>
                <h2 class="text-[24px] leading-[1.3] font-semibold text-headline-md text-on-surface mb-2">Chain Link</h2>
                <p class="text-body-md text-on-surface-variant mb-4">Our most cost-effective security solution. Available in classic galvanized or sleek black vinyl coating for a more subtle profile.</p>
            </div>

            <div class="p-md border-t border-primary/50">
                <a class="flex items-center justify-between text-primary font-bold text-label-md uppercase tracking-widest" href="/services/chain-link">
                    EXPLORE SPECS
                    <ArrowRight />
                </a>
            </div>
        </div>

        <!-- Decking Services - Large Featured Card -->
        <div class="md:col-span-8 group relative overflow-hidden bg-white border border-primary/50 shadow-sm flex flex-col md:flex-row-reverse">
            <div class="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img alt="Decking" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="luxury multi-level composite deck with modern railing and outdoor furniture overlooking a scenic backyard landscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnVC2Gq1VC-vj7Z4dBUWLWq3J1RvSZIYdP2rU1SJEyZ4BEZT9FM8pon771GwzlE2Us1Qcg6AesA0sclRzS2CC-zhecpOoKg9hUAM35wwPlb4ZYcI6uxdX1QCCvKgwYU9xbN_oCOMa8_NcQSHjpbAEjRyuFgigDlkeNo8pyPGrpc0YPqfwj4fKWaVgWojZz-zV_uDTQWXP9gKJoxMRguGP_9KVB2q6fbDC2gfL1q80xsnNNo2fxcdej45MO040c1Qx5TqoiH0WDUKO4"/>
            </div>

            <div class="md:w-1/2 p-12 flex flex-col justify-center">
                <span class="text-primary text-[14px] leading-[1.4] font-semibold uppercase tracking-widest mb-2">Outdoor Living</span>
                <h2 class="text-[32px] leading-tight font-bold text-12 text-on-surface mb-4">Decking Services</h2>
                <p class="text-body-md text-on-surface-variant mb-6">Extend your home's footprint. We design and build custom decks using natural hardwoods or high-performance composite materials for the ultimate leisure space.</p>
        
                <div class="grid grid-cols-2 gap-4 mb-8">
                    <div class="p-4 bg-[#f6f3f2]">
                        <PencilRuler class="text-primary mb-2 block" />
                        <p class="text-label-md font-bold text-on-surface">Custom Design</p>
                    </div>

                    <div class="p-4 bg-[#f6f3f2]">
                        <Hammer class="text-primary mb-2 block" />
                        <p class="text-label-md font-bold text-on-surface">Pro Installation</p>
                    </div>
                </div>

                <a href="/contact" class="w-fit px-8 py-4 bg-primary text-white font-bold text-label-md uppercase tracking-widest hover:bg-zinc-900 transition-colors">START YOUR PROJECT</a>
            </div>
        </div>
    </div>
</section>