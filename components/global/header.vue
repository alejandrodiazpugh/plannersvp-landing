<template>
    <header class="header">
        <PrimitivesButton outlined class="action-button">{{
            isEnglish() ? "Login" : "Iniciar Sesión"
        }}</PrimitivesButton>
        <PrimitivesButton class="action-button">{{
            isEnglish() ? "Sign up" : "Inscribirme"
        }}</PrimitivesButton>
        <div class="language-select">
            <Icon name="material-symbols:language" />
            <a href="/es" :class="!isEnglish() ? 'active-language' : ''">ES</a>
            <a href="/en" :class="isEnglish() ? 'active-language' : ''">EN</a>
        </div>
    </header>
</template>
<script setup lang="ts">
const routeName = ref(useRoute().name?.toString());
const isEnglish = () => {
    if (!routeName.value || routeName.value == "index") return true;
    return false;
};
</script>
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
    text-decoration: none;
}

.active-language {
    text-decoration-line: underline !important;
    color: var(--blue-200) !important;
}
</style>
