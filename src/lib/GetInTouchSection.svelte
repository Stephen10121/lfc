<section>
    <div class="p1">
        <h2>Get in Touch</h2>
        <p>Fill out the form below to request a free quote or learn more about our services.</p>
        <form>
            <input type="text" placeholder="Name" />
            <input type="enail" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Submit</button>
        </form>
    </div>
    <div class="p2">
        <div class="image-box">
            <enhanced:img loading="lazy" class="image-box-image" src="../lib/assets/contactfence.jpg" alt="A very nice looking fence." />
        </div>
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
    }

    .p2 {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    h2 {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        color: #000000;
        font-size: 29px;
        line-height: 35px;
    }

    p {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
        color: #5b5f68;
        font-size: 15px;
        line-height: 20px;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 10px;
    }

    input,
    textarea {
        background-color: #ffffff;
        border: 1px solid #B8BCC0;
        border-radius: 6px;
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
        color: #6B7280;
        font-size: 13px;
        padding: 7px;
    }

    textarea {
        resize: vertical;
        max-height: 250px;
        min-height: 36px;
    }

    input:focus,
    textarea:focus {
        outline: 1px solid #B8BCC0;
        outline-offset: 1px;
    }

    button {
        width: 135px;
        border: none;
        background-color: #D79D40;
        color: #000000;
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
        font-size: 13px;
        padding: 5px;
        border-radius: 6px;
    }

    .image-box {
        width: 100%;
        max-width: 540px;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
    }

    .image-box-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50.1%, -50.1%) rotate(90deg);
        aspect-ratio: 4/3;
        height: 100%;
        /* min-height: 100%; */
        /* height: auto; */
        /* width: 100%; */
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

        form {
            padding-right: 100px;
        }
    }

    @media screen and (min-width: 1200px) {
        section {
            padding: 150px;
        }
    }
</style>