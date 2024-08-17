<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Toast from "$lib/Toast.svelte";
    import Section3 from "$lib/home/Section3.svelte";
    import Section4 from "$lib/home/Section4.svelte";
    import Section1 from "../lib/home/Section1.svelte";
    import Section2 from "../lib/home/Section2.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/" />
    <title>Local Fence Co: Home</title>
    <meta name="title" content="Local Fence Co: Home" />
    <meta name="description" content="Local Fence Co is your premier fence contractor in Vancouver, WA, dedicated to transforming your property into a safe and stylish sanctuary." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/" />
    <meta property="og:title" content="Local Fence Co: Home" />
    <meta property="og:description" content="Local Fence Co is your premier fence contractor in Vancouver, WA, dedicated to transforming your property into a safe and stylish sanctuary." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/" />
    <meta property="twitter:title" content="Local Fence Co: Home" />
    <meta property="twitter:description" content="Local Fence Co is your premier fence contractor in Vancouver, WA, dedicated to transforming your property into a safe and stylish sanctuary." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

<main>
    <Section1 />
    <Section2 />
    <Section3 />
    <GetInTouchSection whereFrom="home-section" />
    <Section4 />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>