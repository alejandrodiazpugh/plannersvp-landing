<template>
	<DialogRoot>
		<DialogTrigger class="DialogTrigger">
			<slot name="trigger" />
			<DialogPortal>
				<DialogOverlay class="DialogOverlay">
					<DialogContent class="DialogContent">
						<DialogTitle class="dialog-title">{{
							props.title
						}}</DialogTitle>
						<DialogDescription>
							<slot name="content" />
						</DialogDescription>
						<DialogClose class="DialogClose"
							><Icon name="mdi:close"
						/></DialogClose>
					</DialogContent>
				</DialogOverlay>
			</DialogPortal>
		</DialogTrigger>
	</DialogRoot>
</template>

<script setup lang="ts">
type Props = {
	title: string;
};

const props = defineProps<Props>();
</script>
