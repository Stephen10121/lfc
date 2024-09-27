<section>
    <enhanced:img alt="Background fence for the website." loading="lazy" role="presentation" src="../assets/fence13.webp" decoding="async" class="bg-image" sizes="(min-width:1920px) 1280px, (min-width: 1080px) 940px, (min-width:250px) 300px" />
    <div class="cover" />
    <div class="text">
        <h1 class="arimo">Services</h1>
        <p class="arimo">Tailored Solutions, Unmatched Results!</p>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        padding: 20px;
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    h1 {
        font-weight: 600;
        color: #ffffff;
        font-size: 29px;
        line-height: 35px;
    }

    p {
        font-weight: normal;
        color: #ffffff;
        font-size: 15px;
        line-height: 20px;
    }

    .bg-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50.1%, -50.1%);
        width: 100%;
        height: auto;
        z-index: -1;
    }

    @media screen and (max-width: 820px) {
        .bg-image {
            min-width: 100%;
            width: auto;
            min-height: 100%;
            object-fit: cover;
        }
    }

    .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.445);
        z-index: -1;
    }

    @media screen and (min-width: 800px) {
        section {
            padding: 150px;
        }

        .text {
            align-items: center;
            gap: 30px;
        }

        h1 {
            text-align: center;
            line-height: clamp(3.125rem, 0rem + 6.25vw, 4.6875rem);
            font-size: clamp(2.1875rem, -1.4375rem + 7.25vw, 4rem);
        }

        p {
            font-size: clamp(0.9375rem, 0.3125rem + 1.25vw, 1.25rem);
        }
    }
</style>