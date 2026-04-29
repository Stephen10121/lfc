<script lang="ts">
    import { ArrowRight, Star } from "@lucide/svelte";
</script>

<section class="py-20 max-w-360 mx-auto px-6 lg:px-12">
    <div class="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
        <div>
            <h2 class="text-[48px] leading-[1.2] tracking-[-0.02em] font-bold mb-2">Trusted by Neighbors</h2>
            <p class="text-[#504537]">See why we have a 5/5 star average across over hundreds of local projects.</p>
        </div>

        <a href="/testimonials" class="text-primary font-bold text-label-md flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer">
            READ ALL REVIEWS
            <ArrowRight />
        </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white border border-primary/50 p-8 flex flex-col h-full">
            <div class="flex text-primary mb-6">
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
            </div>

            <p class="text-[16px] leading-[1.6] font-normal text-on-surface mb-8 grow">"Bogdan at LOCAL FENCE CO. did an amazing job with my fence project. He took a lot of pride in his work, was very personable and friendly, and went above and beyond to get my fence in shape. It was n..."</p>
            
            <div>
                <p class="font-bold ">Vladislav Shapoval</p>
                <p class="text-[12px] leading-[1.3] font-medium text-[#504537] uppercase">Residential Client</p>
            </div>
        </div>

        <div class="bg-white border border-primary/50 p-8 flex flex-col h-full">
            <div class="flex text-primary mb-6">
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
            </div>
    
            <p class="text-[16px] leading-[1.6] font-normal text-on-surface mb-8 grow">"This guy knows what he's doing! Did a great job installing driveway gates. Cleaned up after the project was complete. Honest, hard working, and great rates. I'll definitely have him back for installing metal iron..."</p>
    
            <div>
                <p class="font-bold ">D N S</p>
                <p class="text-[12px] leading-[1.3] font-medium text-[#504537] uppercase">Recurring Client</p>
            </div>
        </div>

        <div class="bg-white border border-primary/50 p-8 flex flex-col h-full">
            <div class="flex text-primary mb-6">
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
                <Star class="w-5 h-5" />
            </div>

            <p class="text-[16px] leading-[1.6] font-normal text-on-surface mb-8 grow">"Bogdon did a magnificent job on our backyard fence. Very articulate of his measurements and making sure that all the 4x4's, slats and the flat top was leveled."</p>
    
            <div>
                <p class="font-bold ">Joe Balmores</p>
                <p class="text-[12px] leading-[1.3] font-medium text-[#504537] uppercase">Homeowner</p>
            </div>
        </div>
    </div>
</section>