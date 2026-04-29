<script lang="ts">
    import Biography from "@/components/about/Biography.svelte";
    import WhatWeDo from "@/components/about/WhatWeDo.svelte";
    import Hero from "@/components/about/Hero.svelte";
    import CTA from "@/components/about/CTA.svelte";
    import heroPic from "@/assets/fence8.webp";
</script>

<svelte:head>
    <link rel="preload" href={heroPic} as="image" fetchpriority="high" />
    <link rel="canonical" href="https://thelocalfenceco.com/about" />
    <title>About Us - Local Fence Co</title>
    <meta name="title" content="About Us - Local Fence Co" />
	<meta name="description" content="Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/about" />
    <meta property="og:title" content="About Us - Local Fence Co" />
    <meta property="og:description" content="Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/about" />
    <meta property="twitter:title" content="About Us - Local Fence Co" />
    <meta property="twitter:description" content="Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

<main>
    <Hero />
    <WhatWeDo />
    <Biography />
    <CTA />
</main>