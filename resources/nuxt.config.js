import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - client',
    title: 'client',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  // Serve to private IP for LAN access
  server: {
    host: '127.0.0.1'
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/fonts.css',
    '~assets/css/utils.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-highcharts',
    'vue-web-cam/nuxt'
  ],

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey: '6LdcFGAfAAAAAJoJBuLltjc9Q_P8-BY-40Pn4vH0', // for example
      version: '1.0.4',     // Version
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Quicksand'
      }
    },
    theme: {
      dark: false,
      themes: {
        light: {
          // primary: '#35a3fa',
          primary: '#f55258',
          // background: '#eff7ff',
          background: '#f7e5e6',
          blue: '#35a3fa',
          // orange: '#f76a6e',
          teal: '#4fbac7',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
