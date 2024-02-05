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
			:pattern="rules.name" />
		<PrimitivesInput
			label="Last Name"
			required
			class="grid-1"
			type="name"
			error="Last Name must be valid"
			:pattern="rules.name" />
		<PrimitivesInput
			label="Email"
			required
			class="grid-2"
			type="email"
			error="Must be a valid email address"
			:pattern="rules.email" />
		<PrimitivesDatePicker
			class="grid-2"
			name="When is your event?"
			locale=""
			required
			@input-change="(e) => (quoteData.date = e)" />
		<PrimitivesToggleGroup
			label="Do you have a registered domain for your event?"
			:items="toggleItems" />
		<PrimitivesToggleGroup
			label="Do you have a hosting plan for your website?"
			:items="toggleItems" />
		<PrimitivesToggleGroup
			label="Do you have a design for your event already in place?"
			:items="toggleItems" />
		<PrimitivesToggleGroup
			label="Do you have a art assets for your event (icons, images,
				drawings, etc)?"
			:items="toggleItems" />

		<PrimitivesButton class="grid-2">Send</PrimitivesButton>
	</form>
</template>

<script setup lang="ts">
import type { ToggleItem } from '../primitives/toggle-group.vue';

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

const quoteData = reactive({
	firstName: '',
	lastName: '',
	email: '',
	attendance: '',
	date: '',
	hasAssets: false,
});
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
