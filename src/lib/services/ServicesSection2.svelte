<section>
    <div class="p2">
        <div class="image-box">
            <enhanced:img sizes="min(1280px, 100vw)" loading="lazy" class="image-box-image" src="../assets/fence2.webp" alt="A very nice looking fence." />
        </div>
    </div>
    <div class="p1">
        <h2 class="arimo">Cedar Privacy Fences</h2>
        <p class="arimo">With the beautiful design and the great durability, you can't go wrong when choosing the Cedar Privacy Fence! We will install your Cedar Fence in a timely manner with high efforts to provide you the best quality and customer satisfaction!</p>
        <a href="/services/cedar" class="arimo">Learn More About Cedar Privacy Fences</a>
    </div>
</section>

<style>
    section {
        width: 100%;
        padding: 20px;
        background-color: #F3F4F6;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .p1 {
        gap: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .p2 {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    h2 {
        font-weight: 700;
        color: #000000;
        font-size: 29px;
        line-height: 35px;
    }

    p {
        font-weight: normal;
        color: #5b5f68;
        font-size: 15px;
        line-height: 30px;
        max-width: 84ch;
        text-indent: 4em;
    }

    a {
        font-weight: 600;
        color: #000000;
        font-size: 13px;
        text-decoration: none;
        background-color: #D79D40;
        display: block;
        width: fit-content;
        padding: 6px 12px;
        border-radius: 6px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .image-box {
        width: 100%;
        max-width: 540px;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
    }

    @media screen and (min-width: 800px) {
        a {
            padding: 9px 17px;
        }
    }

    @media screen and (min-width: 1200px) {
        section {
            display: grid;
            grid-template-columns: 2fr 3fr;
            align-items: center;
            justify-content: center;
            padding: 70px;
        }

        .p1 {
            gap: 20px;
        }
    }
</style>