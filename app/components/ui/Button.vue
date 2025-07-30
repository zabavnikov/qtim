<script setup lang="ts">
import { computed } from 'vue'

export interface Button {
	type?: 'submit' | 'button' | 'reset'
	variant?: 'primary'
}

const { type = 'button', variant = 'primary' } = defineProps<Button>()

/*
	Вынес в вычисляемое свойство,
	чтобы в дальнейшем можно было применять
 	различные variant для кнопки.
 */
const classes = computed(() => {
	return ['h-[52px] rounded-full bg-black px-8 text-white']
})
</script>

<template>
	<button :type :class="classes">
		<slot />
	</button>
</template>
