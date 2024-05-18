<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Toast from "$lib/Toast.svelte";
    import VinylSection1 from "$lib/services/vinyl/VinylSection1.svelte";
    import VinylSection2 from "$lib/services/vinyl/VinylSection2.svelte";
    import VinylSection3 from "$lib/services/vinyl/VinylSection3.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/services/vinyl" />
    <title>Vinyl Fence/PVC Rail Fences | Local Fence Co</title>
    <meta name="title" content="Vinyl Fence/PVC Rail Fences | Local Fence Co" />
	<meta name="description" content="Vinyl fences are durable, low-maintenance alternatives to wood. They won't warp, rot, or blister, and they're non-toxic." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/" />
    <meta property="og:title" content="Vinyl Fence/PVC Rail Fences | Local Fence Co" />
    <meta property="og:description" content="Vinyl fences are durable, low-maintenance alternatives to wood. They won't warp, rot, or blister, and they're non-toxic." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/" />
    <meta property="twitter:title" content="Vinyl Fence/PVC Rail Fences | Local Fence Co" />
    <meta property="twitter:description" content="Vinyl fences are durable, low-maintenance alternatives to wood. They won't warp, rot, or blister, and they're non-toxic." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

<main>
    <VinylSection1 />
    <VinylSection2 />
    <VinylSection3 />
    <GetInTouchSection whereFrom="vinyl-section" />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>