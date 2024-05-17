<script lang="ts">
    import { page } from "$app/stores";
</script>

<section>
    <section class="links">
        <h3 class="outfit">Navigate</h3>
        <nav>
            <a class="outfit {$page.url.pathname==="/" ? "selected" : "non"}" href="/">Home</a>
            <a class="outfit {$page.url.pathname==="/about" ? "selected" : "non"}" href="/about">About Us</a>
            <a class="outfit {$page.url.pathname.includes("/services") ? "selected" : "non"}" href="/services">Services</a>
            <a class="outfit {$page.url.pathname==="/gallery" ? "selected" : "non"}" href="/gallery">Gallery</a>
            <a class="outfit {$page.url.pathname==="/contact" ? "selected" : "non"}" href="/contact">Contact</a>
        </nav>
    </section>
</section>


<style>
    section {
        position: fixed;
        background-color: #000000;
        top: 0;
        left: 0;
        height: 50vh;
        width: 100%;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.1s linear;
        padding: 20px;
        transform: translateY(-100%);
    }

    :global(body:has(#menuCheckBox:checked)) section {
        transform: translateY(0);
        opacity: 1;
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 120px;
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
        display: block;
        width: fit-content;
    }

    a.selected {
        color: #D79D40;
        box-shadow: 0 1px 0 #D79D40;
    }

    @media screen and (min-width: 1000px) {
        section {
            opacity: 0 !important;
            transform: translateY(-100%) !important;
        }
    }
</style>