<section>
    <div class="p1">
        <h2 class="arimo">Chain-link Fences</h2>
        <p class="arimo">Are you looking for low maintenance affordable fence? Chain Link Fences are made of durable galvanized steel that will stay up for decades and not rot. Though it offers minimal privacy, it's a great way to keep the unwanted guests off the yard, and pets and children inside. The price is very affordable and reasonable for the amount of years you'll get out of the fence! Give us a call, and we'll get you scheduled!</p>
        <a href="/services/chain-link" class="arimo">Learn More About Chain-link Fences</a>
    </div>
    <div class="p2">
        <div class="image-box">
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../../lib/assets/fence6.webp" alt="A very nice looking fence." />
        </div>
    </div>
</section>

<style>
    section {
        width: 100%;
        padding: 20px;
        background-color: #000000;
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
        color: #ffffff;
        font-size: 29px;
        line-height: 35px;
    }

    p {
        font-weight: normal;
        color: #ffffff;
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

    @media screen and (min-width: 800px) {
        section {
            display: grid;
            grid-template-columns: 3fr 2fr;
            align-items: center;
            justify-content: center;
            padding: 70px;
        }

        .p1 {
            gap: 20px;
        }

        .p2 {
            justify-content: flex-end;
        }
    }

    @media screen and (min-width: 1200px) {
        section {
            padding: 150px;
        }
    }
</style>