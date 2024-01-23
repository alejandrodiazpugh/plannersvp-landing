<template>
	<div class="textarea-section">
		<label
			>{{ props.label
			}}<span class="required" v-if="props.required">*</span>:</label
		>
		<textarea
			:required="props.required"
			class="textarea"
			rows="5"
			resize
			v-model="message"
			:placeholder="props.placeholder || ''" />
		<p :class="characterCount > characterLimit ? 'limit-exceeded' : ''">
			{{ characterCount }}/{{ characterLimit }}
		</p>
	</div>
</template>
<script setup lang="ts">
type Props = {
	label: string;
	placeholder?: string;
	required?: boolean;
	counter?: boolean;
	limit?: number;
};

const message = ref('');
const characterCount = computed(() => {
	return message.value.length;
});

const characterLimit = computed(() => {
	return props.limit || 240;
});

const props = defineProps<Props>();
</script>
<style scoped>
.textarea-section {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.textarea {
	width: 100%;
	border-radius: 10px;
	border: none;
	outline: 2px solid var(--blue-200);
	padding: 10px;
	resize: none;
}

.limit-exceeded {
	color: red;
}
</style>
