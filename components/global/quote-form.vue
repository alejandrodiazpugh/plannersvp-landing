<template>
    <form class="quote-form">
        <PrimitivesInput label="Name" required />
        <PrimitivesInput label="Last Name" required />
        <PrimitivesInput label="Email" required />
        <div>
            <label>How many people are attending your event?</label>
            <PrimitivesToggleGroup :items="toggleItems" />
            <PrimitivesDatePicker label="When is your event?" />
        </div>
    </form>
</template>

<script setup lang="ts">
import type { ToggleItem } from "../primitives/toggle-group.vue";

const toggleItems: ToggleItem[] = [
    {
        value: "less than 50",
        icon: "material-symbols:person",
        label: "less than 50 people",
    },
    {
        value: "51-250",
        icon: "ic:baseline-people-alt",
        label: "51 to 250 people",
    },
    {
        value: "251+",
        icon: "ph:users-three",
        label: "More than 250 people",
    },
];
</script>
<style scoped>
.quote-form {
    display: grid;
    row-gap: 20px;
}
</style>
