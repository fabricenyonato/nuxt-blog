export default {
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt forest',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400&display=swap' },
            // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&display=swap' },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/style.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontawesome',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    fontawesome: {
        icons: {
            solid: [
                'faChevronRight',
                'faMapMarkerAlt',
                'faEnvelope',
                'faPhoneAlt',
                'faLongArrowAltRight',
                'faList',
                'faTh',
                'faSearch',
                'faLongArrowAltDown',
            ],
            brands: [
                'faInstagram',
                'faFacebookF',
                'faTwitter',
            ],
        }
    },

    auth: {
        strategies: {
            local: {
                token: {
                    property: 'jwt',
                    global: true,
                    required: true,
                    type: 'Bearer',
                },
                user: {
                    property: false,
                    autoFetch: true,
                },
                endpoints: {
                    login: { url: '/auth/local', method: 'post' },
                    // logout: { url: '/api/auth/logout', method: 'post' },
                    register: { url: '/auth/local/register', method: 'post' },
                    user: { url: '/users/me', method: 'get' }
                }
            }
        }
    },

    axios: {
        baseURL: 'http://localhost:1337',
    },
}
