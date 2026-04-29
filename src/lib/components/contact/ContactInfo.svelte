<script lang="ts">
    import { ClipboardClock, Mail, Phone } from "@lucide/svelte";
</script>

<div class="bg-zinc-900 text-white p-5 sm:p-lg shadow-sm border border-zinc-800">
    <h3 class="font-headline-md text-headline-md mb-6 uppercase text-primary">Business Contact</h3>

    <div class="space-y-6">
        <div class="flex items-start gap-4">
            <Phone class="text-primary w-[24px] h-[24px] shrink-0" />

            <div>
                <p class="font-label-sm text-zinc-400 uppercase tracking-widest">Phone</p>
                <a href="tel:360-784-3128" class="font-body-md text-white text-lg underline">(360) 784-3128</a>
            </div>
        </div>

        <div class="flex items-start gap-4">
            <Mail class="text-primary w-[24px] h-[24px] shrink-0" />
            
            <div>
                <p class="font-label-sm text-zinc-400 uppercase tracking-widest">Email</p>
                <a href="mailto:thelocalfenceco@gmail.com" class="font-body-md text-white text-lg underline">thelocalfenceco@gmail.com</a>
            </div>
        </div>
        
        <div class="flex items-start gap-4">
            <ClipboardClock class="text-primary w-[24px] h-[24px] shrink-0" />

            <div>
                <p class="font-label-sm text-zinc-400 uppercase tracking-widest">Business Hours</p>
                <p class="font-body-md text-white">Mon-Sat: 8:00 AM - 6:00 PM</p>
                <p class="font-body-md text-white">Sun: Closed</p>
            </div>
        </div>
    </div>
</div>