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
</style>
