<script lang="ts">
    import { navigating } from "$app/stores";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Loading from "$lib/Loading.svelte";
</script>

<Header />

{#if $navigating}
    <Loading />
{/if}

<slot />

<Footer />