// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/lumecss.min.css' }
      ],
      script: [
        { src: '/lumecss.min.js', type: 'text/javascript', defer: true }
      ]
    }
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-preset-env': {
        stage: 1,
      },
    },
  },
})
