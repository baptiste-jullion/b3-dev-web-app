export default defineEventHandler(async () => {
    return (await db.getKeys("products")).length > 0;
});
