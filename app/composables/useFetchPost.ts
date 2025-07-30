import { useFetch } from '#imports'
import type { Post } from '~/components/ui/posts/PostCard.vue'

export async function useFetchPost(postId: string) {
	const { data } = await useFetch<Post>(
		`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId}`,
	)

	return data
}
