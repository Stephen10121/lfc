<script lang="ts">
	import { Toaster } from "$lib/components/ui/sonner/index.js";
    import NavBar from '@/components/NavBar.svelte';
    import Footer from '@/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.ico';
	import './layout.css';

	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster theme="light" />
<NavBar />

{@render children()}

<Footer />

<style>
	:global(html) {
  		scroll-behavior: smooth;
	}
</style>