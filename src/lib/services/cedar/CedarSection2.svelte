<section>
    <div class="p2">
        <div class="image-box">
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../../assets/fence8.webp" alt="A very nice looking fence." />
        </div>
    </div>
    <div class="p1">
        <h2 class="arimo">What's a Cedar Fence?</h2>
        <p class="arimo">A cedar fence is a popular choice in the Pacific Northwest for a privacy fence. Cedar Privacy Fences offer great protection and security of your yard and your property, giving you that peace of mind. The long lasting cedar is very durable, withstanding the rainy months and the dry summers. With its natural oils, cedar wood repels insects and bugs to stay away from your fence. Not only is it durable, but the design fits a variety of styles like rustic, modern, suburbs, etc. There are many different designs to choose from, giving you the opportunity to find what's your taste and what fits your yard best!</p>
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