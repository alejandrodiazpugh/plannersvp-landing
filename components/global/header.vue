<template>
    <header class="header">
        <PrimitivesButton outlined class="action-button"
            >Log in</PrimitivesButton
        >
        <PrimitivesButton class="action-button">Sign up</PrimitivesButton>
        <div class="language-select">
            <Icon name="material-symbols:language" />
            <a href="/es">ES</a>
            <a href="/en">EN</a>
        </div>
    </header>
</template>
<script setup lang="ts"></script>
<style scoped>
.header {
    position: absolute;
    background: transparent;
    top: 10px;
    display: flex;
    padding-inline-end: 100px;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    padding-top: 30px;
    gap: 30px;
}

.action-button {
    font-size: 16px;
    padding-inline: 20px;
    padding-block: 6px;
}

.language-select {
    display: flex;
    align-items: center;
    gap: 10px;
}
.language-select a {
    color: var(--light-100);
}
</style>
