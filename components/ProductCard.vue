<template>
    <UCard>
        <template #header>
            <p>{{ product.name }}</p>
        </template>

        <img
            :src="product.image"
            alt=""
            lazy
            class="object-cover aspect-square rounded-lg"
        />

        <template #footer>
            <UButton
                v-if="!isInCart(product)"
                icon="i-lucide-shopping-cart"
                @click="addToCart(product)"
            >
                Add to cart
            </UButton>
            <UButton
                v-else
                icon="i-lucide-trash-2"
                variant="soft"
                color="error"
                @click="removeFromCart(product)"
            >
                Remove from cart
            </UButton>
        </template>
    </UCard>
</template>

<script setup lang="ts">
const { addToCart, removeFromCart, isInCart } = useCart();

defineProps<{
    product: ProductRead;
}>();
</script>
