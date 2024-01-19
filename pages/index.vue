<template>
    <main class="main">
        <div
            class="custom-cursor"
            :style="`left: ${mouseCoords.x}px; top: ${mouseCoords.y}px`"
            ref="customCursor"
        ></div>
        <article class="hook">
            <PrimitivesMainTitle
                >Planne<span class="blue">rsvp</span></PrimitivesMainTitle
            >
            <h2 class="uppercase">Simplify your guestlists</h2>
            <h2 class="uppercase">This is the dev branch</h2>
        </article>
    </main>
</template>
<script setup lang="ts">
const mouseCoords = reactive({ x: 0, y: 0 });
const customCursor = ref(null) as Ref<null | HTMLDivElement>;

function getMouseCoords(e: MouseEvent) {
    mouseCoords.x = e.clientX;
    mouseCoords.y = e.clientY;
}
onBeforeMount(() => {
    document.addEventListener("mousemove", getMouseCoords);
});

onBeforeUnmount(() => {
    document.removeEventListener("mousemove", getMouseCoords);
});
</script>
<style scoped>
.main {
    display: flex;
    height: 100svh;
    justify-content: center;
    align-items: center;
    cursor: none;
}

.hook {
    text-align: center;
}

.custom-cursor {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 50%;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(
        -50%,
        -50%
    ); /* Center the cursor on the mouse pointer */
}
</style>
