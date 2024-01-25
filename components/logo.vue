<template>
    <div class="outer-circle-thin">
        <div class="inner-circle-thin"></div>
        <div class="inner-circle-thick"></div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.outer-circle-thin {
    --circle-color: var(--blue-300);
    background-color: transparent;
    outline: 2px solid var(--circle-color);
    border-radius: 50%;
    width: 100%;
    margin: 50px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: pulse 3s infinite;
}

.inner-circle-thin {
    --circle-color: var(--blue-200);
    width: 70%;
    aspect-ratio: 1;
    border-radius: 50%;
    outline: 2px solid var(--circle-color);
    position: absolute;
    animation: pulse 3s infinite;
    animation-delay: 1s;
}

.inner-circle-thick {
    --circle-color: var(--blue-100);

    border: 20px solid var(--circle-color);
    position: absolute;
    width: 25%;
    aspect-ratio: 1;
    border-radius: 50%;
    animation: pulse 3s infinite;
    animation-delay: 2s;
}

@keyframes pulse {
    0%,
    40% {
        box-shadow: 0 0 0 0px var(--circle-color);
    }
    100% {
        box-shadow: 0 0 0 30px var(--dark-200);
    }
}
</style>
