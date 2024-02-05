<template>
	<div class="input-section">
		<label
			>{{ props.label
			}}<span class="required" v-if="props.required">*</span>:</label
		>
		<input
			class="input"
			:class="inputState === 'error' ? 'error-input' : null"
			:required="props.required"
			:placeholder="props.placeholder || ''"
			v-model="input" />
		<div class="error-container">
			<span v-if="inputState === 'error'">{{ props.error }}</span>
		</div>
	</div>
</template>
<script setup lang="ts">
type Props = {
	label: string;
	required?: boolean;
	placeholder?: string;
	type: 'name' | 'phone' | 'email' | 'numeric';
	error: string;
	pattern: RegExp;
};

const props = defineProps<Props>();

const emit = defineEmits(['inputChange', 'error']);

const input = ref('');

const inputState: Ref<'untouched' | 'error' | 'valid'> = ref('untouched');

const inputMode = computed(() => {
	switch (props.type) {
		case 'name':
			return 'text';

		case 'email':
			return 'email';
		case 'phone':
			return 'tel';
		case 'numeric':
			return 'numeric';
		default:
			return 'text';
	}
});

function formatPhone(value: string): string {
	const formatted = value
		.replace(/\D+/g, '')
		.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2 $3');
	return formatted;
}

watch(input, (newValue) => {
	if (props.type === 'phone' && newValue.length === 10) {
		input.value = formatPhone(newValue);
	}
	if (props.type === 'name' && newValue.length >= 1) {
		const capitalLetter = newValue[0].toUpperCase();
		input.value = capitalLetter + newValue.slice(1);
	}

	let match = props.pattern.test(newValue);
	if (match) {
		inputState.value = 'valid';
		emit('inputChange', newValue);
		return;
	}
	inputState.value = 'error';
});

watch(inputState, (newValue) => {
	if (newValue === 'error') {
		emit('error');
	}
});
</script>
<style scoped>
.input-section {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.error-container {
	font-size: 11px;
	height: 14px;
	color: var(--main-error);
}

.error-input {
	outline: var(--main-error) solid 2px;
}
</style>
