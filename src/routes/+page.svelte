<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Section3 from "$lib/home/Section3.svelte";
    import Section4 from "$lib/home/Section4.svelte";
    import Section1 from "../lib/home/Section1.svelte";
    import Section2 from "../lib/home/Section2.svelte";
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/" />
</svelte:head>

<main>
    <Section1 />
    <Section2 />
    <Section3 />
    <GetInTouchSection />
    <Section4 />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>