<script lang="ts">
    import Card from "$lib/Card.svelte";

    import fence from "../../assets/fences.svg";
    import globe from "../../assets/globe.svg";
    import dollar from "../../assets/dollar.svg";
</script>

<section>
    <h2 class="arimo">Why a Custom Design Fence?</h2>
    <p class="arimo">See the benefits of having a Custom Design fence.</p>
    <div class="cards">
        <Card icon={fence} title="Creative freedom" p="You can incorporate unique features like decorative accents, built-in planters, or custom gates to showcase your personal style." />
        <Card icon={dollar} title="Property value" p="Due to the unique look of the fence, your property value can increase the aesthetic of your property." />
        <Card icon={globe} title="Privacy and security" p="Custom fences can help you avoid unwanted interactions and prying eyes." />
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