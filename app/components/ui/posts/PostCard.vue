<script setup lang="ts">
export interface Post {
	id: string
	title: string
	image: string
	preview: string
}

defineProps<{
	post: Post
}>()
</script>

<template>
	<article
		class="group relative transition-transform hover:-translate-y-[20px]"
	>
		<img
			src="https://dummyimage.com/400x400/999/fff"
			:alt="post.title"
			class="mb-6 block aspect-square"
		/>
		<h2 class="mb-3 text-h2">{{ post.title }}</h2>
		<p
			class="text-h2 text-pink opacity-0 transition-opacity group-hover:opacity-100"
		>
			Read more
		</p>
		<NuxtLink
			:to="{ name: 'posts-id', params: { id: post.id } }"
			class="absolute inset-0"
		/>
	</article>
</template>
