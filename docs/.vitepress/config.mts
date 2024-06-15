import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'wds08',
  description: '个人博客',
  base: '/blogs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'This指向', link: '/js/this' },
          { text: 'Utils集合', link: '/js/utils' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'Vue',
        items: [
          { text: '概念解释', link: '/vue/noun-explain' },
          { text: 'Composition API', link: '/vue/composition-api' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
