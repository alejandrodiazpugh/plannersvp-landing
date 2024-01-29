<template>
	<div class="input-section">
		<div class="input-name">
			{{ props.name
			}}<span class="required" v-if="props.required">*</span>:
		</div>
		<vue-date-picker
			v-model="dateSelected"
			model-type="MM/dd/yyyy"
			required
			:hide-navigation="['time']"
			auto-apply
			:format="format"
			hide-input-icon
			:locale="props.locale || 'en-US'"
			:min-date="new Date()"
			input-class-name="date-picker-custom input" />
	</div>
</template>
<script setup lang="ts">
type Props = {
	name: string;
	required?: boolean;
	locale: string;
};

const props = defineProps<Props>();
const emit = defineEmits(['inputChange']);

const dateSelected = ref('');

watch(dateSelected, (newValue) => {
	console.log(newValue);
	emit('inputChange', newValue);
});

const format = (date: Date) => {
	return date.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
};
</script>
<style scoped>
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
