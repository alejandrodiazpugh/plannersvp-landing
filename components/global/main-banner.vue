<template>
    <section class="main-banner content-grid" id="main-banner">
        <slot name="title">
            <h2>Wait, how many people have confirmed?</h2>
        </slot>
        <slot name="copy-text">
            <p class="large">
                Organizing events can be exhausting. We created
                <span class="blue-200">PlanneRSVP</span> to create, manage, and
                process your guest list invitations in no time.
            </p>
        </slot>
        <div class="card-container full-width" ref="container">
            <PrimitivesCard
                v-for="card in cards"
                :key="card.title"
                :icon="card.icon"
                :class="card.index"
                :title="card.title"
            >
                <p>{{ card.text }}</p>
            </PrimitivesCard>
        </div>
        <div class="divider-line"></div>
    </section>
</template>
<script setup lang="ts">
const cards = [
    {
        title: "Create",
        icon: "cil:lightbulb",
        text: "Set up an event, number of guests, and upload your list.",
        index: "first",
    },
    {
        title: "Manage",
        icon: "streamline:hand-held-tablet-writing",
        text: "Add the RSVP form, embed it to a website, or send it directly to them",
        index: "second",
    },
    {
        title: "Process",
        icon: "uis:process",
        text: "Track guests responses, their form submissions, and more!",
        index: "third",
    },
];

const container = ref(null) as Ref<null | HTMLDivElement>;

onMounted(() => {
    useIntersection(container, "card-animation");
});
</script>
<style scoped>
.main-banner {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.main-banner > p {
    margin-inline: auto;
    max-width: 450px;
}

.card-container {
    padding-top: 76px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
}

.card-animation {
    animation: downwards 4s;
}

.card-animation.second {
    animation-delay: 1s;
}
.card-animation.third {
    animation-delay: 1.5s;
}
</style>
