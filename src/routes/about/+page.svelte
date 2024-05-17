<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Toast from "$lib/Toast.svelte";
    import Section1 from "$lib/home/Section1.svelte";
    import Section2 from "$lib/home/Section2.svelte";
    import Section3 from "$lib/home/Section3.svelte";

    export let form;
</script>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

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