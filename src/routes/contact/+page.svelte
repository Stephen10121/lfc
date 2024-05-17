<script lang="ts">
    import GetInTouchSection from "$lib/GetInTouchSection.svelte";
    import Toast from "$lib/Toast.svelte";
    import AboutSection1 from "$lib/about/AboutSection1.svelte";
    import AboutSection2 from "$lib/about/AboutSection2.svelte";
    import AboutSection3 from "$lib/about/AboutSection3.svelte";
    import ContactSection1 from "$lib/contact/ContactSection1.svelte";

    export let form;
</script>

<svelte:head>
    <link rel="canonical" href="https://thelocalfenceco.com/about" />
    <title>Contact Us | Local Fence Co</title>
    <meta name="title" content="Contact Us | Local Fence Co" />
	<meta name="description" content="A convenient way to reach out for inquiries, quotes, and appointments. We’re committed to delivering quality service and ensuring customer satisfaction." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/" />
    <meta property="og:title" content="Contact Us | Local Fence Co" />
    <meta property="og:description" content="A convenient way to reach out for inquiries, quotes, and appointments. We’re committed to delivering quality service and ensuring customer satisfaction." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/" />
    <meta property="twitter:title" content="Contact Us | Local Fence Co" />
    <meta property="twitter:description" content="A convenient way to reach out for inquiries, quotes, and appointments. We’re committed to delivering quality service and ensuring customer satisfaction." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

{#if form?.success}
    <Toast message="Form Sent Successfully" />
{:else if form && !form.success}
    <Toast borderColor="#af3636" message="Failed to send form." />
{/if}

<main>
    <ContactSection1 />
    <GetInTouchSection whereFrom="contact-section" />
</main>

<style>
    main {
        isolation: isolate;
    }
</style>