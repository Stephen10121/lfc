<script lang="ts">
    import logo from "../lib/assets/logo.png";
    import phone from "../lib/assets/phone.svg";
    import mail from "../lib/assets/mail.svg";
    import coolFence from "../lib/assets/coolfence.svg";
</script>

<footer>
    <section class="information">
        <img src={logo} alt="LFC Logo" class="logo" />
        <p class="arimo inf"><span><img src={phone} width="17" height="20" alt="An icon of location pin." /></span> <a class="arimo" href="tel:360-784-3128" target="_blank">(360)-784-3128</a></p>
        <p class="arimo inf"><span><img src={mail} width="20" height="16" alt="An icon of a mail letter." /></span> <a class="arimo" href="mailto:thelocalfenceco@gmail.com" target="_blank">thelocalfenceco@gmail.com</a></p>
        <p class="arimo">WA LIC# LOCALFC775JP</p>
    </section>
    <section class="links" id="company">
        <h3 class="outfit">Company</h3>
        <nav>
            <a class="outfit" href="/">Admin Portal</a>
        </nav>
    </section>
    <section class="links" id="navigate">
        <h3 class="outfit">Navigate</h3>
        <nav>
            <a class="outfit" href="/">Home</a>
            <a class="outfit" href="/about">About Us</a>
            <a class="outfit" href="/services">Services</a>
            <a class="outfit" href="/gallery">Gallery</a>
            <a class="outfit" href="/contact">Contact</a>
        </nav>
    </section>
    <img class="coolFence" loading="lazy" src={coolFence} alt="A nice svg of a cool fence.">
</footer>

<style>
    footer {
        max-height: 310px;
        overflow: hidden;
        background-color: #363633;
        padding: 40px 20px;
        display: flex;
        gap: 120px;
        position: relative;
    }

    .information {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    footer img {
        /* margin-top: 4px; */
        width: 160px;
    }

    .inf {
        display: none;
        align-items: center;
        gap: 20px;
    }

    .inf span img {
        width: fit-content;
    }

    p a,
    p {
        font-weight: normal;
        color: #ffffff;
        font-size: 15px;
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    #company {
        display: none;
    }

    #navigate {
        display: none;
    }

    .links h3 {
        font-weight: 600;
        color: #ffffff;
        font-size: 25px;
    }

    .links nav {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .links a {
        font-weight: normal;
        color: #ffffff;
        font-size: 15px;
        text-decoration: none;
    }

    .coolFence {
        position: absolute;
        top: 20px;
        right: 0;
        width: 40%;
        display: none;
    }

    @media screen and (min-width: 450px) {
        .inf {
            display: flex;
        }
    }

    @media screen and (min-width: 600px) {
        #navigate {
            display: flex;
        }
    }

    @media screen and (min-width: 900px) {
        footer {
            padding: 40px 150px;
        }

        #company {
            display: flex;
        }
    }

    @media screen and (min-width: 1500px) {
        .coolFence {
            display: block;
        }
    }
</style>