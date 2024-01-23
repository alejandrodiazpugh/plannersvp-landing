<template>
	<div class="input-section">
		<label
			>{{ props.label
			}}<span class="required" v-if="props.required">*</span>:</label
		>
		<input
			class="input"
			:required="props.required"
			:placeholder="props.placeholder || ''" />
	</div>
</template>
<script setup lang="ts">
type Props = {
	label: string;
	placeholder?: string;
	icon?: boolean;
	required?: boolean;
};

const props = defineProps<Props>();
</script>
<style scoped>
.input-section {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.input {
	border-radius: 10px;
	border: none;
	outline: 2px solid var(--blue-200);
	padding-block: 4px;
	padding-inline: 10px;
	width: 100%;
}

.input:focus {
	outline: 2px solid var(--blue-100);
}
</style>
