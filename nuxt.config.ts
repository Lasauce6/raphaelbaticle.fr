import { defineNuxtConfig } from "nuxt/config"

const siteTitle = 'Raphaël Baticle'

/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({

    /**
     * * App Config
     * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
     * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
     * meta config: https://nuxt.com/docs/getting-started/seo-meta
     * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
     */
    compatibilityDate: '2026-08-02',
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },
    app: {
        head: {
            title: siteTitle, // App window nav title

            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'theme-color', content: '#121212'},
                {name: 'description', content: 'Raphaël Baticle - Développeur Web'},
                {property: 'og:title', content: siteTitle},
                {property: 'og:description', content: 'Raphaël Baticle - Développeur Web'},
                {property: 'og:image', content: 'https://raphaelbaticle.fr/logo.png'},
                {property: 'og:url', content: 'https://raphaelbaticle.fr'},
                {name: 'twitter:title', content: siteTitle},
                {name: 'twitter:description', content: 'Raphaël Baticle - Développeur Web'},
                {name: 'twitter:image', content: 'https://raphaelbaticle.fr/logo.png'},
                {name: 'twitter:card', content: 'summary_card'},
                {name: 'lang', content: 'fr'},
                // ...
            ],
            link: [
                {rel: 'manifest', href: 'pwa/manifest.json'},
                {rel: 'apple-touch-icon', href: 'logo.png'},
                {rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'},
            ],
        },
        pageTransition: {name: 'page', mode: 'out-in'}
    },

    /**
     * * Nuxt 3 Modules
     * Official modules: https://nuxt.com/modules
     */
    modules: [
        '@nuxt/content',
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
    ],

    components: {
        dirs: [
            '~/components',
            '~/components/library'
        ],
    },

    /**
     * * Tailwind CSS Config
     * Options: https://tailwindcss.nuxt.dev/getting-started/options/
     * Docs: https://tailwindcss.nuxt.dev
     */
    tailwindcss: {
        cssPath: '~/assets/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
        viewer: true, // set up the /_tailwind/ route. (Disable in production) https://tailwindcss.nuxt.dev/getting-started/options/#viewer
    },

    /**
     * * Color mode Config
     * Official module: https://nuxt.com/modules/color-mode
     */
    colorMode: {
        classSuffix: '',
        preference: 'dark',
        fallback: 'dark',
    },

    /**
     * * Runtime Config (Environment Variables)
     * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
     */
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api'
        }
    },
    content: {
    experimental: {
      sqliteConnector: 'native', // Utilise node:sqlite (intégré à Node 24)
    },
  },
})

