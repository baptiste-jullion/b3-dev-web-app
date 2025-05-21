export default defineNuxtRouteMiddleware(async () => {
    const { AUTH_COOKIE_NAME } = useRuntimeConfig().public;

    const cookie = useCookie(AUTH_COOKIE_NAME);

    const toast = useToast();
    if (!cookie.value) {
        toast.add({
            title: "Unauthorized",
            description: "You are not authorized to access this page.",
            color: "error",
        });
        return navigateTo("/login");
    }

    const { status } = await useFetch("/api/auth/check-password", {
        method: "POST",
        body: { password: cookie.value },
    });

    if (status.value === "error") {
        return navigateTo("/login");
    }
});
