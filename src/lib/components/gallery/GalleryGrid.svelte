<script lang="ts">
    import fence7 from "@/assets/fence7.webp";
    import whiteVinyl from "@/assets/white.jpg";
    import fence5 from "@/assets/fence5.webp";
    import woodback from "@/assets/woodback.png";
    import fence3 from "@/assets/fence3.webp";
    import fence8 from "@/assets/fence8.webp";
</script>

<section class="py-lg bg-surface-container-lowest">
    <div class="max-w-360 mx-auto px-6 lg:px-12">
        <!-- Bento Grid Gallery -->
        <div class="gallery-bento-grid">
            <!-- Large Feature Item -->
            <div class="col-span-12 md:col-span-8 row-span-2 group relative overflow-hidden bg-zinc-100 min-h-125">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Fence 7" src={fence7} />
                
                <div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span class="text-primary font-bold uppercase text-label-sm mb-2">Residential</span>
                    <h3 class="text-white font-headline-md text-headline-md">Side By Side cedar fence</h3>
                </div>
            </div>

            <!-- Vertical Item -->
            <div class="col-span-12 md:col-span-4 group relative overflow-hidden bg-zinc-100 min-h-75">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Cedar fences" src={woodback} />
                
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span class="text-white font-bold uppercase text-label-md border-b-2 border-primary">Cedar Fences</span>
                </div>
            </div>

            <!-- Square Item -->
            <div class="col-span-12 md:col-span-4 group relative overflow-hidden bg-zinc-100 min-h-75">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="White vinyl fence" src={whiteVinyl} />
                
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span class="text-white font-bold uppercase text-label-md border-b-2 border-primary">Vinyl Fences</span>
                </div>
            </div>

            <!-- Wide Item -->
            <div class="col-span-12 md:col-span-6 group relative overflow-hidden bg-zinc-100 min-h-87.5">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Fence 5" src={fence5} />
                
                <div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span class="text-primary font-bold uppercase text-label-sm mb-2">Residential</span>
                    <h3 class="text-white font-headline-md text-headline-md">House Cedar Perimeter</h3>
                </div>
            </div>

            <!-- Small Item -->
            <div class="col-span-12 md:col-span-3 group relative overflow-hidden bg-zinc-100 min-h-87.5">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Fence 3" src={fence3}/>
                
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
            </div>

            <!-- Small Item -->
            <div class="col-span-12 md:col-span-3 group relative overflow-hidden bg-zinc-100 min-h-87.5">
            <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Fence 8" src={fence8} />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            </div>
            </div>
        </div>
    </div>
</section>

<style>
    .gallery-bento-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 24px;
    }
</style>