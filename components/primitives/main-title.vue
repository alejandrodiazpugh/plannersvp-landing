<template>
	<h1 class="title">
		<slot />
	</h1>
</template>
<script setup lang="ts"></script>
<style scoped>
.title {
	font-size: 72px;
	color: white;
	text-transform: uppercase;
	letter-spacing: 10px;
}
</style>
