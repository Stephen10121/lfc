<script lang="ts">
    import Card from "$lib/Card.svelte";

    import hammer from "../../assets/hammer.svg";
    import clock from "../../assets/clock.svg";
    import fence from "../../assets/fences.svg";
</script>

<section>
    <h2 class="arimo">Why a Cedar Fence?</h2>
    <p class="arimo">See the benefits of having a cedar fence.</p>
    <div class="cards">
        <Card icon={clock} title="Durability" p="Cedar is one of the most durable wood options for fences, and can last up to 15-20 years with proper maintenance. Cedar's natural oils make it resistant to rot, warping, and termites." />
        <Card icon={hammer} title="Low maintenance" p="Cedar fences require less maintenance and repairs than other wood fences. However, they do require regular maintenance, such as staining or sealing, to protect the wood from the elements." />
        <Card icon={fence} title="Natural beauty" p="Cedar wood is naturally elegant which can bring aesthetic value to your home." />
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