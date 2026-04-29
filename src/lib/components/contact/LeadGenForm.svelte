<script lang="ts">
    import { contactForm } from "../../../routes/contact/contact.remote";
    import { toast } from "svelte-sonner";
    import { turnstileWidgetId } from "@/store.js";

    let { turnstileSiteToken }: { turnstileSiteToken: string } = $props();
</script>

<div class="lg:col-span-7 bg-white p-5 sm:p-[48px] border border-outline-variant shadow-sm">
    <h2 class="font-headline-lg text-headline-lg mb-8 uppercase text-on-background">Project Details</h2>

    <form {...contactForm.enhance(async ({ submit, form }) => {
        let savingChanges = toast.loading("Sending.", { duration: Number.POSITIVE_INFINITY });
        try {
            await submit();
            form.reset();
            toast.dismiss(savingChanges);

            //@ts-ignore
            turnstile.reset($turnstileWidgetId);

            if (!contactForm.fields.allIssues()) {
                toast.success("Thank you for your message.", { description: "We will contact you soon!" });
            }
        } catch (err) {
            console.log(err);
            toast.dismiss(savingChanges);
            toast.error("Failed to send message.", { description: "Please try again later." });
        }
    })} class="space-y-6">
        {#if turnstileSiteToken}
            <input {...contactForm.fields.turnStileToken.as("hidden", turnstileSiteToken)} />
        {/if}
        
        <div>
            {#each contactForm.fields.turnStileToken.issues() as issue}
                <p class="text-red-500 text-sm">{issue.message}</p>
            {/each}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
                <label for="name" class="font-label-md text-label-md uppercase text-on-surface-variant">Full Name</label>
                <input id="name" {...contactForm.fields.name.as("text")} class="w-full p-md border border-outline focus:border-primary focus:ring-0 rounded-none bg-surface-container-lowest transition-all" placeholder="John Doe" type="text"/>
                {#each contactForm.fields.name.issues() as issue}
                    <p class="text-red-500 text-sm">{issue.message}</p>
                {/each}
            </div>

            <div class="space-y-2">
                <label for="email" class="font-label-md text-label-md uppercase text-on-surface-variant">Email Address</label>
                <input id="email" {...contactForm.fields.email.as("email")} class="w-full p-md border border-outline focus:border-primary focus:ring-0 rounded-none bg-surface-container-lowest transition-all" placeholder="john@example.com" type="email"/>
                {#each contactForm.fields.email.issues() as issue}
                    <p class="text-red-500 text-sm">{issue.message}</p>
                {/each}
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
                <label for="phone" class="font-label-md text-label-md uppercase text-on-surface-variant">Phone Number</label>
                <input id="phone" {...contactForm.fields.phone.as("tel")} class="w-full p-md border border-outline focus:border-primary focus:ring-0 rounded-none bg-surface-container-lowest transition-all" placeholder="(555) 000-0000" type="tel"/>
                {#each contactForm.fields.phone.issues() as issue}
                    <p class="text-red-500 text-sm">{issue.message}</p>
                {/each}
            </div>

            <div class="space-y-2">
                <label for="location" class="font-label-md text-label-md uppercase text-on-surface-variant">Project Location (City/Zip)</label>
                <input id="location" {...contactForm.fields.location.as("text")} class="w-full p-md border border-outline focus:border-primary focus:ring-0 rounded-none bg-surface-container-lowest transition-all" placeholder="Austin, TX 78701" type="text"/>
                {#each contactForm.fields.location.issues() as issue}
                    <p class="text-red-500 text-sm">{issue.message}</p>
                {/each}
            </div>
        </div>

        <div class="space-y-2">
            <p class="font-label-md text-label-md uppercase text-on-surface-variant">Fence Type Interested In</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <label class="flex items-center space-x-2 cursor-pointer group">
                    <input class="w-5 h-5 text-primary border-outline focus:ring-primary rounded-none" {...contactForm.fields.fenceInterestedIn.as("checkbox", "cedar")} />
                    <span class="font-label-sm text-label-sm text-on-surface">Cedar Wood</span>
                </label>

                <label class="flex items-center space-x-2 cursor-pointer group">
                    <input class="w-5 h-5 text-primary border-outline focus:ring-primary rounded-none" {...contactForm.fields.fenceInterestedIn.as("checkbox", "ornamental-iron")} />
                    <span class="font-label-sm text-label-sm text-on-surface">Ornamental Iron</span>
                </label>

                <label class="flex items-center space-x-2 cursor-pointer group">
                    <input class="w-5 h-5 text-primary border-outline focus:ring-primary rounded-none" {...contactForm.fields.fenceInterestedIn.as("checkbox", "vinyl-pvc")} />
                    <span class="font-label-sm text-label-sm text-on-surface">Vinyl/PVC</span>
                </label>

                <label class="flex items-center space-x-2 cursor-pointer group">
                    <input class="w-5 h-5 text-primary border-outline focus:ring-primary rounded-none" {...contactForm.fields.fenceInterestedIn.as("checkbox", "chain-link")} />
                    <span class="font-label-sm text-label-sm text-on-surface">Chain Link</span>
                </label>
            </div>
        </div>

        <div class="space-y-2">
            <label for="apxfootage" class="font-label-md text-label-md uppercase text-on-surface-variant">Approximate Footage</label>
            <input id="apxfootage" {...contactForm.fields.approximateFootage.as("text")} class="w-full p-md border border-outline focus:border-primary focus:ring-0 rounded-none bg-surface-container-lowest transition-all" placeholder="e.g. 150 linear feet" type="text"/>
            {#each contactForm.fields.approximateFootage.issues() as issue}
                <p class="text-red-500 text-sm">{issue.message}</p>
            {/each}
        </div>

        <div class="space-y-2">
            <label for="message" class="font-label-md text-label-md uppercase text-on-surface-variant">Project Description</label>
            <textarea id="message" {...contactForm.fields.message.as("text")} class="w-full p-md border border-outline focus:border-primary focus:ring-0 rounded-none bg-surface-container-lowest transition-border" placeholder="Tell us about your project goals, any removal needs, and specific height requirements." rows="4"></textarea>
            {#each contactForm.fields.message.issues() as issue}
                <p class="text-red-500 text-sm">{issue.message}</p>
            {/each}
        </div>

        <button class="w-full bg-primary text-white font-bold py-lg uppercase tracking-widest hover:bg-zinc-900 transition-colors active:scale-[0.99] transform" type="submit">
            Submit Quote Request
        </button>
    </form>
</div>

<style>
    input[type="checkbox"] {
        accent-color: #d69c42;
    }
</style>