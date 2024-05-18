<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Toast from "$lib/Toast.svelte";
    import AboutSection1 from "$lib/about/AboutSection1.svelte";
    import AboutSection2 from "$lib/about/AboutSection2.svelte";
    import AboutSection3 from "$lib/about/AboutSection3.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/about" />
    <title>About Us | Local Fence Co</title>
    <meta name="title" content="About Us | Local Fence Co" />
	<meta name="description" content="Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/about" />
    <meta property="og:title" content="About Us | Local Fence Co" />
    <meta property="og:description" content="Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/about" />
    <meta property="twitter:title" content="About Us | Local Fence Co" />
    <meta property="twitter:description" content="Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

<main>
    <AboutSection1 />
    <AboutSection2 />
    <AboutSection3 />
    <GetInTouchSection whereFrom="about-section" />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>