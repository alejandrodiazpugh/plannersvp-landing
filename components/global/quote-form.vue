<template>
	<form class="quote-form">
		<PrimitivesInput
			label="Phone Number"
			required
			class="visnopot"
			error="Wrong format"
			type="phone"
			:pattern="rules.phone" />
		<PrimitivesInput
			label="Name"
			required
			class="grid-1"
			type="name"
			error="Name must be valid"
			@input-change="(value) => (quoteData.firstName = value)"
			:pattern="rules.name" />
		<PrimitivesInput
			label="Last Name"
			required
			class="grid-1"
			type="name"
			@input-change="(value) => (quoteData.lastName = value)"
			error="Last Name must be valid"
			:pattern="rules.name" />
		<PrimitivesInput
			label="Email"
			required
			class="grid-2"
			type="email"
			error="Must be a valid email address"
			@input-change="(value) => (quoteData.email = value)"
			:pattern="rules.email" />
		<PrimitivesDatePicker
			class="grid-2"
			name="When is your event?"
			locale=""
			required
			@input-change="(e) => (quoteData.date = e)" />
		<PrimitivesToggleGroup
			label="Do you have a registered domain for your event?"
			@input-change="(value) => (quoteData.hasDomain = value)"
			:items="toggleItems" />
		<PrimitivesToggleGroup
			label="Do you have a hosting plan for your website?"
			@input-change="(value) => (quoteData.hasHosting = value)"
			:items="toggleItems" />
		<PrimitivesToggleGroup
			@input-change="(value) => (quoteData.hasDesign = value)"
			label="Do you have a design for your event already in place?"
			:items="toggleItems" />
		<PrimitivesToggleGroup
			@input-change="(value) => (quoteData.hasAssets = value)"
			label="Do you have a art assets for your event (icons, images,
				drawings, etc)?"
			:items="toggleItems" />

		<PrimitivesButton
			:loading="formState === 'loading'"
			class="grid-2"
			@button-click="handleSendForm()"
			>Send</PrimitivesButton
		>
	</form>
</template>

<script setup lang="ts">
import type { ToggleItem } from '../primitives/toggle-group.vue';

// Emits form change - true: sent successful, false: error sending form
const emit = defineEmits(['formChange']);
const rules = useRules();
const toggleItems: ToggleItem[] = [
	{
		value: 'Yes',
		icon: 'mdi:check',
		label: 'Yes',
	},
	{
		value: 'No',
		icon: 'mdi:close',
		label: 'No',
	},
];
const formState: Ref<'unsent' | 'loading' | 'sent' | 'error'> = ref('unsent');

watch(formState, (newValue) => {
	if (newValue === 'sent' || newValue === 'error') {
		emit('formChange', newValue);
	}
});

const quoteData = reactive({
	firstName: '',
	lastName: '',
	email: '',
	date: '',
	hasDomain: false,
	hasHosting: false,
	hasDesign: false,
	hasAssets: false,
});

async function handleSendForm() {
	const values = Object.values(quoteData).filter((value) => value);
	const isFilled = values.length === Object.values(quoteData).length;
	if (!isFilled) return;

	try {
		formState.value = 'loading';
		console.log(quoteData);
	} catch (error) {
		formState.value = 'error';
	} finally {
		formState.value = 'sent';
	}
}
</script>
<style scoped>
.quote-form {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	row-gap: 20px;
	column-gap: 30px;
}

.visnopot {
	visibility: hidden;
	width: 0px;
	position: absolute;
}
</style>
