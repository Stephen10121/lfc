<script lang="ts">
    import ServicesCard from "$lib/ServicesCard.svelte";
</script>

<section>
    <h2 class="arimo">Our Portfolio</h2>
    <p class="arimo">Explore our completed projects.</p>
    <div class="cards">
        <ServicesCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence2.webp" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence7.webp" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence3.webp" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence4.webp" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence5.webp" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence6.webp" alt="A very nice looking fence." />
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
        align-items: center;
        gap: 30px;
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