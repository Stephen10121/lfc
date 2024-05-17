<script lang="ts">
    export let icon: string;
    export let iconAlt = "Icon of a card.";
    export let title: string;
    export let p: string;
</script>

<div>
    <img src={icon} alt={iconAlt} width="40" height="40" />
    <h3 class="arimo">{title}</h3>
    <p class="arimo">{p}</p>
</div>

<style>
    div {
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
        justify-content: space-evenly;
    }

    h3 {
        font-weight: 700;
        color: #000000;
        font-size: 21px;
        line-height: 35px;
    }

    p {
        font-weight: normal;
        color: #6B7280;
        font-size: 14px;
        line-height: 20px;
    }
</style>