<template>
    <UContainer>
        <header>
            <div class="flex items-center gap-2 my-4 justify-center">
                <img class="size-10" src="/favicon.ico" alt="" />
                <h1 class="text-5xl font-bold">Click’n’Nuxt</h1>
            </div>
            <UNavigationMenu color="neutral" :items="items" class="w-full" />
        </header>
        <NuxtPage />
    </UContainer>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: "Home",
            icon: "i-lucide-home",
            to: "/",
        },
        {
            label: "Admin",
            icon: "i-lucide-user",
            to: "/admin",
        },
        {
            label: "Cart",
            icon: "i-lucide-shopping-cart",
            to: "/cart",
        },
    ],
]);
</script>
