<script lang="ts">
    type AnimationOptions = "from-right" | "from-left" | "from-bottom" | "from-top" | "opacity-change" | "none";
    export let animationStyle: AnimationOptions = "none";
    export let animationSpeed = "0.15";
</script>

<div id="options" class="{animationStyle}" style="--transition-speed: {animationSpeed}s;">
    <slot />
</div>

<style>
    #options {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #dfdfdf;
        top: 0;
        left: 0;
        pointer-events: all;
        --transition-speed: 0.15s;
    }

    #options.none,
    #options.opacity-change {opacity: 0;pointer-events: none;}
    #options.from-right,
    #options.from-bottom,
    #options.from-top,
    #options.from-left {transition: transform var(--transition-speed) linear}
    #options.from-right {transform: translateX(-100%)}
    #options.from-left {transform: translateX(100%)}
    #options.from-bottom {transform: translateY(100%)}
    #options.from-top {transform: translateY(-100%)}
    #options.opacity-change {transition: opacity var(--transition-speed) linear}

    :global(body:has(#menuForMenuToggler001:checked) #options.from-bottom),
    :global(body:has(#menuForMenuToggler001:checked) #options.from-top) {
        transform: translateY(0);
    }
    :global(body:has(#menuForMenuToggler001:checked) #options.from-left),
    :global(body:has(#menuForMenuToggler001:checked) #options.from-right) {
        transform: translateX(0);
    }
    
    :global(body:has(#menuForMenuToggler001:checked) #options.opacity-change),
    :global(body:has(#menuForMenuToggler001:checked) #options.none) {
        opacity: 1;
        pointer-events: all;
    }
</style>