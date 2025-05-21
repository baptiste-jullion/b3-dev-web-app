<template>
    <UInput
        v-model="search"
        icon="i-lucide-search"
        placeholder="Type to search a product..."
        size="xl"
        class="w-full"
    />
    <section
        v-if="filteredProducts?.length"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8"
    >
        <UCard v-for="product in filteredProducts" :key="product.id">
            <template #header>
                <p>{{ product.name }}</p>
            </template>

            <img
                :src="product.image"
                alt=""
                lazy
                class="object-cover aspect-square rounded-lg"
            />
        </UCard>
    </section>
    <section
        v-else
        class="p-8 h-96 flex flex-col items-center justify-center rounded-lg border border-neutral-300 border-dashed mt-8 text-center"
    >
        <p class="text-xl">No products found</p>
        <p>
            You're an admin? Generate some products
            <UButton variant="soft" to="/admin">here</UButton>
        </p>
    </section>
</template>

<script setup lang="ts">
import { useFuse } from "@vueuse/integrations/useFuse";

const search = ref("");

const { data: products } = await useAsyncData("products", () =>
    $fetch("/api/products"),
);

const { results } = useFuse(search, products.value || [], {
    fuseOptions: { keys: ["name", "description"], threshold: 0.3 },
    matchAllWhenSearchEmpty: true,
});

const filteredProducts = computed(() => {
    return results.value.map((result) => result.item);
});
</script>
