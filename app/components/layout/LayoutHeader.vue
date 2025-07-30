<script setup lang="ts">
import Logotype from '~/components/ui/Logotype.vue'
import LayoutHeaderNav from '~/components/layout/LayoutHeaderNav.vue'
</script>

<template>
	<header class="sticky top-0 bg-white/90 backdrop-blur-sm z-10">
		<div class="container">
			<div class="flex h-[120px] items-center justify-between">
				<NuxtLink to="/">
					<Logotype />
				</NuxtLink>
				<LayoutHeaderNav />
			</div>
		</div>
	</header>
</template>
