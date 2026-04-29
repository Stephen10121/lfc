<script lang="ts">
    import { Star } from "@lucide/svelte";

    let { message, from, occupation }: { message: string, from: string, occupation: string } = $props();
</script>

<div class="bg-white p-md border border-zinc-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
    <div>
        <div class="flex text-primary mb-4">
            <Star class="text-primary" />
            <Star class="text-primary" />
            <Star class="text-primary" />
            <Star class="text-primary" />
            <Star class="text-primary" />
        </div>
    
        <p class="font-body-md text-body-md text-on-surface-variant mb-lg italic">
            "{message}"
        </p>
    </div>

    <div>
        <p class="font-label-md text-label-md text-on-surface">{from}</p>
        <p class="font-label-sm text-label-sm text-zinc-500">{occupation}</p>
    </div>
</div>