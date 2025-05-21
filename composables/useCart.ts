export default function useCart() {
    const cart = useLocalStorage<Record<string, ProductRead>>("cart", {});

    const addToCart = (product: ProductRead) => {
        cart.value[product.id] = product;
    };

    const removeFromCart = (product: ProductRead) => {
        delete cart.value[product.id];
    };

    const clearCart = () => {
        cart.value = {};
    };

    const isInCart = (product: ProductRead) => {
        return product.id in cart.value;
    };

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
    };
}
