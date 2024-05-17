<script lang="ts">
    import ServicesCard from "$lib/ServicesCard.svelte";
</script>

<section>
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
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/white.webp" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence9.jpg" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence8.jpg" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence10.jpg" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence11.jpg" alt="A very nice looking fence." />
        </ServicesCard>
        <ServicesCard>
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence12.jpg" alt="A very nice looking fence." />
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
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            row-gap: 20px;
            column-gap: 20px;
        }
    }

    @media screen and (min-width: 1400px) {
        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            row-gap: 20px;
            column-gap: 20px;
        }
    }
</style>