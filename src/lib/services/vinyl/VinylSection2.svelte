<section>
    <div class="p2">
        <div class="image-box">
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../../assets/white.webp" alt="A very nice looking fence." />
        </div>
    </div>
    <div class="p1">
        <h2 class="arimo">What's a Vinyl Fence?</h2>
        <p class="arimo">A vinyl fence is made from synthetic plastic called polyvinyl chloride (PVC). PVC is strong, weather-resistant, and used in plumbing, electrical applications, and sidings. Vinyl fencing is a low-maintenance alternative to wood, offering durability, resistance to rot, rust, and warping. It looks the same on both sides, doesn't require toxic chemicals, and is easy to construct. Styles include picket, semi-private, privacy, and post-and-rail fences.</p>
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

    .image-box {
        width: 100%;
        max-width: 540px;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
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