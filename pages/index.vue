<template>
	<main class="main">
		<Hero> </Hero>
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
.hook {
	text-align: center;
}

.custom-cursor {
	position: absolute;
	width: 200px;
	height: 200px;
	background-color: var(--light);
	border-radius: 50%;
	mix-blend-mode: exclusion;
	pointer-events: none;
	transform: translate(
		-50%,
		-50%
	); /* Center the cursor on the mouse pointer */
}
</style>
