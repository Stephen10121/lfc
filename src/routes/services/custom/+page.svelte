<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Toast from "$lib/Toast.svelte";
    import CustomSection1 from "$lib/services/custom/CustomSection1.svelte";
    import CustomSection2 from "$lib/services/custom/CustomSection2.svelte";
    import CustomSection3 from "$lib/services/custom/CustomSection3.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/about" />
    <title>Custom Design Fences | Local Fence Co</title>
    <meta name="title" content="Custom Design Fences | Local Fence Co" />
	<meta name="description" content="Custom fences are tailored to match your property aesthetics, lasting for decades and enhancing property value." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/" />
    <meta property="og:title" content="Custom Design Fences | Local Fence Co" />
    <meta property="og:description" content="Custom fences are tailored to match your property aesthetics, lasting for decades and enhancing property value." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/" />
    <meta property="twitter:title" content="Custom Design Fences | Local Fence Co" />
    <meta property="twitter:description" content="Custom fences are tailored to match your property aesthetics, lasting for decades and enhancing property value." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

<main>
    <CustomSection1 />
    <CustomSection2 />
    <CustomSection3 />
    <GetInTouchSection whereFrom="custom-section" />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>