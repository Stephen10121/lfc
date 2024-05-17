<script lang="ts">
    import Card from "$lib/Card.svelte";

    import hammer from "../../assets/hammer.svg";
    import dollar from "../../assets/dollar.svg";
    import fence from "../../assets/fences.svg";
</script>

<section>
    <h2 class="arimo">Why a Chain-link Fence?</h2>
    <p class="arimo">See the benefits of having a Chain-link fence.</p>
    <div class="cards">
        <Card icon={fence} title="Security" p="Chain link fences are made of durable steel and can provide a high level of security. They are a good option for secluded properties." />
        <Card icon={hammer} title="Low maintenance" p="Chain link fences are not susceptible to rotting or warping like wood, and they don't require frequent repairs." />
        <Card icon={dollar} title="Affordability" p="Chain link fences are cost-effective and provide strength and durability without a high price tag." />
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