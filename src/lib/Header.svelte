<script lang="ts">
    import Menu from "./Menu.svelte";
    import logo from "../lib/assets/logo.png";

    import { page } from "$app/stores";
    import OverflowMenu from "./OverflowMenu.svelte";
    let cl = "show";

    let prevScrollPos = 0;
    function scrolling(event: any) {
        let currentScrollPos = event.target.scrollingElement.scrollTop;
        if(currentScrollPos > 250) {
            if (currentScrollPos < prevScrollPos) {
                cl = "show";
            } else {
                cl = "hide";
            }
        } else {
            cl = "show";
        }
        prevScrollPos = currentScrollPos;
    }
</script>

<svelte:window on:scroll={scrolling} />

<header class={cl}>
    <img height="42.5" width="125" src={logo} alt="LFC Logo" />
    <nav class="links">
        <a class="arimo {$page.url.pathname==="/" ? "selected" : "non"}" href="/">Home</a>
        <a class="arimo {$page.url.pathname==="/about" ? "selected" : "non"}" href="/about">About Us</a>
        <a class="arimo {$page.url.pathname.includes("/services") ? "selected" : "non"}" href="/services">
            Services ▾
            <span class="nested" style="display: none;">
                <nav>
                    <a class="arimo {$page.url.pathname==="/services/cedar" ? "selected" : "non"}" href="/services/cedar">Cedar Privacy Fences</a>
                    <a class="arimo {$page.url.pathname==="/services/chain-link" ? "selected" : "non"}" href="/services/chain-link">Chain-link Fences</a>
                    <a class="arimo {$page.url.pathname==="/services/vinyl" ? "selected" : "non"}" href="/services/vinyl">Vinyl Fence/PVC Rail Fences</a>
                    <a class="arimo {$page.url.pathname==="/services/custom" ? "selected" : "non"}" href="/services/custom">Custom Design Fences</a>
                </nav>
            </span>
        </a>
        <a class="arimo {$page.url.pathname==="/gallery" ? "selected" : "non"}" href="/gallery">Gallery</a>
        <a class="arimo {$page.url.pathname==="/contact" ? "selected" : "non"}" href="/contact?r=l">Contact</a>
    </nav>
    <div class="menu">
        <Menu color="#D79D40" />
    </div>
    <a class="arimo fancy" href="tel:360-784-3128" target="_blank">Give us a Call!</a>
    <OverflowMenu />
</header>

<style>
    header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 100px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.589);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px;
        z-index: 200;
        transition: transform 0.1s linear 0.5s;
    }

    header.hide {
        transform: translate(0, -100%);
        transition: transform 0.1s linear 0.5s;
    }

    header.show {
        transform: translate(0, 0);
        transition: transform 0.1s linear 0.2s;
    }

    .menu {
        display: block;
    }

    nav {
        display: none;
        align-items: center;
        gap: 25px;
    }

    nav a {
        font-weight: 600;
        color: #ffffff;
        font-size: 15px;
        line-height: 20px;
        box-shadow: none;
        text-decoration: none;
        position: relative;
        transition: box-shadow 0.1s linear, color 0.1s linear;
    }

    a.selected {
        color: #D79D40;
        box-shadow: 0 1px 0 #D79D40;
    }

    a:hover .nested{
        display: block !important;
    }

    .nested {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 100%);
        width: fit-content;
    }

    .nested nav {
        display: flex;
        flex-direction: column;
        text-wrap: nowrap;
        align-items: flex-start;
        gap: 10px;
        background-color: rgba(0, 0, 0, 0.589);
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
    }

    .fancy {
        font-weight: 600;
        color: #000000;
        font-size: 13px;
        text-decoration: none;
        background-color: #D79D40;
        display: none;
        width: fit-content;
        padding: 6px 12px;
        border-radius: 6px;
    }

    @media screen and (min-width: 1000px) {
        header {
            padding: 20px 150px;
        }

        .fancy {
            display: block;
        }

        nav {
            display: flex;
        }

        .menu {
            display: none;
        }
    }
</style>