<template>
    <section class="main-banner" id="main-banner">
        <h2>Wait, how many people have confirmed?</h2>
        <p class="large">
            Organizing events can be exhausting. We created
            <span class="blue-200">PlanneRSVP</span> to create, manage, and
            process your guest list invitations in no time.
        </p>
        <div class="card-container" ref="container">
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

const fadeInOnScroll = () => {
    if (!container.value) return;
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0, // Adjust this threshold based on your needs
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                container.value?.classList.add("card-animation");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(container.value);
};

onMounted(() => {
    fadeInOnScroll();
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
