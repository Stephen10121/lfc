<script lang="ts">
    import Card from "$lib/Card.svelte";

    import hammer from "../../assets/hammer.svg";
    import dollar from "../../assets/dollar.svg";
    import fence from "../../assets/fences.svg";
    import globe from "../../assets/globe.svg";
    import cone from "../../assets/cone.svg";
</script>

<section>
    <h2 class="arimo">Why a Vinyl Fence?</h2>
    <p class="arimo">See the benefits of having a Vinyl fence.</p>
    <div class="cards">
        <Card icon={fence} title="Aesthetics" p="Vinyl fences can maintain their appearance longer than wood fences because they don't warp or rot. Both sides of the fence look amazing." />
        <Card icon={cone} title="Safety" p="Vinyl fences are safe and don't attract termites." />
        <Card icon={globe} title="Environmentally friendly" p="Vinyl is an eco-friendly material that requires fewer resources to produce and releases fewer emissions into the environment." />
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