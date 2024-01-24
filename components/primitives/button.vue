<template>
    <button
        type="button"
        class="button"
        :disabled="props.disabled"
        :class="props.outlined ? 'button-outlined' : ''"
    >
        <span>
            <Icon
                v-if="props.icon"
                :name="props.icon"
                :class="props.outlined ? 'outlined-icon' : 'icon'"
            />
            <slot />
        </span>
    </button>
</template>
<script setup lang="ts">
type Props = {
    icon?: string;
    outlined?: boolean;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
};

const props = defineProps<Props>();
const emit = defineEmits(["buttonClick"]);
</script>
<style scoped>
.button {
    background-color: var(--blue-200);
    outline: none;
    border: none;
    border-radius: 30px;
    padding: 10px 30px;
    font-size: 24px;
    color: var(--light);
    font-weight: 600;
    cursor: pointer;
    transition: 400ms all;
    /* box-shadow: 0px 0px 10px var(--blue-200); */
}
.button > span {
    transition: 300ms all;
}

.button:hover,
.button:focus-visible {
    box-shadow: 0px 0px 10px var(--blue-200);
}

.button:active {
    box-shadow: none;
}

.button:disabled {
    background-color: var(--main-disabled);
    cursor: default;
    pointer-events: none;
}

.button-outlined {
    background-color: transparent;
    outline: 2px solid var(--blue-200);
    color: var(--blue-200);
    transition: 300ms all;
    /* text-shadow: 0px 0px 10px var(--blue-200);
    box-shadow: 0px 0px 10px var(--blue-200); */
}

.button-outlined:hover,
.button-outlined:focus-visible {
    text-shadow: 0px 0px 10px var(--blue-200);
    box-shadow: 0px 0px 10px var(--blue-200);

    background-color: transparent;
}

.button-outlined:disabled {
    background-color: transparent;
    color: var(--main-disabled);
    outline-color: var(--main-disabled);
}
</style>
