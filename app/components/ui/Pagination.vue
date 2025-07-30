<script setup lang="ts" generic="I">
import { computed } from 'vue'
import { useRoute } from '#app'
import ChevronRightIcon from '~/components/icons/ChevronRightIcon.vue'

const { items = [], perPage = 8 } = defineProps<{
	items: I[]
	perPage?: number
}>()

const route = useRoute()

const currentPage = computed(() => (route.query?.page ? +route.query.page : 1))
const pages = computed(() => Math.floor(items.length / perPage))

const getItems = computed(() => {
	if (items?.length) {
		const from = currentPage.value === 1 ? 0 : perPage * currentPage.value
		const to =
			currentPage.value === 1 ? perPage : perPage * currentPage.value + perPage

		return items.slice(from, to)
	}
})
</script>

<template>
	<div>
		<slot :items="getItems" />

		<ul class="mt-[50px] flex gap-4">
			<li v-for="page in pages" :key="page">
				<NuxtLink
					:to="`/?page=${page}`"
					:class="{
						'bg-light-gray text-black hover:bg-gray': currentPage !== page,
						'bg-black text-white': currentPage === page,
					}"
					class="flex size-11 items-center justify-center rounded-lg"
				>
					{{ page }}
				</NuxtLink>
			</li>

			<li v-if="currentPage < pages">
				<NuxtLink
					:to="`/?page=${currentPage + 1}`"
					class="flex size-11 cursor-pointer items-center justify-center rounded-lg border-1 border-light-gray hover:bg-light-gray"
				>
					<ChevronRightIcon />
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>
