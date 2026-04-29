<script lang="ts">
    import Services from "@/components/services/Services.svelte";
    import WhyUs from "@/components/services/WhyUs.svelte";
    import Hero from "@/components/services/Hero.svelte";
    import CTA from "@/components/services/CTA.svelte";
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/services" />
    <title>Services | Local Fence Co</title>
    <meta name="title" content="Services | Local Fence Co" />
	<meta name="description" content="Our cedar fences provide privacy. Chain-link fences offer durability. Vinyl/PVC fences combine style and strength. Custom designs cater to your unique needs." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/services" />
    <meta property="og:title" content="Services | Local Fence Co" />
    <meta property="og:description" content="Our cedar fences provide privacy. Chain-link fences offer durability. Vinyl/PVC fences combine style and strength. Custom designs cater to your unique needs." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/services" />
    <meta property="twitter:title" content="Services | Local Fence Co" />
    <meta property="twitter:description" content="Our cedar fences provide privacy. Chain-link fences offer durability. Vinyl/PVC fences combine style and strength. Custom designs cater to your unique needs." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

<main class="mt-20">
    <Hero />
    <Services />
    <WhyUs />
    <CTA />
</main>