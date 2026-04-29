<script lang="ts">
    import { BadgeCheck, BrushCleaning, CircleCheck, Hammer } from "@lucide/svelte";
</script>

<section class="py-xl max-w-360 px-6 lg:px-12 mx-auto">
    <div class="mb-lg">
        <h2 class="font-headline-lg text-headline-lg text-on-background mb-4">Engineered for Excellence</h2>
        <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">Our vinyl solutions are designed to withstand the elements while providing a sleek, modern finish to your home’s perimeter.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div class="md:col-span-2 bg-white border border-primary/50 p-md flex flex-col md:flex-row gap-8 items-center">
            <div class="flex-1">
                <BrushCleaning class="w-11 h-11 text-primary mb-8" />
                <h3 class="font-headline-md text-headline-md mb-2">Zero Maintenance Required</h3>
                <p class="font-body-md text-body-md opacity-70">Forget the sander and the brush. Our premium vinyl requires only an occasional rinse with a garden hose to look brand new for decades.</p>
            </div>

            <div class="flex-1 w-full h-48 md:h-full bg-surface-container overflow-hidden">
                <img alt="Vinyl Texture" class="w-full h-full object-cover" data-alt="Close-up of a high-quality white vinyl fence post reflecting soft sunlight, showcasing its smooth, clean texture and durable finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_wyPiyDOccGIJ-15c44SasXJuKNUAjN8DrRp5JX1dtS8oKJTjDseNXKl1rnquf5LfYSyZeg0NmW7YNcMNcteRo8HbZJwrL8SiOCMiWay7Ju-EJ8VPmJU33n1OSwRyrGY05CVD6zNsObFNHS-Hulh4LeXPs_DUl5JoumJyQw2RgR1zFJ5MgWI-E1M6BxI-zD8UMcFB5QU71JKq-c7dsqZfkg2KZVdjIxLICYzWfpE6FxUSVwEjBgG9qwQOjHDmlt2pyxRy7uwEg8zN"/>
            </div>
        </div>

        <div class="bg-primary text-on-primary-container p-md flex flex-col">
            <BadgeCheck class="w-8 h-8 text-white mb-8" />
            <h3 class="font-headline-md text-headline-md opacity-60 mb-2">Lifetime Longevity</h3>
            <p class="font-body-md text-body-md opacity-50">UV-resistant materials ensure that your fence will never fade, yellow, or crack, even in the harshest seasonal conditions.</p>
            
            <div class="mt-auto pt-8 flex items-baseline gap-2 opacity-60">
                <span class="text-4xl font-black">25+</span>
                <span class="font-label-md uppercase">Year Lifespan</span>
            </div>
        </div>

        <div class="bg-white border border-primary/50 p-md">
            <Hammer class="w-11 h-11 text-primary mb-4" />
            <h3 class="font-headline-md text-headline-md mb-2">Internal Reinforcement</h3>
            <p class="font-body-md text-body-md opacity-70">Unlike thin DIY kits, our professional-grade vinyl features reinforced bottom rails for maximum structural stability.</p>
        </div>

        <div class="md:col-span-2 bg-neutral-900 text-white p-md flex flex-col justify-center">
            <h3 class="font-headline-md text-headline-md mb-4">Engineered to Your Lifestyle</h3>
            <ul class="grid grid-cols-2 gap-4">
                <li class="flex items-center gap-2">
                    <CircleCheck class="text-primary" />
                    <span class="font-label-md">Pet &amp; Child Friendly</span>
                </li>
                <li class="flex items-center gap-2">
                    <CircleCheck class="text-primary" />
                    <span class="font-label-md">Graffiti Resistant</span>
                </li>
                <li class="flex items-center gap-2">
                    <CircleCheck class="text-primary" />
                    <span class="font-label-md">Splinter Free</span>
                </li>
                <li class="flex items-center gap-2">
                    <CircleCheck class="text-primary" />
                    <span class="font-label-md">Environmentally Recyclable</span>
                </li>
            </ul>
        </div>
    </div>
</section>