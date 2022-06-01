import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'De Inclusiewijzer'
    },
    target: 'static',
    css: ['vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',],
    build: {
        transpile: ['vuetify'],
    },
    typescript: {
        shim: false
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    modules: [
        '@vueuse/nuxt',
    ],
})
