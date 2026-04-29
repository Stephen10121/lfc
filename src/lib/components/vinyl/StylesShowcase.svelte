<script lang="ts">
    import totalPrivacy from "@/assets/totalprivacyvinyl.png";
    import classicPicket from "@/assets/classicpicketvinyl.png";
    import ranchRail from "@/assets/ranchtrailvinyl.png";
</script>

<section class="bg-[#f0eded] py-xl">
    <div class="max-w-360 px-6 lg:px-12 mx-auto">
        <div class="text-center mb-lg">
            <h2 class="font-headline-lg text-headline-lg text-on-background">Explore Our Vinyl Styles</h2>
            <p class="font-body-md text-body-md text-on-surface-variant">From complete privacy to classic decorative accents.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div class="bg-white border border-outline-variant group">
                <div class="h-64 overflow-hidden">
                    <img alt="Privacy Vinyl Fence" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={totalPrivacy}/>
                </div>

                <div class="p-md">
                    <h4 class="font-headline-md text-headline-md mb-2">Total Privacy</h4>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-4">Interlocking tongue-and-groove boards provide a complete visual barrier for backyards.</p>
                </div>
            </div>

            <div class="bg-white border border-outline-variant group">
                <div class="h-64 overflow-hidden">
                    <img alt="Picket Vinyl Fence" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={classicPicket} />
                </div>

                <div class="p-md">
                    <h4 class="font-headline-md text-headline-md mb-2">Classic Picket</h4>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-4">The timeless look of a white picket fence without the worry of peeling paint or rot.</p>
                </div>
            </div>

            <div class="bg-white border border-outline-variant group">
                <div class="h-64 overflow-hidden">
                    <img alt="Ranch Rail Vinyl Fence" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={ranchRail} />
                </div>

                <div class="p-md">
                    <h4 class="font-headline-md text-headline-md mb-2">Ranch Rail</h4>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-4">Perfect for large perimeters or rural properties needing a clean, sturdy boundary.</p>
                </div>
            </div>
        </div>
    </div>
</section>