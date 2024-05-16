<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Section1 from "$lib/home/Section1.svelte";
    import Section2 from "$lib/home/Section2.svelte";
    import Section3 from "$lib/home/Section3.svelte";
</script>

<main>
    <Section1 />
    <Section2 />
    <Section3 />
    <GetInTouchSection />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>