<template>
	<main class="main">
		<Hero> </Hero>
	</main>
</template>
<script setup lang="ts">
const mouseCoords = reactive({ x: 0, y: 0 });
const customCursor = ref(null) as Ref<null | HTMLDivElement>;

function getMouseCoords(e: MouseEvent) {
	mouseCoords.x = e.clientX;
	mouseCoords.y = e.clientY;
}
onBeforeMount(() => {
	document.addEventListener('mousemove', getMouseCoords);
});

onBeforeUnmount(() => {
	document.removeEventListener('mousemove', getMouseCoords);
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
