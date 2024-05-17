<script lang="ts">
    import ReviewCard from "$lib/ReviewCard.svelte";
    import { reviews } from "$lib/reviews";
</script>

<section>
    <h2 class="arimo">Testimonials</h2>
    <p class="arimo">See what people are saying about us.</p>
    <div class="cards">
        {#each reviews as review}
            <ReviewCard who={review.name} what={review.message} />
        {/each}
    </div>
</section>

<style>
    section {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        gap: 15px;
        background-color: #000000;
        padding-bottom: 40px;
    }

    h2 {
        font-weight: 700;
        color: #ffffff;
        font-size: 29px;
        line-height: 35px;
    }

    p {
        font-weight: normal;
        color: #9CA3A5;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
    }

    .cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 15px;
    }

    @media screen and (min-width: 800px) {
        section {
            padding: 20px 70px;
        }
    }

    @media screen and (min-width: 1200px) {
        section {
            padding: 20px 150px;
        }
    }

    @media screen and (min-width: 1300px) {
        .cards {
            flex-direction: row;
            gap: 20px;
        }
    }
</style>