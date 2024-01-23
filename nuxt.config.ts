// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/css/main.css'],
	modules: ['nuxt-icon', '@nuxt/image'],
	image: {
		quality: 80,
		format: 'webp',
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
});
