<script lang="ts">
    import GalleryGrid from "@/components/gallery/GalleryGrid.svelte";
    import Testimonials from "@/components/home/Testimonials.svelte";
    import Hero from "@/components/gallery/Hero.svelte";
    import CTA from "@/components/gallery/CTA.svelte";
    import heroPic from "@/assets/fence5.webp";
</script>

<svelte:head>
    <link rel="preload" href={heroPic} as="image" fetchpriority="high" />
    <link rel="canonical" href="https://thelocalfenceco.com/gallery" />
    <title>Gallery | Local Fence Co</title>
    <meta name="title" content="Gallery | Local Fence Co" />
	<meta name="description" content="The Gallery page showcases our stunning fence installations. Explore various styles, materials, and craftsmanship." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/gallery" />
    <meta property="og:title" content="Gallery | Local Fence Co" />
    <meta property="og:description" content="The Gallery page showcases our stunning fence installations. Explore various styles, materials, and craftsmanship." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/gallery" />
    <meta property="twitter:title" content="Gallery | Local Fence Co" />
    <meta property="twitter:description" content="The Gallery page showcases our stunning fence installations. Explore various styles, materials, and craftsmanship." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

<main class="pt-20">
    <Hero />
    <GalleryGrid />
    <CTA />
    <Testimonials />
</main>