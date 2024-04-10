export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/main.scss'],
	modules: [
		'@nuxt/content',
		'@nuxt/image',
		'nuxt-icon',
		'nuxt-headlessui'
	],
	content: {
		markdown: {
			toc: {
				depth: 1
			}
		}
	},
	image: {
		provider: 'directus',
		directus: {
			baseURL: `${process.env.DIRECTUS_URL}/assets/`,
		}
	},
	headlessui: {
        prefix: 'H'
    }
})
