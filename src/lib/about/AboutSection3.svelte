<script lang="ts">
    import Card from "$lib/Card.svelte";
    
    import hammer from "../assets/hammer.svg";
    import dollar from "../assets/dollar.svg";
    import clock from "../assets/clock.svg";
</script>

<section>
    <h2 class="arimo">Why Choose Us</h2>
    <p class="arimo">Your Success, Our Priority!</p>
    <div class="cards">
        <Card icon={hammer} title="Experience" p="With our extensive industry experience, we've consistently delivered outstanding results for clients. Let us demonstrate our expertise for you!" />
        <Card icon={dollar} title="Affordability" p="Our competitive pricing ensures you get exceptional value without compromising quality. Discover affordability with us today!" />
        <Card icon={clock} title="Efficiency" p="Our streamlined processes and quick turnaround times ensure you achieve your goals faster. Experience efficiency with us today!" />
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