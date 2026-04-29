<script lang="ts">
    import { BadgeCheck, MapPin, Toolbox } from "@lucide/svelte";
</script>

<section class="py-xl bg-surface">
    <div class="container mx-auto px-8 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div class="p-lg border border-primary/50 bg-white flex flex-col items-start gap-md">
                <div class="w-12 h-12 flex items-center justify-center bg-primary/20 text-primary">
                    <Toolbox class="h-8 w-8" />
                </div>

                <h3 class="font-headline-md text-headline-md text-on-surface">Expert Craftsmanship</h3>
                <p class="font-body-md text-body-md text-zinc-500">Every post, rail, and picket is installed with surgical precision. We don't just build fences; we craft enduring boundaries.</p>
            </div>

            <div class="p-lg border border-primary/50 bg-white flex flex-col items-start gap-md">
                <div class="w-12 h-12 flex items-center justify-center bg-primary/20 text-primary">
                    <BadgeCheck class="h-8 w-8" />
                </div>

                <h3 class="font-headline-md text-headline-md text-on-surface">Professional Integrity</h3>
                <p class="font-body-md text-body-md text-zinc-500">Transparent pricing, honest timelines, and a promise to stand by our work long after the project is complete.</p>
            </div>

            <div class="p-lg border border-primary/50 bg-white flex flex-col items-start gap-md">
                <div class="w-12 h-12 flex items-center justify-center bg-primary/20 text-primary">
                    <MapPin class="h-8 w-8" />
                </div>

                <h3 class="font-headline-md text-headline-md text-on-surface">Local Roots</h3>
                <p class="font-body-md text-body-md text-zinc-500">We are neighbors serving neighbors. Our deep understanding of local terrain and climate ensures a lasting installation.</p>
            </div>
        </div>
    </div>
</section>