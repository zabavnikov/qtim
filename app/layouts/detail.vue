<script setup lang="ts">
import LayoutHeader from '~/components/layout/LayoutHeader.vue'
import LayoutFooter from '~/components/layout/LayoutFooter.vue'
</script>

<template>
	<LayoutHeader />

	<div class="h-[120px]"></div>

	<div class="container">
		<slot />
	</div>

	<div class="h-[80px]"></div>

	<LayoutFooter />
</template>
