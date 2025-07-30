<script setup lang="ts">
import PostCard, { type Post } from '~/components/ui/posts/PostCard.vue'
import Pagination from '~/components/ui/Pagination.vue'

export interface PostList {
	posts?: Post[]
}

defineProps<PostList>()
</script>

<template>
	<section>
		<Pagination v-if="posts?.length" :items="posts">
			<template #default="{ items }">
				<div class="grid grid-cols-4 gap-x-8 gap-y-10">
					<PostCard v-for="post in items" :post="post" :key="post.id" />
				</div>
			</template>
		</Pagination>
		<p v-else>Ничего не найдено</p>
	</section>
</template>
