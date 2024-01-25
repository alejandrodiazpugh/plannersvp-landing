<template>
    <Header />
    <main class="content-grid">
        <Hero />
        <MainBanner />
        <WebsiteQuote />
        <WebsiteAddWidget />
        <MainForm />
    </main>
    <Footer />
</template>
<script setup lang="ts">
useHead({
    title: "PlanneRSVP",
    meta: [
        {
            name: "description",
            content:
                "Create and manage your events guest lists with a simple click.",
        },
    ],
});
useRoute;
</script>

<style scoped></style>
