module.exports = {
  head: {
    title: '하루하루',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' },
    ]
  },
  css: [
    "~/assets/fonts/godo/godo.css",
    "~/assets/scss/home.scss",
  ],
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/axios',
  ],
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    minify: {
      collapseWhitespace: true,
      removeRedundantAttributes: false,
    }
  },
}
