<template>
	<section class="hero">
		<div class="background-circles"></div>
		<div class="hero-titles">
			<h1>Planne<span class="blue-200 fill-color-element">RSVP</span></h1>
			<h2>Simplify your guest lists</h2>
			<p class="large">
				Keep track of your events' attendees, their form submissions,
				and their status for your next big gathering
			</p>
		</div>
		<div class="hero-cta-buttons">
			<PrimitivesButton>Try it out</PrimitivesButton>
			<PrimitivesButton outlined>Contact sales</PrimitivesButton>
		</div>
	</section>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero {
	position: relative;
	min-height: 600px;
	display: flex;
	flex-direction: column;
	padding-inline: 100px;
	padding-block: 90px;
	gap: 44px;
	background: linear-gradient(
		180deg,
		var(--dark-200) 0%,
		rgba(24, 28, 41, 0.5) 76.5%,
		rgba(24, 28, 41, 0) 100%
	);
}

.background-circles {
	position: absolute;
	background-image: url('/svg/main-circle.svg');
	width: 550px;
	height: 100%;
	background-repeat: no-repeat;
	right: -300px;
}
.hero-titles {
	display: flex;
	flex-direction: column;
	gap: 22px;
}

.hero-titles p {
	max-width: 450px;
}
.hero-cta-buttons {
	display: flex;
	gap: 30px;
}

.fill-color-element {
	animation: fill-color-element 2s forwards;
	transform-origin: left;
	animation-delay: 1s;
	animation-timeline: scroll();
}

@keyframes fill-color-element {
	from {
		color: var(--light);
	}

	to {
		color: var(--blue-200);
	}
}
</style>
