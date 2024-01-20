<template>
	<section class="main-banner">
		<h2>Wait, how many people have confirmed?</h2>
		<p class="large">
			Organizing events can be exhausting. We created
			<span class="blue-200">PlanneRSVP</span> to create, manage, and
			process your guest list invitations in no time.
		</p>
		<div class="card-container">
			<PrimitivesCard
				v-for="card in cards"
				:key="card.title"
				:title="card.title">
				<p>{{ card.text }}</p>
			</PrimitivesCard>
		</div>
	</section>
</template>
<script setup lang="ts">
const cards = [
	{
		title: 'Create',
		text: 'Set up an event, number of guests, and upload your list.',
	},
	{
		title: 'Manage',
		text: 'Add the RSVP form, embed it to a website, or send it directly to them',
	},
	{
		title: 'Process',
		text: 'Track guests responses, their form submissions, and more!',
	},
];
</script>
<style scoped>
.main-banner {
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 22px;
}

.main-banner > p {
	margin-inline: auto;
	max-width: 450px;
}

.card-container {
	margin-top: 76px;
	display: flex;
	justify-content: center;
	gap: 50px;
}
</style>
