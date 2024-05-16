<script lang="ts">
    import ServicesCard from "$lib/ServicesCard.svelte";
</script>

<section>
    <h2>Our Portfolio</h2>
    <p>Explore our completed projects.</p>
    <div class="cards">
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence2.jpg" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence7.jpg" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence3.jpg" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence4.jpg" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence5.jpg" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence6.jpg" alt="A very nice looking fence." />
        </ServicesCard>
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
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        color: #ffffff;
        font-size: 29px;
        line-height: 35px;
    }

    p {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
        color: #9CA3A5;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
    }

    .cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .image-box-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50.1%, -50.1%);
        object-fit: cover;
        width: 100%;
        height: 100%;
        animation: unzoom 0.25s linear forwards;
    }

    .image-box-image:hover {
        animation: zoom 0.25s linear forwards;
    }

    @keyframes zoom {
        0% {
            width: 100%;
            height: 100%;
        }
        60% {
            width: 135%;
            height: 135%;
        }
        100% {
            width: 130%;
            height: 130%;
        }
    }

    @keyframes unzoom {
        0% {
            width: 130%;
            height: 130%;
        }
        40% {
            width: 135%;
            height: 135%;
        }
        100% {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (min-width: 800px) {
        section {
            padding: 20px 150px;
        }
    }

    @media screen and (min-width: 1100px) {
        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            row-gap: 20px;
            column-gap: 20px;
        }
    }

    @media screen and (min-width: 1400px) {
        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            row-gap: 20px;
            column-gap: 20px;
        }
    }
</style>