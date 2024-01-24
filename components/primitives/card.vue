<template>
    <article class="card">
        <h3>{{ props.title }}</h3>
        <slot />
    </article>
</template>
<script setup lang="ts">
type Props = {
    title: string;
};

const props = defineProps<Props>();
</script>
<style scoped>
.card {
    width: 300px;
    aspect-ratio: 1;
    border-radius: 15px;
    background-color: var(--dark-100);
    padding-block: 27px;
    padding-inline: 23px;
    text-align: left;
    box-shadow: 0px 0px 40px var(--light-100);
}

.card h3 {
    margin-bottom: 20px;
}
</style>
