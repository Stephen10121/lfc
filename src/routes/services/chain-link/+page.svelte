<script lang="ts">
    import TechnicalSpecs from "@/components/chainlink/TechnicalSpecs.svelte";
    import GallerySection from "@/components/chainlink/GallerySection.svelte";
    import Proposition from "@/components/chainlink/Proposition.svelte";
    import Hero from "@/components/chainlink/Hero.svelte";
    import CTA from "@/components/chainlink/CTA.svelte";
    import heroPic from "@/assets/chainPretty.jpg";
</script>

<svelte:head>
    <link rel="preload" href={heroPic} as="image" fetchpriority="high" />
    <link rel="canonical" href="https://thelocalfenceco.com/services/chain-link" />
    <title>Chain-link Fences | Local Fence Co</title>
    <meta name="title" content="Chain-link Fences | Local Fence Co" />
	<meta name="description" content="Chain link fences are woven from coated mesh wire, forming a diamond pattern. They provide security while maintaining visibility." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/services/chain-link" />
    <meta property="og:title" content="Chain-link Fences | Local Fence Co" />
    <meta property="og:description" content="Chain link fences are woven from coated mesh wire, forming a diamond pattern. They provide security while maintaining visibility." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/services/chain-link" />
    <meta property="twitter:title" content="Chain-link Fences | Local Fence Co" />
    <meta property="twitter:description" content="Chain link fences are woven from coated mesh wire, forming a diamond pattern. They provide security while maintaining visibility." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

<main class="mt-20">
    <Hero />
    <Proposition />
    <TechnicalSpecs />
    <GallerySection />
    <CTA />
</main>