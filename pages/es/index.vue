<template>
    <Header />
    <main class="content-grid">
        <Hero main-cta="Quiero probarlo" secondary-cta="Contactar a ventas">
            <template #subtitle>
                <h2 class="downwards second">
                    Simplifica tus listas de invitados
                </h2>
            </template>
            <template #main-copy>
                <p class="large downwards second">
                    Mantente al corriente de los invitados a tu evento, sus
                    preferencias, y su estatus de confirmación para tu siguiente
                    reunión.
                </p>
            </template>
        </Hero>
        <MainBanner>
            <template #title>
                <h2>¿Cuánta gente te ha confirmado?</h2>
            </template>
            <template #copy-text>
                <p class="large">
                    Organizar eventos puede ser cansado. Por eso creamos
                    <span class="blue-200">PlanneRSVP</span>. Puedes crear,
                    organizar, y procesar tus listas de invitados en segundos.
                    Puedes enviar tu invitación por correo o integrarla a un
                    sitio web.
                </p>
            </template>
        </MainBanner>
        <WebsiteQuote spanish>
            <template #title>
                <h2>¿Necesitas un sitio?</h2>
            </template>
            <template #copy-text>
                <p class="large">
                    Podemos trabajar juntos para construir un gran sitio dónde
                    tus invitados pueden confirmar su asistencia y enterarse de
                    todos los detalles del evento.
                </p>
            </template>
        </WebsiteQuote>
        <WebsiteAddWidget button-text="Aquí te mostramos cómo">
            <template #title>
                <h2>...O tal vez ya tienes uno</h2>
            </template>
            <template #copy-text>
                <p class="large">
                    También puedes integrar fácilmente nuestro widget a tu
                    sitio, y gestionar tu lista de invitados a través de nuestra
                    aplicación.
                </p>
            </template>
        </WebsiteAddWidget>
        <MainForm spanish>
            <template #title>
                <h2>¿Tienes dudas?</h2>
            </template>
            <template #copy-text>
                <p class="large">
                    Llena el formulario y te responderemos lo antes posible.
                </p>
            </template>
        </MainForm>
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
</script>

<style scoped></style>
