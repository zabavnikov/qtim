import { useFetch, showError } from '#imports'
import type { Post } from '~/components/ui/posts/PostCard.vue'

export async function useFetchPost(postId: string) {
	const { data, error } = await useFetch<Post>(
		`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId}`,
	)

	if (error.value) {
		showError({
			statusCode: error.value.statusCode,
			statusMessage: error.value.data
		})
	}

	return data
}
