<template>
    <div>
        <ToggleGroupRoot v-model="toggleState" class="ToggleGroup">
            <ToggleGroupItem
                v-for="item in props.items"
                :key="item.value"
                :value="item.value"
                :aria-label="item.label"
                class="ToggleGroupItem"
            >
                <div class="item-content">
                    <Icon :name="item.icon" />
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
};

const props = defineProps<Props>();
const toggleState = ref("left");
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
