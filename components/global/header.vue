<template>
	<header class="header">
		<PrimitivesButton outlined class="action-buttton"
			>Log in</PrimitivesButton
		>
		<PrimitivesButton class="action-buttton">Sign up</PrimitivesButton>
	</header>
</template>
<script setup lang="ts"></script>
<style scoped>
.header {
	position: absolute;
	background: transparent;
	top: 10px;
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding-top: 30px;
	padding-inline: 30px;
	gap: 30px;
}

.action-button {
	font-size: 16px;
}
</style>
