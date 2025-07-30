<script setup lang="ts">
import LanguageIcon from '~/components/icons/LanguageIcon.vue'
import Button from '~/components/ui/Button.vue'
</script>

<template>
	<nav class="flex items-center gap-[91px]">
		<ul class="flex gap-[58px]">
			<li>
				<NuxtLink to="/">Works</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/">About</NuxtLink>
			</li>
		</ul>
		<div class="flex gap-4">
			<LanguageIcon />
			<Button>Let’s work</Button>
		</div>
	</nav>
</template>
