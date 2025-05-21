// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@vueuse/nuxt"],
    css: ["~/assets/css/main.css"],

    runtimeConfig: {
        SECRET: "",
        public: {
            AUTH_COOKIE_NAME: "",
        },
    },

    // in order to handle shared folder auto import
    future: {
        compatibilityVersion: 4,
    },

    // nitro: {
    //     storage: {
    //         db: {
    //             driver: "fs",
    //             base: "db",
    //         },
    //     },
    // },
});
