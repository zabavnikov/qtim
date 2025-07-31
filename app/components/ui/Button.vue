<script setup lang="ts">
export interface Button {
	type?: 'submit' | 'button' | 'reset'
}

const { type = 'button' } = defineProps<Button>()
</script>

<template>
	<button :type="type" class="'h-[52px] rounded-full bg-black px-8 text-white">
		<slot />
	</button>
</template>
