// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/css/main.css'],
	modules: ['nuxt-icon', '@nuxt/image', 'radix-vue/nuxt'],

	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	build: {
		transpile: ['@vuepic/vue-datepicker'],
	},
	routeRules: {
		'/en': { redirect: '/' },
	},
	image: {
		quality: 80,
		format: ['webp'],
	},
});
