<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Toast from "$lib/Toast.svelte";
    import ServicesSection1 from "$lib/services/ServicesSection1.svelte";
    import ServicesSection2 from "$lib/services/ServicesSection2.svelte";
    import ServicesSection3 from "$lib/services/ServicesSection3.svelte";
    import ServicesSection4 from "$lib/services/ServicesSection4.svelte";
    import ServicesSection5 from "$lib/services/ServicesSection5.svelte";
    import CedarSection1 from "$lib/services/cedar/CedarSection1.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/about" />
    <title>Cedar Fences | Local Fence Co</title>
    <meta name="title" content="Services | Local Fence Co" />
	<meta name="description" content="Cedar fences are visually attractive and durable. Enjoy their esthetic appeal and low maintenance for years to come!" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/" />
    <meta property="og:title" content="Cedar Fences | Local Fence Co" />
    <meta property="og:description" content="Cedar fences are visually attractive and durable. Enjoy their esthetic appeal and low maintenance for years to come!" />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/" />
    <meta property="twitter:title" content="Cedar Fences | Local Fence Co" />
    <meta property="twitter:description" content="Cedar fences are visually attractive and durable. Enjoy their esthetic appeal and low maintenance for years to come!" />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

<main>
    <CedarSection1 />
    <ServicesSection2 />
    <ServicesSection3 />
    <ServicesSection4 />
    <ServicesSection5 />
    <GetInTouchSection />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>