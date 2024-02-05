<template>
	<section class="main-form" ref="formContainer">
		<slot name="title">
			<h2>Got questions?</h2>
		</slot>
		<slot name="copy-text">
			<p class="large">
				Fill out the form and we'll be sure to get back to you.
			</p>
		</slot>
		<form class="contact-form">
			<PrimitivesInput
				:pattern="rules.name"
				error="Name must be valid"
				type="name"
				class="input-override"
				:label="!props.spanish ? 'Name' : 'Nombre'"
				placeholder="Donna"
				required />
			<PrimitivesInput
				:pattern="rules.name"
				error="Last name must be valid"
				type="name"
				class="input-override"
				:label="!props.spanish ? 'Last Name' : 'Apellido'"
				placeholder="Kelce"
				required />
			<PrimitivesInput
				:pattern="rules.email"
				error="email must be valid"
				type="email"
				:label="!props.spanish ? 'Email' : 'Correo electrónico'"
				required
				placeholder="eaglemom@chief.com"
				class="email" />
			<PrimitivesTextarea
				:label="!props.spanish ? 'Message' : 'Mensaje'"
				class="textarea-override"
				:placeholder="
					!props.spanish
						? 'No need to be so thorough, we can discuss it later'
						: 'Deja aquí tu mensaje'
				"
				:limit="120"
				required />
			<PrimitivesCheckbox
				class="checkbox-override"
				:label="
					!props.spanish
						? 'I agree to be contacted to the provided email address'
						: 'Estoy de acuerdo con que me contacten al correo que proporcioné'
				" />
			<PrimitivesButton class="form-button">{{
				props.spanish ? 'Enviar' : 'Send'
			}}</PrimitivesButton>
		</form>
	</section>
</template>
<script setup lang="ts">
type Props = {
	spanish?: boolean;
};

const rules = useRules();
const props = defineProps<Props>();
const formContainer = ref(null);
onMounted(() => {
	useIntersection(formContainer, 'downwards-animation');
});
</script>
<style scoped>
.main-form {
	text-align: center;
	margin-top: 150px;
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.contact-form {
	padding-inline: 72px;
	padding-block: 56px;
	box-shadow: 0px 0px 40px var(--light-100);
	border-radius: 20px;
	margin-inline: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 36px;
	row-gap: 20px;

	@media only screen and (max-width: 499px) {
		padding-inline: 20px;
		> .input-override {
			grid-column: span 2;
		}
	}
}

.email,
.textarea-override,
.form-button,
.checkbox-override {
	grid-column: span 2;
}
</style>
