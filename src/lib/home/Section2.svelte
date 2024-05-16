<script lang="ts">
    import Card from "$lib/Card.svelte";

    import fenceIcon from "../assets/fenceicon.svg";
    import building from "../assets/building.svg";
    import wrench from "../assets/wrench.svg";
</script>

<section>
    <h2>Our Services</h2>
    <p>Discover our comprehensive fencing solutions.</p>
    <div class="cards">
        <Card icon={fenceIcon} title="Residential Fencing" p="Transform your home with our high-quality residential fencing solutions." />
        <Card icon={building} title="Commercial Fencing" p="Secure your business with our durable and reliable commercial fencing." />
        <Card icon={wrench} title="Custom Fencing" p="Bring your unique vision to life with our custom fencing solutions." />
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
        background-color: #F3F4F6;
        padding-bottom: 40px;
    }

    h2 {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        color: #000000;
        font-size: 29px;
        line-height: 35px;
    }

    p {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
        color: #5b5f68;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
    }

    .cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    @media screen and (min-width: 800px) {
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