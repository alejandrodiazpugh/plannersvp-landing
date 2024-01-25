<template>
    <section class="hero full-width">
        <div class="logo-container">
            <Logo />
        </div>
        <div class="hero-titles">
            <h1 class="downwards first">
                Planne<span class="fill-color-element">RSVP</span>
            </h1>
            <h2 class="downwards second">Simplify your guest lists</h2>
            <p class="large downwards second">
                Keep track of your events' attendees, their form submissions,
                and their status for your next big gathering
            </p>
        </div>
        <div class="hero-cta-buttons downwards third">
            <PrimitivesButton>Try it out</PrimitivesButton>
            <PrimitivesButton outlined>Contact sales</PrimitivesButton>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero {
    width: 100vw;
    padding-inline: 100px;
    height: 100svh;
    display: flex;
    flex-direction: column;
    padding-block-start: min(200px, 10%);
    display: flex;
    flex-direction: column;
    gap: 44px;
    background: linear-gradient(
        180deg,
        var(--dark-200) 0%,
        rgba(24, 28, 41, 0.5) 76.5%,
        rgba(24, 28, 41, 0) 100%
    );
}

.logo-container {
    position: absolute;
    width: min(700px, 50vw);
    height: 100%;
    right: -18%;
}

@keyframes center {
    to {
        right: 20%;
        opacity: 0;
    }
}

.hero-titles {
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.hero-titles p {
    max-width: 450px;
}
.hero-cta-buttons {
    display: flex;
    gap: 30px;
}

.fill-color-element {
    animation: fill-color-element 2s forwards;
    transform-origin: left;
}

.downwards {
    opacity: 0;
    animation: downwards 3s forwards;
}
.first {
    animation-delay: 1s;
}

.second {
    animation-delay: 2s;
}

.third {
    animation-delay: 3s;
}

@keyframes fill-color-element {
    from {
        color: var(--light);
    }

    to {
        color: var(--blue-200);
    }
}
</style>
