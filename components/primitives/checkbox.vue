<template>
    <div class="checkbox-container">
        <label class="checkbox">
            <CheckboxRoot v-model="checkboxOne" class="checkbox-root">
                <CheckboxIndicator class="checkbox-indicator">
                    <Icon name="radix-icons:check" />
                </CheckboxIndicator>
            </CheckboxRoot>
            <span class="label">{{ props.label }}</span>
        </label>
    </div>
</template>
<script setup lang="ts">
type Props = {
    label: string;
};

const props = defineProps<Props>();
const checkboxOne = ref(false);
</script>

<style scoped>
.checkbox-container {
    display: flex;
    align-items: center;
}

.checkbox {
    display: flex;
    align-items: center;
}
</style>
