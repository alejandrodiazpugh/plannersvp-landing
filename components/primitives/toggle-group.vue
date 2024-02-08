<template>
	<div class="grid-2 input-section toggle-section">
		<label>{{ props.label }}</label>
		<ToggleGroupRoot v-model="toggleState" class="ToggleGroup">
			<ToggleGroupItem
				v-for="item in props.items"
				:key="item.value"
				:value="item.value"
				:aria-label="item.label"
				class="ToggleGroupItem"
				tabindex="0">
				<div class="item-content">
					<Icon :name="item.icon" size="24px" />
					<p class="item-label">{{ item.label }}</p>
				</div>
			</ToggleGroupItem>
		</ToggleGroupRoot>
	</div>
</template>

<script setup lang="ts">
export type ToggleItem = {
	value: string;
	label: string;
	icon: string;
};

type Props = {
	items: ToggleItem[];
	label: string;
};

const props = defineProps<Props>();
const emit = defineEmits(['inputChange']);
const toggleState = ref('left');

watch(toggleState, (newValue) => {
	emit('inputChange', newValue);
});
</script>
<style scoped>
.item-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
}

.item-label {
	font-size: 10px;
}
</style>
