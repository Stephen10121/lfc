<script lang="ts">
    import MainReview from "@/components/reviews/MainReview.svelte";
    import ReviewCard from "@/components/reviews/ReviewCard.svelte";
    import Hero from "@/components/reviews/Hero.svelte";
    import CTA from "@/components/reviews/CTA.svelte";
    import heroPic from "@/assets/fence8.webp";
</script>

<svelte:head>
    <link rel="preload" href={heroPic} as="image" fetchpriority="high" />
    <link rel="canonical" href="https://thelocalfenceco.com/testimonials" />
    <title>Testimonials | Local Fence Co</title>
    <meta name="title" content="Testimonials | Local Fence Co" />
	<meta name="description" content="Local Fence Co delivers fast, reliable, and high‑quality fence installation and repairs. See why Vancouver homeowners trust our craftsmanship, honesty, and efficiency." />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thelocalfenceco.com/testimonials" />
    <meta property="og:title" content="Testimonials | Local Fence Co" />
    <meta property="og:description" content="Local Fence Co delivers fast, reliable, and high‑quality fence installation and repairs. See why Vancouver homeowners trust our craftsmanship, honesty, and efficiency." />
    <meta property="og:image" content="https://thelocalfenceco.com/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://thelocalfenceco.com/testimonials" />
    <meta property="twitter:title" content="Testimonials | Local Fence Co" />
    <meta property="twitter:description" content="Local Fence Co delivers fast, reliable, and high‑quality fence installation and repairs. See why Vancouver homeowners trust our craftsmanship, honesty, and efficiency." />
    <meta property="twitter:image" content="https://thelocalfenceco.com/logo.png" />
</svelte:head>

<main>
    <Hero />
    <MainReview />
    <section class="py-xl bg-background">
        <div class="max-w-7xl mx-auto px-3 sm:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                <ReviewCard
                    message="Local fence co. Replaced a 64 foot fence for me. They did an amazing job, very affordable, very professional and the fence looks great!! Thank you again Bogdan!"
                    from="Levi Wilson"
                    occupation="Residential Owner"
                />
                <ReviewCard
                    message="Very satisfied customer! Bogdan is an ultimate professional who did exactly as we agreed and was affordable. He fixed/reinstalled a double vinyl fence gate most fence companies could not. Bogdan is by far the most knowledgeable fence installer I have ever met, and believe me - I have met a lot of them. I highly recommend him because of his honesty, professionalism, knowledge and much more!"
                    from="BYU"
                    occupation="Residential Owner"
                />
                <ReviewCard
                    message="Bogdan at LOCAL FENCE CO. did an amazing job with my fence project. He took a lot of pride in his work, was very personable and friendly, and went above and beyond to get my fence in shape. It was no small project but he worked quickly and skillfully to get it all done. The pricing was very reasonable as well! Bogdan will be my first call, next time I need fencing services."
                    from="Vladislav Shapoval"
                    occupation="Residential Owner"
                />
                <ReviewCard
                    message="Amazing work by this company. Above & beyond what I expected. More than fair pricing. Completed the project ahead of schedule & under budget. Doesn't get better than that."
                    from="M M"
                    occupation="Residential Owner"
                />
                <ReviewCard
                    message="This guy knows what he's doing! Did a great job installing driveway gates. Cleaned up after the project was complete. Honest, hard working, and great rates. I'll definitely have him back for installing metal iron fence."
                    from="D N S"
                    occupation="Residential Owner"
                />
                <ReviewCard
                    message="Bogdon did a magnificent job on our backyard fence. Very articulate of his measurements and making sure that all the 4x4’s, slats and the flat top was leveled. I would recommend him to all friends and neighbors to build future fencing"
                    from="Joe Balmores"
                    occupation="Residential Owner"
                />
            </div>
        </div>
    </section>
    <CTA />
</main>