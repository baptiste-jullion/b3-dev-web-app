export default defineEventHandler(async () => {
    const count = 200;

    const { commerce, number, image, string } = useFaker;

    const products: ProductRead[] = Array.from({ length: count }, () => {
        const id = string.uuid();
        return {
            category: commerce.department(),
            description: commerce.productDescription(),
            image: image.urlPicsumPhotos(),
            name: commerce.productName(),
            price: Number(commerce.price()),
            rating: number.float({ min: 0, max: 5, fractionDigits: 1 }),
            id,
        };
    });

    await db.setItems(
        products.map((product) => ({
            key: `products/${product.id}`,
            value: product,
        })),
    );

    // Add a delay to simulate a real API call
    await new Promise((resolve) =>
        setTimeout(resolve, number.int({ min: 500, max: 2000 })),
    );

    return {
        success: true,
    };
});
