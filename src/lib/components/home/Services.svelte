<script lang="ts">
    import { Fence, Hammer, ShieldBan, TreePine } from "@lucide/svelte";
    import chainlink from "@/assets/chainlink.jpg";
    import woodfence from "@/assets/woodfence.png";
    import vinylfence from "@/assets/vinyl.png";
    import gate from "@/assets/gate.png";
</script>

<section class="py-20 max-w-360 min-h-220 mx-auto px-6 lg:px-12">
    <div class="text-center mb-12">
        <h2 class="text-[24px] mb-4">Precision-Built Fencing Systems</h2>
        <div class="w-16 h-1 bg-primary mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Wood Fencing -->
        <div class="md:col-span-8 group relative overflow-hidden bg-white border border-outline-variant shadow-sm aspect-video md:aspect-auto">
            <img alt="Wood fence" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={woodfence}/>
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-12 flex flex-col justify-end">
                <div class="flex items-center gap-2 mb-2">
                    <TreePine class="text-primary" />
                    <span class="text-white text-[12px] leading-[1.3] font-medium tracking-widest uppercase">Premium Natural</span>
                </div>

                <h3 class="text-[24px] leading-[1.3] font-semibold text-white mb-2">Wood Fencing</h3>
                <p class="text-zinc-300 mb-6">Authentic cedar and redwood options tailored for privacy and traditional aesthetics.</p>
                <a href="/services/wood" class="w-fit border border-white text-white text-[12px] leading-[1.3] px-4 py-2 hover:bg-white hover:text-zinc-900 transition-colors uppercase font-bold">Explore Wood</a>
            </div>
        </div>

        <!-- Vinyl Fencing -->
        <div class="md:col-span-4 group relative overflow-hidden bg-white border border-outline-variant shadow-sm h-100">
            <img alt="Vinyl fence" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={vinylfence}/>
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-8 flex flex-col justify-end">
                <div class="flex items-center gap-2 mb-2">
                    <Hammer class="text-primary" />
                    <span class="text-white text-[12px] leading-[1.3] font-medium tracking-widest uppercase">Low Maintenance</span>
                </div>

                <h3 class="text-[24px] leading-[1.3] font-semibold text-white mb-2">Vinyl Systems</h3>
                <p class="text-zinc-300 mb-6">Durable, weather-resistant solutions that never need painting.</p>
                <a href="/services/vinyl" class="w-fit border border-white text-white text-[12px] leading-[1.3] px-4 py-2 hover:bg-white hover:text-zinc-900 transition-colors uppercase font-bold">Explore Vinyl</a>
            </div>
        </div>

        <!-- Chain Link -->
        <div class="md:col-span-4 group relative overflow-hidden bg-white border border-outline-variant shadow-sm h-100">
            <img alt="Chain link fence" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={chainlink} />
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-8 flex flex-col justify-end">
                <div class="flex items-center gap-2 mb-2">
                    <ShieldBan class="text-primary" />
                    <span class="text-white text-[12px] leading-[1.3] font-medium tracking-widest uppercase">Secure &amp; Durable</span>
                </div>
        
                <h3 class="text-[24px] leading-[1.3] font-semibold text-white mb-2">Chain Link</h3>
                <p class="text-zinc-300 mb-6">Cost-effective security for residential and commercial spaces.</p>
                <a href="/services/chain-link" class="w-fit border border-white text-white text-[12px] leading-[1.3] px-4 py-2 hover:bg-white hover:text-zinc-900 transition-colors uppercase font-bold">Details</a>
            </div>
        </div>

        <!-- Custom Gates -->
        <div class="md:col-span-8 group relative overflow-hidden bg-white border border-outline-variant shadow-sm">
            <img alt="" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={gate}/>
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-12 flex flex-col justify-end">
                <div class="flex items-center gap-2 mb-2">
                    <Fence class="text-primary" />
                    <span class="text-white text-[12px] leading-[1.3] font-medium tracking-widest uppercase">Custom Engineering</span>
                </div>

                <h3 class="text-[24px] leading-[1.3] font-semibold text-white mb-2">Ornamental &amp; Gates</h3>
                <p class="text-zinc-300 mb-6">Bespoke entryway solutions featuring wrought iron and automated access systems.</p>
                <a href="/gallery" class="w-fit border border-white text-white text-[12px] leading-[1.3] px-4 py-2 hover:bg-white hover:text-zinc-900 transition-colors uppercase font-bold">View Projects</a>
            </div>
        </div>
    </div>
</section>