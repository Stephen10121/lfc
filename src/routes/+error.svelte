<script lang="ts">
    import { page } from '$app/stores';
</script>

<section>
    <div class="text">
        {#if $page.status === 404}
            <h1 class="arimo">Where's that?</h1>
            <p class="arimo">I'm pretty sure {$page.url.pathname} doesn't exist! 🤔 Perhaps <span><a class="arimo" href="/contact">/contact</a></span>?</p>
        {:else}
            <h1 class="arimo">{$page.status}: {$page.error?.message}</h1>
            <p class="arimo">I believe something went wrong.</p>
        {/if}
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        padding: 20px;
        background-color: #D79D40;
        animation: colorChange 10s ease-in-out infinite;
    }

    @keyframes colorChange {
        0% {
            background-color: #D79D40;
        }

        75% {
            background-color: #d1af77;
        }

        100% {
            background-color: #D79D40;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    h1 {
        font-weight: 600;
        color: #000000;
        font-size: 29px;
        line-height: 35px;
    }

    p,
    a {
        font-weight: normal;
        color: #000000;
        font-size: 15px;
        line-height: 20px;
    }

    @media screen and (min-width: 800px) {
        section {
            padding: 150px;
        }

        .text {
            align-items: center;
            gap: 30px;
        }

        h1 {
            text-align: center;
            line-height: clamp(3.125rem, 0rem + 6.25vw, 4.6875rem);
            font-size: clamp(2.1875rem, -1.4375rem + 7.25vw, 4rem);
        }

        p,
        a {
            font-size: clamp(0.9375rem, 0.3125rem + 1.25vw, 1.25rem);
        }
    }
</style>