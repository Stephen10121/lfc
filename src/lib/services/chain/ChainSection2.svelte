<section>
    <div class="p2">
        <div class="image-box">
            <enhanced:img sizes="min(700px, 100vw)" loading="lazy" class="image-box-image" src="../../assets/fence6.webp" alt="A very nice looking fence." />
        </div>
    </div>
    <div class="p1">
        <h2 class="arimo">What's a Chain-link Fence?</h2>
        <p class="arimo">A chain-link fence is a woven fence made from galvanized or coated steel wire. The wires run vertically and are bent into a zigzag pattern, creating the characteristic diamond pattern seen in these fences. This design ensures both robustness and transparency, allowing for secure enclosures while maintaining visibility. Chain link fencing is commonly used for both residential and commercial projects due to its affordability, versatility, and ease of customization. It provides perimeter security, keeps children and pets safe, and meets building code requirements for swimming pools. In commercial applications, chain link fences offer a practical and easily installed solution for securing lots and customizing configurations based on specific needs.</p>
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