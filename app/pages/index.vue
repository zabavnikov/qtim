<script setup lang="ts">
import { useFetchPosts } from '~/composables/useFetchPosts'
import PostList from '~/components/ui/posts/PostList.vue'

const posts = await useFetchPosts()
</script>

<template>
	<NuxtLayout>
		<section class="mb-[60px]">
			<h1 class="text-h1">Articles</h1>
		</section>

		<PostList :posts="posts" />
	</NuxtLayout>
</template>
