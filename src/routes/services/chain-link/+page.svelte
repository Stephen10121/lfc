<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Toast from "$lib/Toast.svelte";
    import ChainSection1 from "$lib/services/chain/ChainSection1.svelte";
    import ChainSection2 from "$lib/services/chain/ChainSection2.svelte";
    import ChainSection3 from "$lib/services/chain/ChainSection3.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/about" />
    <title>Chain-link Fences | Local Fence Co</title>
    <meta name="title" content="Chain-link Fences | Local Fence Co" />
	<meta name="description" content="Chain link fences are woven from coated mesh wire, forming a diamond pattern. They provide security while maintaining visibility." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/" />
    <meta property="og:title" content="Chain-link Fences | Local Fence Co" />
    <meta property="og:description" content="Chain link fences are woven from coated mesh wire, forming a diamond pattern. They provide security while maintaining visibility." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/" />
    <meta property="twitter:title" content="Chain-link Fences | Local Fence Co" />
    <meta property="twitter:description" content="Chain link fences are woven from coated mesh wire, forming a diamond pattern. They provide security while maintaining visibility." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

<main>
    <ChainSection1 />
    <ChainSection2 />
    <ChainSection3 />
    <GetInTouchSection whereFrom="chainlink-section" />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>