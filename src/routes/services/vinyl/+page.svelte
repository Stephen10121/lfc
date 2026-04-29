<script lang="ts">
    import ComparisonTable from "@/components/vinyl/ComparisonTable.svelte";
    import StylesShowcase from "@/components/vinyl/StylesShowcase.svelte";
    import Benefits from "@/components/vinyl/Benefits.svelte";
    import Hero from "@/components/vinyl/Hero.svelte";
    import CTA from "@/components/vinyl/CTA.svelte";
    import heroPic from "@/assets/white.jpg";
</script>

<svelte:head>
    <link rel="preload" href={heroPic} as="image" fetchpriority="high" />
    <link rel="canonical" href="https://thelocalfenceco.com/services/vinyl" />
    <title>Vinyl Fence/PVC Rail Fences | Local Fence Co</title>
    <meta name="title" content="Vinyl Fence/PVC Rail Fences | Local Fence Co" />
	<meta name="description" content="Vinyl fences are durable, low-maintenance alternatives to wood. They won't warp, rot, or blister, and they're non-toxic." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/services/vinyl" />
    <meta property="og:title" content="Vinyl Fence/PVC Rail Fences | Local Fence Co" />
    <meta property="og:description" content="Vinyl fences are durable, low-maintenance alternatives to wood. They won't warp, rot, or blister, and they're non-toxic." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/services/vinyl" />
    <meta property="twitter:title" content="Vinyl Fence/PVC Rail Fences | Local Fence Co" />
    <meta property="twitter:description" content="Vinyl fences are durable, low-maintenance alternatives to wood. They won't warp, rot, or blister, and they're non-toxic." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

<main>
    <Hero />
    <Benefits />
    <StylesShowcase />
    <ComparisonTable />
    <CTA />
</main>