<script lang="ts">
    import ContactInfo from "@/components/contact/ContactInfo.svelte";
    import Hero from "@/components/contact/Hero.svelte";
    import LeadGenForm from "@/components/contact/LeadGenForm.svelte";
    import { BadgeCheck, MapPin } from "@lucide/svelte";
    import serviceHere from "@/assets/servingarea.png";
    import GalleryTeaser from "@/components/contact/GalleryTeaser.svelte";
    import { onMount } from "svelte";
    import { loadScript } from "@/utils";
    import { turnstileWidgetId } from "@/store.js";

    let { data } = $props();

    const fromLocations = {
        "homeHero": "Home page hero button",
        "home-cta": "Home page call to action section",
        "service-cta": "Service page call to action section",
        "navbargaq": "Nav header Get a Quote",
        "gallery-cta": "Gallery page call to action section",
        "wood-cta": "Wood call to action section",
        "wood-hero": "Wood page hero section.",
        "chain-hero": "Chain link page hero section",
        "chain-cta": "Chain link page cta section",
        "about-cta": "About page call to action section",
        "vinyl-cta": "Vinyl page call to action section",
        "vinyl-hero": "Vinyl page hero section"
    }

    const interests = {
        "wood": "Check the wood checkbox in contact form.",
        "chainlink": "Check the chain link textbox in contact form."
    }

    let token = $state("");

    onMount(() => {
		try {
			loadScript("https://challenges.cloudflare.com/turnstile/v0/api.js").then(() => {
				//@ts-ignore
				turnstileWidgetId.set(turnstile.render('#turnstile-container', {
					sitekey: data.turnstileSiteKey,
					callback: function(token2: string) {
						token = token2;
					},
				}));
			});
		} catch (err) {
			console.log(err);
		}

		return () => {
			const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');

			if (existingScript) {
				document.head.removeChild(existingScript);
			}
		}
	});
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/contact" />
    <title>Contact Us | Local Fence Co</title>
    <meta name="title" content="Contact Us | Local Fence Co" />
	<meta name="description" content="A convenient way to reach out for inquiries, quotes, and appointments. We’re committed to delivering quality service and ensuring customer satisfaction." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/contact" />
    <meta property="og:title" content="Contact Us | Local Fence Co" />
    <meta property="og:description" content="A convenient way to reach out for inquiries, quotes, and appointments. We’re committed to delivering quality service and ensuring customer satisfaction." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/contact" />
    <meta property="twitter:title" content="Contact Us | Local Fence Co" />
    <meta property="twitter:description" content="A convenient way to reach out for inquiries, quotes, and appointments. We’re committed to delivering quality service and ensuring customer satisfaction." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

<main class="pt-20">
    <div id="turnstile-container"></div>
    <Hero />
    
    <section class="max-w-360 mx-auto px-2 sm:px-6 lg:px-12 py-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <LeadGenForm turnstileSiteToken={token} />

            <div class="lg:col-span-5 space-y-gutter">
                <ContactInfo />

                <!-- Map Integration -->
                <div class="bg-surface-container-low border border-outline-variant h-100 relative overflow-hidden">
                    <img alt="Service Area Map" class="w-full h-full object-cover grayscale contrast-125 opacity-70" src={serviceHere}/>
                    
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div class="bg-primary p-4 shadow-xl">
                            <MapPin class="text-white w-8 h-8" />
                        </div>
                    </div>

                    <div class="absolute bottom-4 left-4 bg-white px-4 py-2 border border-outline-variant shadow-sm">
                        <p class="font-label-md text-on-surface uppercase">Serving Greater Cowlitz County Area</p>
                    </div>
                </div>

                <!-- Trust Badge -->
                <div class="bg-primary/5 p-md border-l-4 border-primary">
                    <div class="flex items-center gap-4">
                        <BadgeCheck class="text-primary h-16 w-16" />
                        <p class="font-body-md text-on-surface-variant italic">"We respect your property and your privacy. Your information is strictly used for the purpose of your fencing project estimate."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <GalleryTeaser />
</main>