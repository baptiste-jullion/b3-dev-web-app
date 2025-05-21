export default defineEventHandler(async (event) => {
    const { AUTH_COOKIE_NAME } = useRuntimeConfig().public;
    const { password } = await readValidatedBody(event, ZCredentials.parse);

    await $fetch("/api/auth/check-password", {
        method: "POST",
        body: { password },
    });

    setCookie(event, AUTH_COOKIE_NAME, password, {
        maxAge: 60 * 60, // 1 hour
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));
});
