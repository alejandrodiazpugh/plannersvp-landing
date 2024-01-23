<template>
	<section class="main-form padding-main">
		<h2>Got questions?</h2>
		<p class="large">
			Fill out the form and we'll be sure to get back to you.
		</p>
		<form class="contact-form">
			<PrimitivesInput label="Name" placeholder="eg. Donna" required />
			<PrimitivesInput
				label="Last Name"
				placeholder="eg. Kelce"
				required />
			<PrimitivesInput
				label="Email"
				required
				placeholder="eg. Kelce"
				class="email" />
			<PrimitivesTextarea
				label="Message"
				class="textarea-override"
				placeholder="No need to be so thorough, we can discuss it later"
				:limit="120"
				required />
			<PrimitivesButton>Send</PrimitivesButton>
		</form>
	</section>
</template>
<script setup lang="ts"></script>
<style scoped>
.main-form {
	text-align: center;
	margin-top: 150px;
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.contact-form {
	padding-inline: 54px;
	padding-block: 48px;
	outline: 2px solid var(--blue-200);
	border-radius: 20px;
	margin-inline: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 36px;
	row-gap: 20px;
}

.email,
.textarea-override {
	grid-column: span 2;
}
</style>
