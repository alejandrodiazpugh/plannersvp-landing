<template>
	<Header />
	<main class="main">
		<Hero />
		<MainBanner />
		<WebsiteQuote />
		<WebsiteAddWidget />
		<MainForm />
	</main>
	<Footer />
</template>
<script setup lang="ts">
useHead({
	title: 'PlanneRSVP',
	meta: [
		{
			name: 'description',
			content:
				'Create and manage your events guest lists with a simple click.',
		},
	],
});
</script>
<style scoped>
.main {
	padding-bottom: 100px;
}
</style>
