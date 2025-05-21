export default defineEventHandler(async () => {
    await db.clear();

    // Add a delay to simulate a real API call
    await new Promise((resolve) =>
        setTimeout(resolve, useFaker.number.int({ min: 500, max: 2000 })),
    );

    return {
        success: true,
    };
});
