<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Toast from "$lib/Toast.svelte";
    import ContactSection1 from "$lib/contact/ContactSection1.svelte";
    import GallerySection1 from "$lib/gallery/GallerySection1.svelte";
    import GallerySection2 from "$lib/gallery/GallerySection2.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/gallery" />
    <title>Gallery | Local Fence Co</title>
    <meta name="title" content="Gallery | Local Fence Co" />
	<meta name="description" content="The Gallery page showcases our stunning fence installations. Explore various styles, materials, and craftsmanship." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/" />
    <meta property="og:title" content="Gallery | Local Fence Co" />
    <meta property="og:description" content="The Gallery page showcases our stunning fence installations. Explore various styles, materials, and craftsmanship." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/" />
    <meta property="twitter:title" content="Gallery | Local Fence Co" />
    <meta property="twitter:description" content="The Gallery page showcases our stunning fence installations. Explore various styles, materials, and craftsmanship." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

<main>
    <GallerySection1 />
    <GallerySection2 />
    <GetInTouchSection whereFrom="gallery-section" />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>