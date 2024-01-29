<template>
    <article class="card">
        <div class="title">
            <h3>{{ props.title }}</h3>
            <Icon v-if="props.icon" :name="props.icon" size="36px" />
        </div>
        <slot />
    </article>
</template>
<script setup lang="ts">
type Props = {
    title: string;
    icon?: string;
};

const props = defineProps<Props>();
</script>
<style scoped>
.card {
    width: 300px;
    flex-shrink: 0;
    aspect-ratio: 1;
    border-radius: 15px;
    background-color: var(--dark);
    padding-block: 27px;
    padding-inline: 23px;
    text-align: left;
    box-shadow: 0px 0px 40px var(--light-100);
    transition: 400ms all ease-in;
    cursor: default;
}

.title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
}

.card:hover,
.card:focus-within {
    box-shadow: 0px 0px 60px var(--light-100);
    transform: translateY(-20px);
}
</style>
