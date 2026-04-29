<script lang="ts">
    import chainPretty from "@/assets/chainPretty.jpg";
    import tennisCourt from "@/assets/tenniscourt.png";
    import chainlink from "@/assets/chainlink.jpg";
    import gateChain from "@/assets/gatechain.png";
    import { ArrowRight } from "@lucide/svelte";
</script>

<section class="py-xl">
    <div class="max-w-360 px-6 lg:px-12 mx-auto">
        <div class="flex flex-col md:flex-row gap-2 justify-between md:items-end mb-12">
            <div>
                <span class="font-label-md text-primary uppercase">Gallery</span>
                <h2 class="font-headline-lg uppercase">See some examples</h2>
            </div>

            <a class="font-label-md text-primary hover:underline flex items-center gap-2" href="/gallery">
                VIEW FULL GALLERY
                <ArrowRight />
            </a>
        </div>
    
        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-200">
            <div class="md:col-span-2 md:row-span-2 relative overflow-hidden group">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={chainlink} alt="Chain link example" />
                
                <div class="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent text-white">
                    <p class="font-label-sm">Residential Estate</p>
                    <p class="font-headline-md text-sm">Black Vinyl Privacy System</p>
                </div>
            </div>
    
            <div class="md:col-span-2 md:row-span-1 relative overflow-hidden group">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={chainPretty} alt="Chain link example" />
                
                <div class="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent text-white">
                    <p class="font-label-sm">Industrial Site</p>
                    <p class="font-headline-md text-sm">9-Gauge Security Barrier</p>
                </div>
            </div>
    
            <div class="md:col-span-1 md:row-span-1 relative overflow-hidden group">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={tennisCourt} alt="Chain link example" />
                
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent text-white">
                    <p class="font-headline-md text-xs uppercase">Sports Facilities</p>
                </div>
            </div>
    
            <div class="md:col-span-1 md:row-span-1 relative overflow-hidden group">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={gateChain} alt="Chain link example" />
                
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent text-white">
                    <p class="font-headline-md text-xs uppercase">Custom Gates</p>
                </div>
            </div>
        </div>
    </div>
</section>