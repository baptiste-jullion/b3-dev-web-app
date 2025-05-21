export default defineEventHandler(async (event) => {
    const { password } = await readValidatedBody(event, ZCredentials.parse);
    const { SECRET } = useRuntimeConfig();

    if (password !== SECRET) {
        throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
            data: "Provided credentials are not valid.",
        });
    }
});
