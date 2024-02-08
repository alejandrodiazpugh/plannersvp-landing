<template>
	<section class="widget-integration">
		<slot name="title">
			<h2>...or maybe you already have one</h2>
		</slot>
		<slot name="copy-text">
			<p class="large">
				<!-- You can also seamlessly integrate our widget into your site, and
                manage your guest list through our app. -->
				You'll also be able to seamlessly integrate our widget into your
				site, and manage your guest list through our app
			</p>
		</slot>
		<!-- <PrimitivesButton outlined>{{
			props.buttonText || "We'll show you how"
		}}</PrimitivesButton> -->
	</section>
</template>
<script setup lang="ts">
type Props = {
	buttonText?: string;
};

const props = defineProps<Props>();
</script>
<style scoped>
.widget-integration {
	text-align: center;
	margin-top: 72px;
}

.widget-integration h2 {
	max-width: 400px;
	margin-inline: auto;
}

.widget-integration p {
	max-width: 600px;
	margin-inline: auto;
	margin-top: 24px;
	margin-bottom: 48px;
}
</style>
