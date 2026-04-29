<script lang="ts">
    import PrivacyOptions from "@/components/wood/PrivacyOptions.svelte";
    import GalleryPreview from "@/components/wood/GalleryPreview.svelte";
    import WhyWood from "@/components/wood/WhyWood.svelte";
    import WoodCTA from "@/components/wood/WoodCTA.svelte";
    import Hero from "@/components/wood/Hero.svelte";
    import heroPic from "@/assets/fence3.webp";
</script>

<svelte:head>
    <link rel="preload" href={heroPic} as="image" fetchpriority="high" />
    <link rel="canonical" href="https://thelocalfenceco.com/services/wood" />
    <title>Wood Fences - Local Fence Co</title>
    <meta name="title" content="Wood Fences - Local Fence Co" />
	<meta name="description" content="Wood fences are visually attractive and durable. Enjoy their esthetic appeal and low maintenance for years to come!" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/services/wood" />
    <meta property="og:title" content="Wood Fences - Local Fence Co" />
    <meta property="og:description" content="Wood fences are visually attractive and durable. Enjoy their esthetic appeal and low maintenance for years to come!" />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/services/wood" />
    <meta property="twitter:title" content="Wood Fences - Local Fence Co" />
    <meta property="twitter:description" content="Wood fences are visually attractive and durable. Enjoy their esthetic appeal and low maintenance for years to come!" />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

<main class="mt-20">
    <Hero />
    <WhyWood />
    <PrivacyOptions />
    <GalleryPreview />
    <WoodCTA />
</main>