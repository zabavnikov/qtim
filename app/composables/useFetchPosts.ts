import { useFetch } from '#imports'
import type { Post } from '~/components/ui/posts/PostCard.vue'

export async function useFetchPosts() {
	return useFetch<Post[]>(
		'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/',
	)
}
