<template>
    <div class="flex gap-4 items-center">
        <UButton
            @click="generateProducts()"
            :loading="generateStatus === 'pending'"
            :disabled="alreadyGenerated"
        >
            Generate 200 random products
        </UButton>
        <UTooltip text="Only available with FS driver">
            <UButton
                @click="clearDatabase()"
                :loading="clearStatus === 'pending'"
                color="error"
                :disabled="!alreadyGenerated || true"
            >
                Clear database
            </UButton>
        </UTooltip>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ["auth"],
});

const toast = useToast();

const { data: alreadyGenerated, refresh: alreadyGeneratedRefresh } = useFetch(
    "/api/products/generated",
);

const onGenerate = async (ok: boolean) => {
    if (!ok) {
        toast.add({
            title: "Error",
            description: "Failed to generate products",
            color: "error",
        });
        return;
    }
    toast.add({
        title: "Products generated",
        description: "200 random products have been generated",
        color: "success",
    });
    await alreadyGeneratedRefresh();
};

const { status: generateStatus, execute: generateProducts } = useFetch(
    "/api/products/bulk/generate",
    {
        method: "POST",
        immediate: false,
        onResponse: ({ response }) => onGenerate(response.ok),
    },
);

const onClear = async (ok: boolean) => {
    if (!ok) {
        toast.add({
            title: "Error",
            description: "Failed to clear database",
            color: "error",
        });
        return;
    }
    toast.add({
        title: "Database cleared",
        description: "Database has been cleared",
        color: "success",
    });
    await alreadyGeneratedRefresh();
};

const { status: clearStatus, execute: clearDatabase } = useFetch(
    "/api/products/bulk/clear",
    {
        method: "DELETE",
        immediate: false,
        onResponse: ({ response }) => onClear(response.ok),
    },
);
</script>
