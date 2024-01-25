<template>
    <section class="hero full-width">
        <div class="logo-container">
            <Logo />
        </div>
        <div class="hero-titles">
            <h1 class="downwards first">
                Planne<span class="fill-color-element">RSVP</span>
            </h1>
            <slot name="subtitle">
                <h2 class="downwards second">Simplify your guest lists</h2>
            </slot>
            <slot name="main-copy">
                <p class="large downwards second">
                    Keep track of your events' attendees, their form
                    submissions, and their status for your next big gathering
                </p>
            </slot>
        </div>
        <div class="hero-cta-buttons downwards third">
            <PrimitivesButton>{{
                props.mainCta || "Try it out"
            }}</PrimitivesButton>
            <PrimitivesButton outlined>{{
                props.secondaryCta || "Contact sales"
            }}</PrimitivesButton>
        </div>
    </section>
</template>
<script setup lang="ts">
type Props = {
    mainCta?: string;
    secondaryCta?: string;
};

const props = defineProps<Props>();
</script>
<style scoped>
/* NO IDEA WHY POSTCSS NEEDS A TAG HERE OR IT ERRORS */
h1 {
    visibility: all;
}
</style>
