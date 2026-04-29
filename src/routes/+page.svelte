<script lang="ts">
    import CTA from "@/components/home/CTA.svelte";
    import Hero from "@/components/home/Hero.svelte";
    import Services from "@/components/home/Services.svelte";
    import Testimonials from "@/components/home/Testimonials.svelte";
    import WhyUs from "@/components/home/WhyUs.svelte";
    import heroPic from "@/assets/fence8.webp";
</script>

<svelte:head>
    <link rel="preload" href={heroPic} as="image" fetchpriority="high" />
    <link rel="canonical" href="https://thelocalfenceco.com/" />
    <title>Local Fence Co: Home</title>
    <meta name="title" content="Local Fence Co: Home" />
    <meta name="description" content="Local Fence Co is your premier fence contractor in Cowlitz County, dedicated to transforming your property into a safe and stylish sanctuary." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/" />
    <meta property="og:title" content="Local Fence Co: Home" />
    <meta property="og:description" content="Local Fence Co is your premier fence contractor in Cowlitz County, dedicated to transforming your property into a safe and stylish sanctuary." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/" />
    <meta property="twitter:title" content="Local Fence Co: Home" />
    <meta property="twitter:description" content="Local Fence Co is your premier fence contractor in Cowlitz County, dedicated to transforming your property into a safe and stylish sanctuary." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

<main class="mt-20">
    <Hero />
    <Services />
    <WhyUs />
    <Testimonials />
    <CTA />
</main>