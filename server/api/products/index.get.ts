export default defineEventHandler(async () => {
    const keys = await db.getKeys("products");
    const products = await db.getItems(keys);

    return products.map((product) => product.value);
});
