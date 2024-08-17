<section>
    <div class="p2">
        <div class="image-box">
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../../lib/assets/fence2.webp" alt="A very nice looking fence." />
        </div>
    </div>
    <div class="p1">
        <h2 class="arimo">Who Are We?</h2>
        <p class="arimo">Local Fence Co is your premier fence contractor in Vancouver, WA, dedicated to transforming your property into a safe and stylish sanctuary. As your trusted local partner, we specialize in fence installation, gate installation, and fence repair services, ensuring that your perimeter is as secure as it is aesthetically pleasing. We understand the importance of a well-crafted fence. It not only enhances the curb appeal of your property but also provides the security and privacy you deserve. Our team of experienced professionals is committed to delivering top-notch fence services tailored to your specific needs.</p>
    </div>
</section>

<style>
    section {
        width: 100%;
        padding: 20px;
        background-color: #F3F4F6;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column-reverse;
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