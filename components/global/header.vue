<template>
    <header class="header">
        <PrimitivesButton outlined class="action-button"
            >Log in</PrimitivesButton
        >
        <PrimitivesButton class="action-button">Sign up</PrimitivesButton>
    </header>
</template>
<script setup lang="ts"></script>
<style scoped>
.header {
    position: absolute;
    background: transparent;
    top: 10px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-top: 30px;
    padding-inline: 30px;
    gap: 30px;
}

.action-button {
    font-size: 16px;
    padding-inline: 20px;
    padding-block: 6px;
}
</style>
