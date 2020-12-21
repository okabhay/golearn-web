export default {
  head: {
    title: 'GoLearn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  pwa: {
    manifest: {
      name: 'GoLearn - A best learning app.',
      short_name: 'GoLearn',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },

  components: {
    dirs: [
      '~/components',
        {
          path: '~/components/Header/'
        },
        {
          path: '~/components/Shared/Button/'
        }
    ]
  },

  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
  ],
}