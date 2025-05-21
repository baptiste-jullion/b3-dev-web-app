<template>
    <UForm :schema="ZCredentials" :state @submit="execute">
        <UFormField name="password" label="Password" required>
            <UInput v-model="state.password" />
        </UFormField>
        <UButton type="submit"> Submit </UButton>
    </UForm>
</template>

<script setup lang="ts">
const toast = useToast();

const state = reactive<Partial<CredentialsWrite>>({
    password: undefined,
});

const { execute } = useFetch("/api/auth/login", {
    method: "POST",
    body: state,
    immediate: false,
    onResponse: ({ response }) => handleLoginResponse(response.ok),
});

const handleLoginResponse = (ok: boolean) => {
    if (ok) {
        toast.add({
            title: "Login successful",
            description: "You are now logged in.",
            color: "success",
        });
        return navigateTo("/admin");
    }
    toast.add({
        title: "Login failed",
        description: "Please check your credentials.",
        color: "error",
    });
};
</script>
