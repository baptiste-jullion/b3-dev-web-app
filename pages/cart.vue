<template>
    <ul v-if="Object.keys(cart).length">
        <li
            v-for="item of cart"
            :key="item.id"
            class="flex items-center justify-between p-4 border-b border-neutral-300"
        >
            {{ item.name }}

            <UButton
                icon="i-lucide-trash-2"
                variant="soft"
                color="error"
                @click="removeFromCart(item)"
            >
                Remove from cart
            </UButton>
        </li>
    </ul>
    <section
        v-else
        class="p-8 h-96 flex flex-col items-center justify-center rounded-lg border border-neutral-300 border-dashed mt-8 text-center"
    >
        <p class="text-xl">No products in cart</p>
        <p>
            You can add products to the cart from the
            <UButton variant="soft" to="/">product list</UButton>
        </p>
    </section>
</template>

<script setup lang="ts">
const { cart, removeFromCart } = useCart();
</script>
