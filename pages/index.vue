<template>
	<main class="main">
		<Hero />
		<MainBanner />
	</main>
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
