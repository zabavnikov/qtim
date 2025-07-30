<script setup lang="ts">
import { useFetchPost } from '~/composables/useFetchPost'
import { useRoute } from '#app'

const route = useRoute()

const post = await useFetchPost(route.params.id as string)
</script>

<template>
	<NuxtLayout name="detail">
		<section class="mb-[60px]">
			<h1 class="text-h1">{{ post?.title }}</h1>
		</section>

		<img
			src="https://dummyimage.com/1504x700/999/fff"
			:alt="post?.title"
			class="mb-[80px] block w-full object-fit"
		/>

		<div class="grid grid-cols-2">
			<div>
				<p class="mb-8">About</p>
				<p class="text-h4">{{ post?.preview }}</p>
			</div>
		</div>
	</NuxtLayout>
</template>
