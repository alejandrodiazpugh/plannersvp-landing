<template>
	<form class="quote-form">
		<PrimitivesInput label="Name" required class="grid-1" />
		<PrimitivesInput label="Last Name" required class="grid-1" />
		<PrimitivesInput label="Email" required class="grid-2" />
		<PrimitivesDatePicker
			class="grid-2"
			name="When is your event?"
			locale=""
			required
			@input-change="(e) => (quoteData.date = e)" />
		<div class="grid-2 input-section toggle-section">
			<label>Do you have a registered domain for your event?</label>
			<PrimitivesToggleGroup :items="toggleItems" />
		</div>
		<div class="grid-2 input-section toggle-section">
			<label>Do you have a hosting plan for your website?</label>
			<PrimitivesToggleGroup :items="toggleItems" />
		</div>
		<div class="grid-2 input-section toggle-section">
			<label>Do you have a design for your event already in place?</label>
			<PrimitivesToggleGroup :items="toggleItems" />
		</div>
		<div class="grid-2 input-section toggle-section">
			<label
				>Do you have a art assets for your event (icons, images,
				drawings, etc)?</label
			>
			<PrimitivesToggleGroup :items="toggleItems" />
		</div>
		<PrimitivesButton class="grid-2">Send</PrimitivesButton>
	</form>
</template>

<script setup lang="ts">
import type { ToggleItem } from '../primitives/toggle-group.vue';

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

.toggle-section > * {
	width: 100%;
}

.toggle-section:last-of-type {
	margin-bottom: 20px;
}
</style>
