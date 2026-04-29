<script lang="ts">
    import { BadgeCheck, ClipboardCheck, Timer } from "@lucide/svelte";
    import fence7 from "@/assets/fence7.webp";
</script>

<section class="bg-[#f0eded] py-20">
    <div class="max-w-360 mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 class="text-[48px] leading-[1.2] tracking-[-0.02em] font-bold mb-8">The <span class="text-primary font-semibold">Gold</span> Standard</h2>
            <p class="text-[18px] leading-[1.6] font-normal text-[#504537] mb-12">We don't just install fences, we build the lasting framework for your home's security and curb appeal. Our process is rooted in decades of local expertise.</p>
            
            <div class="space-y-8">
                <div class="flex gap-6">
                    <div class="shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
                        <BadgeCheck class="text-white" />
                    </div>

                    <div>
                        <h4 class="text-[20px] mb-1">Licensed &amp; Fully Insured</h4>
                        <p class="text-[#504537]">Complete protection for your property and peace of mind through every phase.</p>
                    </div>
                </div>

                <div class="flex gap-6">
                    <div class="shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
                        <ClipboardCheck class="text-white" />
                    </div>

                    <div>
                        <h4 class="text-[20px] mb-1">Master Craftsmanship</h4>
                        <p class="text-[#504537]">Our installers are specialists, not general laborers, ensuring structural integrity.</p>
                    </div>
                </div>

                <div class="flex gap-6">
                    <div class="shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
                        <Timer class="text-white" />
                    </div>

                    <div>
                        <h4 class="text-[20px] mb-1">Swift Craftsmanship</h4>
                        <p class="text-[#504537]">Expert fence installation delivered with unmatched efficiency and craftsmanship.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative">
            <div class="aspect-square bg-zinc-200">
                <img alt="" class="w-full h-full object-cover shadow-xl" data-alt="Two professional fence installers accurately measuring and aligning a post in a residential setting." src={fence7}/>
            </div>

            <div class="absolute -bottom-8 -left-8 bg-zinc-900 p-8 text-white max-w-100 hidden md:block shadow-2xl">
                <p class="text-headline-md italic mb-4">"They did an amazing job, very affordable, very professional and the fence looks great!!"</p>
                <p class="text-[12px] leading-[1.3] font-bold tracking-widest text-primary uppercase">— Levi W., Homeowner</p>
            </div>
        </div>
    </div>
</section>