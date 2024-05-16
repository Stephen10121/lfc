<script lang="ts">
    import star from "../lib/assets/star.svg";
    export let who: string;
    export let what: string;
</script>

<div class="review">
    <h3>{who}</h3>
    <div class="stars">
        <img src={star} alt="A star because the reviewer gave a star." width="30" height="30" />
        <img src={star} alt="A star because the reviewer gave a star." width="30" height="30" />
        <img src={star} alt="A star because the reviewer gave a star." width="30" height="30" />
        <img src={star} alt="A star because the reviewer gave a star." width="30" height="30" />
        <img src={star} alt="A star because the reviewer gave a star." width="30" height="30" />
    </div>
    <p>{what}</p>
</div>

<style>
    .review {
        width: 100%;
        height: 217px;
        padding: 24px;
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        border-radius: 10px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .stars {
        display: flex;
        gap: 10px;
    }

    h3 {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        color: #000000;
        font-size: 21px;
        line-height: 35px;
    }

    p {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
        color: #6B7280;
        font-size: 14px;
        line-height: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>