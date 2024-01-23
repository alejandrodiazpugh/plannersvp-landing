<template>
	<section class="website-quote padding-main">
		<div class="quote-text">
			<h2>Need a website?</h2>
			<p class="large">
				Preparing for a
				<span class="blue-200">{{ currentImage.name }} </span>?
			</p>
			<p class="large">
				We can work together to build beautiful websites where your
				guests can RSVP and keep up to date with all the details.
			</p>
			<PrimitivesButton class="cta-website"
				>Get a free quote</PrimitivesButton
			>
		</div>
		<div class="image-container">
			<NuxtImg
				:src="currentImage.src"
				:alt="currentImage.name"
				class="quote-image" />
		</div>
	</section>
</template>
<script setup lang="ts">
const images = [
	{
		name: 'business event',
		src: '/images/event.jpg',
	},
	{
		name: 'wedding',
		src: '/images/wedding.jpg',
	},
	{
		name: 'party',
		src: '/images/party.jpg',
	},
];

let timer: NodeJS.Timeout;
const currentIndex = ref(0);

function startCaroussel() {
	timer = setInterval(next, 5000);
}

function next() {
	currentIndex.value += 1;
}

const currentImage = computed(() => {
	return images[Math.abs(currentIndex.value) % images.length];
});

onMounted(() => {
	startCaroussel();
});
</script>
<style scoped>
.website-quote {
	display: flex;
	flex-direction: row-reverse;
	gap: 90px;
	justify-content: center;
}

.image-container {
	border-radius: 15px;
	overflow: hidden;
	flex-basis: 50%;
	aspect-ratio: 1;
	display: flex;
}

.quote-image {
	object-fit: cover;
	transition: 0.9s all;
}

.quote-text {
	display: flex;
	flex-direction: column;
	flex-basis: 50%;
}

.quote-text h2 {
	margin-bottom: 24px;
}

.quote-text p:first-of-type {
	margin-bottom: 12px;
}
.quote-text p:last-of-type {
	margin-bottom: 72px;
}

.cta-website {
	margin-block-start: auto;
}
</style>
