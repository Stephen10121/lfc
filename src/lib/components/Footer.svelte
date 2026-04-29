<script lang="ts">
    import { Mail, Phone, Scale } from "@lucide/svelte";
</script>

<footer class="bg-zinc-900 w-full pt-16 pb-8 border-t border-zinc-800">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto font-manrope text-sm leading-relaxed">
        <div class="space-y-md">
            <div class="text-lg font-bold text-white uppercase tracking-widest">Local Fence Co</div>
            <p class="text-zinc-400">Crafting quality enclosures with professional integrity. Your local partner for premium fencing and decking.</p>
        </div>

        <div>
            <h4 class="text-white font-semibold mb-md uppercase tracking-wider">Quick Links</h4>
            <ul class="space-y-sm">
                <li><a class="text-zinc-400 hover:text-amber-500 transition-colors underline" href="/services">Services</a></li>
                <li><a class="text-zinc-400 hover:text-amber-500 transition-colors underline" href="/gallery">Gallery</a></li>
                <li><a class="text-zinc-400 hover:text-amber-500 transition-colors underline" href="/contact">Contact</a></li>
                <li><a class="text-zinc-400 hover:text-amber-500 transition-colors underline" href="/about">About</a></li>
            </ul>
        </div>

        <div>
            <h4 class="text-white font-semibold mb-md uppercase tracking-wider">Services</h4>
            <ul class="space-y-sm">
                <li><a class="text-zinc-400 hover:text-amber-500 transition-colors underline" href="/services/wood">Wood Fences</a></li>
                <li><a class="text-zinc-400 hover:text-amber-500 transition-colors underline" href="/services/chain-link">Chain Link Fences</a></li>
                <li><a class="text-zinc-400 hover:text-amber-500 transition-colors underline" href="/services/vinyl">Vinyl Fences</a></li>
            </ul>
        </div>

        <div>
            <h4 class="text-white font-semibold mb-md uppercase tracking-wider">Contact</h4>
            <ul class="space-y-sm text-zinc-400">
                <li class="flex items-center gap-xs"><Phone class="w-5 h-5 mr-2" /> <a href="tel:360-784-3128" class="underline">(360) 784-3128</a></li>
                <li class="flex items-center gap-xs"><Mail class="w-5 h-5 mr-2" /> <a href="mailto:thelocalfenceco@gmail.com" class="underline">thelocalfenceco@gmail.com</a></li>
                <li class="flex items-center gap-xs"><Scale class="w-5 h-5 mr-2" /> WA LIC# LOCALFC775JP</li>
            </ul>
        </div>
    </div>

    <div class="mt-16 border-t border-zinc-800 pt-8 text-center text-zinc-500 max-w-7xl mx-auto px-8">
        <p>© {(new Date()).getFullYear()} <a href="https://stephengruzin.dev" class="underline" target="_blank">stephengruzin.dev</a></p>
    </div>
</footer>